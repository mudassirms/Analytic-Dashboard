import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import employeeScoreData from "../../../data/employeeData";

const EmployeeScoreDonut = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const options = {
    chart: {
      type: "pie",
      backgroundColor: "#1e293b",
      height: 250,
    },
    title: {
      text: `<span style="color:#fff;font-size:12px">Performance</span>`,
      align: "center",
      verticalAlign: "middle",
      y: 40,
      style: { color: "#fff" },
    },
    tooltip: { enabled: false },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "60%"],
        innerSize: "70%",
        dataLabels: {
          enabled: true,
          format: `<span style="color:#fff;font-size:13px">{point.y}%</span>`,
          distance: 5,
          filter: {
            property: "name",
            operator: "===",
            value: "Achieved",
          },
        },
      },
    },
    series: [
      {
        name: "Score",
        data: selectedEmployee
          ? [
              { name: "Achieved", y: selectedEmployee.score, color: "#22c55e" },
              { name: "Remaining", y: 100 - selectedEmployee.score, color: "#334155" },
            ]
          : [],
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full max-w-xl h-[300px] mx-auto bg-slate-800 p-4 rounded-xl shadow-md overflow-hidden">
      {/* Header: Dropdown aligned right */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-white text-base font-semibold">Employee Performance</h2>
        <select
          className="p-1.5 rounded-md bg-slate-700 text-white text-sm border border-slate-600"
          value={selectedEmployee ? selectedEmployee.name : ""}
          onChange={(e) => {
            const selectedName = e.target.value;
            if (selectedName === "") {
              setSelectedEmployee(null);
            } else {
              const employee = employeeScoreData.find(emp => emp.name === selectedName);
              setSelectedEmployee(employee);
            }
          }}
        >
          <option value="">Select Employee</option>
          {employeeScoreData.map((employee) => (
            <option key={employee.name} value={employee.name}>
              {employee.name}
            </option>
          ))}
        </select>
      </div>

      {/* Chart and Details */}
      <div className="flex gap-2 h-[210px]">
        {/* Chart */}
        <div className="flex-1">
          {selectedEmployee ? (
            <HighchartsReact highcharts={Highcharts} options={options} />
          ) : (
            <div className="h-full flex items-center justify-center text-sm text-white bg-slate-700 rounded-md">
              Please select an employee
            </div>
          )}
        </div>

        {/* Employee Details */}
        {selectedEmployee && (
          <div className="flex-1 text-white text-xs overflow-y-auto">
            <h3 className="font-medium mb-1">Employee Details</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-700 p-1 rounded">
                <span className="font-medium">Name: </span>
                {selectedEmployee.name}
              </div>
              {selectedEmployee.metrics.map((metric, index) => (
                <div key={index} className="bg-slate-700 p-1 rounded">
                  <span className="font-medium">{metric.label}: </span>
                  {metric.value}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeScoreDonut;
