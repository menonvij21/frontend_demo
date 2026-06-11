import {
  Phone,
  Calendar,
  Clock,
  Bot,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-medical-700 via-medical-600 to-medical-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Bot className="w-4 h-4" />
              AI Voice Receptionist Demo
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Never Miss Another
              <br />
              Patient Call
            </h1>

            <p className="mt-4 text-lg text-white/90 max-w-2xl">
              An AI-powered medical receptionist that answers calls 24/7,
              schedules appointments, handles patient inquiries, and
              reduces front desk workload.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[320px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="font-medium">
                AI Receptionist Online
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>Answers Calls Instantly</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <span>Books Appointments</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
