import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-medical-600 p-2 rounded-xl">
            <Heart className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-medical-800">
              MediConnect AI
            </h1>
            <p className="text-xs text-gray-500">
              AI Medical Receptionist
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-gray-600">System Online</span>
        </div>
      </div>
    </header>
  );
}
