import { Phone, Calendar, Activity } from "lucide-react";
import CallButton from "../components/CallButton";
import CallStatus from "../components/CallStatus";
import TranscriptViewer from "../components/TranscriptViewer";
import AppointmentList from "../components/AppointmentList";
import { useRetellCall } from "../hooks/useRetellCall";

export default function Dashboard() {
  const {
    callStatus,
    callId,
    transcript,
    duration,
    error,
    startCall,
    endCall,
    resetCall,
  } = useRetellCall();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Demo Notice */}
      <div className="mb-6 bg-blue-50 border border-blue-200 rounded-2xl p-4">
        <p className="text-center text-blue-700 font-medium">
          AI Voice Receptionist Demo Environment • Sample Analytics &
          Workflows
        </p>
      </div>

      {/* Analytics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-medical-100 p-3 rounded-xl">
              <Phone className="w-5 h-5 text-medical-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">24</p>
              <p className="text-sm text-gray-500">
                Sample Calls Processed
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-3 rounded-xl">
              <Calendar className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">18</p>
              <p className="text-sm text-gray-500">
                Sample Appointments Scheduled
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-3 rounded-xl">
              <Activity className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">96%</p>
              <p className="text-sm text-gray-500">
                Sample Service Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center justify-center gap-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-medical-100 text-medical-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Live AI Demonstration
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              Try a Live Conversation
            </h2>

            <p className="text-gray-500 max-w-md">
              Speak with the AI receptionist in real time. Test
              appointment booking, patient support, office information
              requests, and automated call handling.
            </p>
          </div>

          <CallButton
            callStatus={callStatus}
            onStart={startCall}
            onEnd={endCall}
          />

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm w-full text-center">
              {error}
            </div>
          )}

          {callStatus === "ended" && (
            <button
              onClick={resetCall}
              className="text-sm text-medical-600 hover:underline"
            >
              Start a New Demo Call
            </button>
          )}

          <div className="w-full border-t pt-6 mt-2">
            <h3 className="font-semibold text-gray-800 mb-3">
              What You Can Test
            </h3>

            <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
              <div>✓ Appointment Scheduling</div>
              <div>✓ Patient FAQs</div>
              <div>✓ Office Hours & Information</div>
              <div>✓ Insurance Questions</div>
              <div>✓ Call Routing & Support</div>
              <div>✓ Natural Voice Conversations</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <CallStatus
            callStatus={callStatus}
            callId={callId}
            duration={duration}
          />

          <TranscriptViewer
            transcript={transcript}
            callStatus={callStatus}
          />
        </div>
      </div>

      <AppointmentList />

      <div className="mt-10 text-center text-xs text-gray-400">
        AI Voice Receptionist Prototype • Built for Medical Clinics,
        Dental Practices, and Healthcare Providers
      </div>
    </div>
  );
}
