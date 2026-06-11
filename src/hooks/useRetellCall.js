import { useState, useRef, useCallback } from "react";
import { RetellWebClient } from "retell-client-js-sdk";

const client = new RetellWebClient();

const BACKEND_URL = "https://backend-demo-55yw.onrender.com";

export function useRetellCall() {
  const [callStatus, setCallStatus] = useState("idle");
  const [callId, setCallId] = useState(null);
  const [transcript, setTranscript] = useState([]);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState(null);

  const timerRef = useRef(null);
  const listenersRegistered = useRef(false);

  const startTimer = () => {
    stopTimer();

    timerRef.current = setInterval(() => {
      setDuration((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const registerListeners = () => {
    if (listenersRegistered.current) return;

    listenersRegistered.current = true;

    client.on("call_started", () => {
      console.log("CALL STARTED");
      setCallStatus("active");
      startTimer();
    });

    client.on("call_ended", () => {
      console.log("CALL ENDED");
      setCallStatus("ended");
      stopTimer();
    });

    client.on("update", (update) => {
      console.log("UPDATE:", update);

      if (update?.transcript) {
        setTranscript(update.transcript);
      }
    });

    client.on("error", (err) => {
      console.error("RETELL ERROR:", err);

      setError(err?.message || "Call error occurred");
      setCallStatus("idle");
      stopTimer();
    });
  };

  const startCall = useCallback(async () => {
    try {
      setError(null);
      setTranscript([]);
      setCallStatus("connecting");

      registerListeners();

      console.log("Requesting microphone access...");

      await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      console.log("Microphone granted");

      const res = await fetch(
        `${BACKEND_URL}/api/calls/web`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Backend error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Backend Response:", data);

      if (!data.accessToken) {
        throw new Error("No access token received");
      }

      setCallId(data.callId);

      console.log("Starting Retell call...");

      await client.startCall({
        accessToken: data.accessToken,
      });

      console.log("Retell startCall executed");
    } catch (err) {
      console.error("START CALL ERROR:", err);

      setError(err.message || "Failed to start call");
      setCallStatus("idle");
      stopTimer();
    }
  }, []);

  const endCall = useCallback(async () => {
    try {
      await client.stopCall();
    } catch (err) {
      console.error(err);
    }

    stopTimer();
    setCallStatus("ended");
  }, []);

  const resetCall = useCallback(() => {
    stopTimer();

    setCallStatus("idle");
    setCallId(null);
    setTranscript([]);
    setDuration(0);
    setError(null);
  }, []);

  return {
    callStatus,
    callId,
    transcript,
    duration,
    error,
    startCall,
    endCall,
    resetCall,
  };
}
