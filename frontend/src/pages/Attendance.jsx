import { useEffect, useState } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import api from "../api/api";

export default function Attendance() {
  const [employees, setEmployees] = useState([]);
  const [records, setRecords] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    api.get("/employees/").then((res) => setEmployees(res.data));
  }, []);

  const loadAttendance = async (id) => {
    setSelected(id);
    const res = await api.get(`/attendance/${id}`);
    setRecords(res.data);
  };

  const mark = async (status) => {
    await api.post("/attendance/", {
      employee_id: selected,
      date: new Date().toISOString().split("T")[0],
      status,
    });
    loadAttendance(selected);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 space-y-6">
      <h2 className="text-xl font-semibold">Attendance</h2>

      <select
        onChange={(e) => loadAttendance(e.target.value)}
        className="border rounded px-3 py-2 w-full"
      >
        <option value="">Select employee</option>
        {employees.map((e) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>

      {selected && (
        <div className="bg-white border rounded-lg p-4 space-y-4">
          <div className="flex gap-4">
            <button
              onClick={() => mark("Present")}
              className="flex items-center gap-2 text-emerald-600 cursor-pointer"
            >
              <FiCheckCircle /> Present
            </button>
            <button
              onClick={() => mark("Absent")}
              className="flex items-center gap-2 text-rose-600 cursor-pointer"
            >
              <FiXCircle /> Absent
            </button>
          </div>

          <ul className="space-y-2">
            {records.map((r) => (
              <li
                key={r.id}
                className="flex justify-between border rounded px-3 py-2 text-sm "
              >
                <span>{r.date}</span>
                <span
                  className={
                    r.status === "Present"
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }
                >
                  {r.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
