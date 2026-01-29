import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { FiUsers, FiCalendar } from "react-icons/fi";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100">
        <header className="bg-linear-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">HRMS Lite</h1>
            <nav className="flex gap-6">
              <NavLink
                to="/"
                className="flex items-center gap-2 opacity-80 hover:opacity-100"
              >
                <FiUsers /> Employees
              </NavLink>
              <NavLink
                to="/attendance"
                className="flex items-center gap-2 opacity-80 hover:opacity-100"
              >
                <FiCalendar /> Attendance
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="py-10">
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
