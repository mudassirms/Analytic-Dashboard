import React, { useState } from "react";

const dataMap = {
  "2024-01": [
    { x: 0, y: 0, value: 350000 },
    { x: 1, y: 0, value: 220000 },
    { x: 2, y: 0, value: 180000 },
    { x: 0, y: 1, value: 200000 },
    { x: 1, y: 1, value: 150000 },
    { x: 2, y: 1, value: 90000 },
    { x: 0, y: 2, value: 120000 },
    { x: 1, y: 2, value: 270000 },
    { x: 2, y: 2, value: 230000 },
  ],
  "2025-01": [
    { x: 0, y: 0, value: 250000 },
    { x: 1, y: 0, value: 200000 },
    { x: 2, y: 0, value: 140000 },
    { x: 0, y: 1, value: 200000 },
    { x: 1, y: 1, value: 150000 },
    { x: 2, y: 1, value: 90000 },
    { x: 0, y: 2, value: 120000 },
    { x: 1, y: 2, value: 300000 },
    { x: 2, y: 2, value: 230000 },
  ],
  "2025-03": [
    { x: 0, y: 0, value: 350000 },
    { x: 1, y: 0, value: 220000 },
    { x: 2, y: 0, value: 180000 },
    { x: 0, y: 1, value: 200000 },
    { x: 1, y: 1, value: 150000 },
    { x: 2, y: 1, value: 90000 },
    { x: 0, y: 2, value: 120000 },
    { x: 1, y: 2, value: 270000 },
    { x: 2, y: 2, value: 230000 },
  ],
  "2024-02": [
    { x: 0, y: 0, value: 300000 },
    { x: 1, y: 0, value: 200000 },
    { x: 2, y: 0, value: 150000 },
    { x: 0, y: 1, value: 180000 },
    { x: 1, y: 1, value: 130000 },
    { x: 2, y: 1, value: 100000 },
    { x: 0, y: 2, value: 100000 },
    { x: 1, y: 2, value: 250000 },
    { x: 2, y: 2, value: 210000 },
  ],
};

const customers = ["HUAWEI", "ZTE", "Ericson"];
const countries = ["SA", "Ghana", "Tanzania"];
const years = ["2024","2025"];
const months = ["01", "02","03"];

function getColor(value, max) {
  const ratio = value / max;
  if (ratio > 0.7) return "bg-blue-500";
  if (ratio > 0.4) return "bg-yellow-400";
  return "bg-red-500";
}

const CustomHeatmap = () => {
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState("01");
  const key = `${year}-${month}`;
  const data = dataMap[key] || [];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
<div className="px-4 pt-3 pb-1 rounded-md bg-slate-800 text-white">
<h2 className="text-xl mb-4">Country-Customer Matrix</h2>

      <div className="flex gap-4 mb-4">
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-slate-700 text-white px-2 py-1 rounded"
        >
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="bg-slate-700 text-white px-2 py-1 rounded"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {new Date(`2024-${m}-01`).toLocaleString("default", { month: "long" })}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-[80px_repeat(3,1fr)] gap-1 text-xs mb-0">
      {/* Header Row */}
        <div></div>
        {customers.map((cust) => (
          <div key={cust} className="text-center font-semibold">{cust}</div>
        ))}

        {/* Data Rows */}
        {countries.map((country, yIdx) => (
          <React.Fragment key={country}>
            <div className="font-semibold text-right pr-2">{country}</div>
            {customers.map((_, xIdx) => {
              const cell = data.find((d) => d.x === xIdx && d.y === yIdx);
              const value = cell?.value || 0;
              return (
                <div
                  key={`${xIdx}-${yIdx}`}
                  className={`h-16 flex items-center justify-center ${getColor(value, maxValue)} rounded text-xs`}
                  title={`${country} - ${customers[xIdx]}: $${value.toLocaleString()}`}
                >
                  ${value.toLocaleString()}
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CustomHeatmap;
