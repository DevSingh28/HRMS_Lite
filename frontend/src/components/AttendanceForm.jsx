import { useState } from "react";
import api from "../api/api";

export default function AttendanceForm({ employeeId, onSuccess }) {
  const [status, setStatus] = useState("Present");

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/attendance/", {
      employee_id: employeeId,
      date: new Date().toISOString().split("T")[0],
      status,
    });

    onSuccess();
  };

  return (
    <form onSubmit={submit} className="space-x-2">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2"
      >
        <option>Present</option>
        <option>Absent</option>
      </select>
      <button className="bg-green-600 text-white px-3 py-2 rounded cursor-pointer">
        Mark
      </button>
    </form>
  );
}
