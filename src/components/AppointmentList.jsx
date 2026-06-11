import { Calendar, Clock, User, CheckCircle } from "lucide-react";

const mockAppointments = [
  {
    id: 1,
    patient: "John Smith",
    date: "2024-12-20",
    time: "9:00 AM",
    type: "General Checkup",
    status: "confirmed",
    doctor: "Dr. Sarah Johnson",
  },
  {
    id: 2,
    patient: "Emily Davis",
    date: "2024-12-20",
    time: "10:30 AM",
    type: "Follow-up",
    status: "confirmed",
    doctor: "Dr. Mike Chen",
  },
  {
    id: 3,
    patient: "Robert Wilson",
    date: "2024-12-21",
    time: "2:00 PM",
    type: "Consultation",
    status: "pending",
    doctor: "Dr. Sarah Johnson",
  },
];

export default function AppointmentList() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-medical-600" />
          <h2 className="font-semibold text-gray-800">
            Appointments Booked via AI
          </h2>
        </div>
        <span className="text-xs bg-medical-100 text-medical-700 px-2 py-1 rounded-full font-medium">
          {mockAppointments.length} Today
        </span>
      </div>

      <div className="divide-y divide-gray-50">
        {mockAppointments.map((apt) => (
          <div key={apt.id} className="px-5 py-4 hover:bg-gray-50 transition">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-medical-100 p-2 rounded-xl">
                  <User className="w-4 h-4 text-medical-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{apt.patient}</p>
                  <p className="text-sm text-gray-500">{apt.type}</p>
                  <p className="text-xs text-gray-400 mt-1">{apt.doctor}</p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-3 h-3" />
                  {apt.time}
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {apt.date}
                </div>
                <span
                  className={"flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full mt-1 " + (apt.status === "confirmed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700")}
                >
                  <CheckCircle className="w-3 h-3" />
                  {apt.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
