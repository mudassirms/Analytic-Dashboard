import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import employeeExpenses from "../../../data/employeeExpenses";

const PieExpenseBreakdown = () => {
  const [selectedEmployeeName, setSelectedEmployeeName] = useState("");

  const selectedEmployeeIndex = employeeExpenses.categories.indexOf(selectedEmployeeName);

  const pieData =
    selectedEmployeeIndex !== -1
      ? employeeExpenses.series.map((item) => ({
          name: item.name,
          y: item.data[selectedEmployeeIndex],
          color: item.color,
        }))
      : [];

  const pieExpenseOptions = {
    chart: {
      type: "pie",
      backgroundColor: "#1e293b",
      height: 300,
    },
    title: {
      text: null, // Removed title text
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#334155",
      style: {
        color: "#ffffff",
      },
    },
    legend: {
      itemStyle: {
        color: "#ffffff",
        fontWeight: "normal",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color: "#ffffff",
            fontWeight: "bold",
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Expenses",
        colorByPoint: true,
        data: pieData,
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full max-w-xl h-[370px] mx-auto bg-slate-800 p-4 rounded-xl shadow-md">
      {/* Header: Dropdown aligned right */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-white text-base font-semibold">Employee Expenses</h2>
        <select
          className="p-1.5 rounded-md bg-slate-700 text-white text-sm border border-slate-600"
          value={selectedEmployeeName}
          onChange={(e) => setSelectedEmployeeName(e.target.value)}
        >
          <option value="">Select Employee</option>
          {employeeExpenses.categories.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Chart or fallback */}
      <div className="h-[300px]">
        {selectedEmployeeName ? (
          <HighchartsReact highcharts={Highcharts} options={pieExpenseOptions} />
        ) : (
          <div className="h-full flex items-center justify-center text-sm text-white bg-slate-700 rounded-md">
            Please select an employee
          </div>
        )}
      </div>
    </div>
  );
};

export default PieExpenseBreakdown;
