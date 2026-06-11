import { MessageSquare } from "lucide-react";
import { useEffect, useRef } from "react";

export default function TranscriptViewer({ transcript, callStatus }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  if (callStatus === "idle") return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center gap-2 px-5 py-4 border-b border-gray-100">
        <MessageSquare className="w-5 h-5 text-medical-600" />
        <h2 className="font-semibold text-gray-800">Live Transcript</h2>
      </div>

      <div className="p-5 h-64 overflow-y-auto flex flex-col gap-3">
        {transcript.length === 0 ? (
          <p className="text-gray-400 text-sm text-center mt-8">
            Transcript will appear here during the call...
          </p>
        ) : (
          transcript.map((entry, index) => (
            <div
              key={index}
              className={"flex " + (entry.role === "agent" ? "justify-start" : "justify-end")}
            >
              <div
                className={"max-w-xs lg:max-w-md px-4 py-2 rounded-2xl text-sm " + (entry.role === "agent" ? "bg-medical-100 text-medical-900" : "bg-gray-100 text-gray-800")}
              >
                <p className="font-semibold text-xs mb-1 opacity-60">
                  {entry.role === "agent" ? "AI Receptionist" : "You"}
                </p>
                <p>{entry.content}</p>
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
