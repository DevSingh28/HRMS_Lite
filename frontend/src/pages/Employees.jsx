import { useEffect, useState } from "react";
import api from "../api/api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    const res = await api.get("/employees/");
    setEmployees(res.data);
    setLoading(false);
  };

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 space-y-8">
      <EmployeeForm onSuccess={fetchEmployees} />

      {loading ? (
        <div className="text-center text-gray-500">Loading employees…</div>
      ) : (
        <EmployeeTable employees={employees} onDelete={deleteEmployee} />
      )}
    </div>
  );
}
