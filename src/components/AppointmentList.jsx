import {
  Calendar,
  CheckCircle,
  Phone,
  Clock,
} from "lucide-react";

const workflowSteps = [
  {
    title: "Patient Calls Clinic",
    description:
      "The AI receptionist answers incoming calls instantly and greets the patient.",
    icon: Phone,
  },
  {
    title: "Information Collection",
    description:
      "Patient information and appointment requirements are collected automatically.",
    icon: Clock,
  },
  {
    title: "Appointment Scheduling",
    description:
      "The AI checks availability and schedules the appropriate appointment.",
    icon: Calendar,
  },
  {
    title: "Confirmation Provided",
    description:
      "Appointment details are confirmed and communicated to the patient.",
    icon: CheckCircle,
  },
];

export default function AppointmentList() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div>
          <h2 className="font-semibold text-gray-800">
            Sample Appointment Workflow
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Demonstration of how the AI receptionist manages patient calls and bookings.
          </p>
        </div>
      </div>

      <div className="p-5 space-y-4">
        {workflowSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="bg-medical-100 p-3 rounded-xl">
                <Icon className="w-5 h-5 text-medical-600" />
              </div>

              <div>
                <h3 className="font-medium text-gray-800">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
