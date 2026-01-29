import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import api from "../api/api";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
    employee_id: "",
    name: "",
    email: "",
    department: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/employees/", form);
      setForm({ employee_id: "", name: "", email: "", department: "" });
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.detail || "Unable to save employee");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-lg font-medium mb-4">Add Employee</h2>

      <form onSubmit={submit} className="grid grid-cols-2 gap-4">
        <input
          name="employee_id"
          value={form.employee_id}
          onChange={handleChange}
          placeholder="Employee ID"
          className="border rounded px-3 py-2 col-span-1"
        />
        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Department"
          className="border rounded px-3 py-2 col-span-1"
        />
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border rounded px-3 py-2 col-span-2"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="border rounded px-3 py-2 col-span-2"
        />

        {error && <p className="text-sm text-rose-600 col-span-2">{error}</p>}

        <button
          disabled={loading}
          className="col-span-2 inline-flex items-center justify-center cursor-pointer disabled:cursor-not-allowed gap-2 bg-slate-800 hover:bg-slate-900 text-white py-2 rounded"
        >
          <FiPlus />
          {loading ? "Saving..." : "Add Employee"}
        </button>
      </form>
    </div>
  );
}
