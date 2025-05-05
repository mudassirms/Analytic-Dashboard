import { useState } from "react";
import PieExpenseBreakdown from "./PieExpenseBreakdown"; 
import employeeExpenses from "../../../data/employeeExpenses";

const PieExpenseContainer = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChange = (e) => {
    const index = Number(e.target.value);
    if (index === -1) {
      setSelectedIndex(null); 
    } else {
      setSelectedIndex(index); 
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-slate-800 p-4 rounded-md text-white">
      <label className="block mb-2 text-sm font-medium">Select Employee:</label>
      <select
        className="w-full p-2 mb-4 bg-slate-700 border border-slate-600 rounded-md text-white"
        value={selectedIndex === null ? -1 : selectedIndex} 
        onChange={handleChange}
      >
        <option value={-1}>Select Employee</option> {/* Default option */}
        {employeeExpenses.categories.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </select>

      {/* Render the Pie chart if an employee is selected */}
      {selectedIndex !== null && <PieExpenseBreakdown employeeIndex={selectedIndex} />}
    </div>
  );
};

export default PieExpenseContainer;
