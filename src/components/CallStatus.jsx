import { Clock, Hash } from "lucide-react";

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return m + ":" + s;
}

export default function CallStatus({ callStatus, callId, duration }) {
  if (callStatus === "idle") return null;

  const statusColors = {
    connecting: "bg-yellow-50 border-yellow-200",
    active: "bg-green-50 border-green-200",
    ended: "bg-gray-50 border-gray-200",
  };

  const statusLabels = {
    connecting: "Connecting to AI Receptionist...",
    active: "Call in Progress",
    ended: "Call Ended",
  };

  return (
    <div className={"rounded-2xl border p-4 " + (statusColors[callStatus] || "")}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="font-semibold text-gray-700">
          {statusLabels[callStatus]}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          {callId && (
            <span className="flex items-center gap-1">
              <Hash className="w-4 h-4" />
              {callId.slice(0, 20)}...
            </span>
          )}
          {callStatus === "active" && (
            <span className="flex items-center gap-1 font-mono font-bold text-green-700">
              <Clock className="w-4 h-4" />
              {formatDuration(duration)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
