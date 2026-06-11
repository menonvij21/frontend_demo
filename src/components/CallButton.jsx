import { Phone, PhoneOff, Loader2 } from "lucide-react";

export default function CallButton({ callStatus, onStart, onEnd }) {
  const isIdle = callStatus === "idle" || callStatus === "ended";
  const isConnecting = callStatus === "connecting";
  const isActive = callStatus === "active";

  return (
    <div className="flex flex-col items-center gap-4">
      {isIdle && (
        <button
          onClick={onStart}
          className="flex items-center gap-3 bg-medical-600 hover:bg-medical-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
        >
          <Phone className="w-6 h-6" />
          Talk to AI Receptionist
        </button>
      )}

      {isConnecting && (
        <button
          disabled
          className="flex items-center gap-3 bg-yellow-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg cursor-not-allowed"
        >
          <Loader2 className="w-6 h-6 animate-spin" />
          Connecting...
        </button>
      )}

      {isActive && (
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2 text-green-600 font-semibold">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            Call Active
          </div>
          <button
            onClick={onEnd}
            className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
          >
            <PhoneOff className="w-6 h-6" />
            End Call
          </button>
        </div>
      )}
    </div>
  );
}
