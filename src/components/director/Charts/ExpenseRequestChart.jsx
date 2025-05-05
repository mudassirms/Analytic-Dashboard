import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ExpenseRequestChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1e293b",
      height: 300,
    },
    title: {
      text: "Expense Requests by Country",
      style: { color: "#ffffff", fontSize: "16px" },
    },
    xAxis: {
      categories: ["USA", "India", "Germany", "UK", "Canada", "Japan"],
      title: {
        text: "Country",
        style: { color: "#cbd5e1" }, // slate-300
      },
      labels: {
        style: { color: "#cbd5e1" },
      },
      gridLineColor: "#334155", // slate-700
    },
    yAxis: {
      min: 0,
      title: {
        text: "Expense Amount ($)",
        style: { color: "#cbd5e1" },
      },
      labels: {
        style: { color: "#cbd5e1" },
      },
      gridLineColor: "#334155",
    },
    legend: {
      itemStyle: { color: "#e2e8f0" }, // slate-200
    },
    tooltip: {
      backgroundColor: "#1f2937", // slate-800
      style: { color: "#ffffff" },
      pointFormat: "Amount: <b>${point.y}</b>",
    },
    series: [
      {
        name: "Expense",
        data: [10000, 8500, 6200, 7000, 9200, 5400],
        color: "#3b82f6", // Tailwind blue-500
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full max-w-sm mx-auto my-6 bg-slate-800 p-4 rounded-xl shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ExpenseRequestChart;
