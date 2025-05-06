import { useState, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Static data
const rawData = [
  { month: "Jan", income: 5000, expense: 3200 },
  { month: "Feb", income: 7000, expense: 4500 },
  { month: "Mar", income: 6500, expense: 4800 },
  { month: "Apr", income: 6000, expense: 4300 },
  { month: "May", income: 8000, expense: 5500 },
  { month: "Jun", income: 7500, expense: 5200 },
  { month: "Jul", income: 7000, expense: 7000 }, // New month added
];

const IncomeExpenseChart = () => {
  const [currency, setCurrency] = useState("USD"); // USD or GHS
  const exchangeRate = 13.5;
  const currencySymbol = currency === "USD" ? "$" : "₵";

  // Convert the data based on the selected currency
  const convertedData = useMemo(() => {
    console.log('Raw Data:', rawData);  // Log the rawData for debugging
    return rawData.map((item) => ({
      month: item.month,
      income: currency === "USD" ? item.income : item.income * exchangeRate,
      expense: currency === "USD" ? item.expense : item.expense * exchangeRate,
    }));
  }, [currency]);

  console.log("Converted Data: ", convertedData); // Debugging: Check if all months are there

  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1e293b", // matching bg-slate-800
    },
    title: {
      text: "",
      style: { color: "#ffffff" },
    },
    xAxis: {
      categories: convertedData.map((item) => item.month),
      title: { text: "Month", style: { color: "#ffffff" } },
      labels: { style: { color: "#ffffff" } },
    },
    yAxis: {
      title: {
        text: `Amount (${currencySymbol})`,
        style: { color: "#ffffff" },
      },
      labels: {
        formatter: function () {
          return currencySymbol + this.value.toFixed(0);
        },
        style: { color: "#ffffff" },
      },
    },
    tooltip: {
      shared: true,
      backgroundColor: "#334155",
      style: { color: "#ffffff" },
      formatter: function () {
        const month = this.points[0].key; // Access the current month from the x-axis
        return `<b>${month}</b><br/>
          Income: ${currencySymbol}${this.points[0].y.toFixed(2)}<br/>
          Expense: ${currencySymbol}${this.points[1].y.toFixed(2)}`;
      },
    },
    legend: {
      itemStyle: { color: "#ffffff" },
      itemHoverStyle: { color: "#ffff00" },
    },
    plotOptions: {
      column: {
        borderRadius: 5,
      },
    },
    series: [
      {
        name: "Income",
        data: convertedData.map((item) => Number(item.income.toFixed(2))),
        color: "#22c55e",
      },
      {
        name: "Expense",
        data: convertedData.map((item) => Number(item.expense.toFixed(2))),
        color: "#ef4444",
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="bg-slate-800 p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Income vs Expense</h2>
        <div className="space-x-2">
          {/* Dropdown for selecting currency */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="px-4 py-2 rounded-md bg-slate-700 text-white border border-slate-600 hover:bg-slate-600"
          >
            <option value="USD">By Dollar $</option>
            <option value="GHS">By GHS ₵ </option>
          </select>
        </div>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default IncomeExpenseChart;
