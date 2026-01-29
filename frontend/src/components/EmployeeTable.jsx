import { FiTrash2 } from "react-icons/fi";

export default function EmployeeTable({ employees, onDelete }) {
  if (!employees.length) {
    return (
      <div className="bg-white border rounded p-6 text-center text-gray-500">
        No employees added yet
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden mt-6">
      <table className="w-full">
        <thead className="bg-slate-50 text-sm text-slate-600">
          <tr>
            <th className="p-3 text-left">Employee</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3"></th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id} className="border-t">
              <td className="p-3">
                <div className="font-medium">{e.name}</div>
                <div className="text-sm text-gray-500">{e.employee_id}</div>
              </td>
              <td className="p-3 text-gray-600">{e.email}</td>
              <td className="p-3">{e.department}</td>
              <td className="p-3 text-right">
                <button
                  onClick={() => onDelete(e.id)}
                  className="text-rose-600 hover:text-rose-700 cursor-pointer"
                >
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
