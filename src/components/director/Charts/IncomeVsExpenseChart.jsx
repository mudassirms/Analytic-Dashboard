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
  { month: "Jul", income: 7000, expense: 7000 },
];

const IncomeExpenseChart = () => {
  const [currency, setCurrency] = useState("USD");
  const exchangeRate = 13.5;
  const currencySymbol = currency === "USD" ? "$" : "₵";

  const convertedData = useMemo(() => {
    return rawData.map((item) => ({
      month: item.month,
      income: currency === "USD" ? item.income : item.income * exchangeRate,
      expense: currency === "USD" ? item.expense : item.expense * exchangeRate,
    }));
  }, [currency]);

  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1e293b",
      height: 300,
    },
    title: {
      text: "",
      style: { color: "#ffffff", fontSize: "16px" },
    },
    xAxis: {
      categories: convertedData.map((item) => item.month),
      title: { text: "Month", style: { color: "#cbd5e1" } },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: {
        text: `Amount (${currencySymbol})`,
        style: { color: "#cbd5e1" },
      },
      labels: {
        formatter: function () {
          return currencySymbol + this.value.toFixed(0);
        },
        style: { color: "#cbd5e1" },
      },
      gridLineColor: "#334155",
    },
    tooltip: {
      shared: true,
      backgroundColor: "#334155",
      style: { color: "#ffffff" },
      formatter: function () {
        const month = this.points[0].key;
        return `<b>${month}</b><br/>
          Income: ${currencySymbol}${this.points[0].y.toFixed(2)}<br/>
          Expense: ${currencySymbol}${this.points[1].y.toFixed(2)}`;
      },
    },
    legend: {
      itemStyle: { color: "#e2e8f0" },
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
    <div className="w-full max-w-sm mx-auto my-6 bg-slate-800 p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Income vs Expense</h2>
        <div className="space-x-2">
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
