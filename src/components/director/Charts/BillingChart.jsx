import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BillingChart = () => {
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "#1e293b", // slate-800
      height: 300,
    },
    title: {
      text: "Billing Status",
      style: { color: "#ffffff", fontSize: "16px" },
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      title: { text: "Months", style: { color: "#cbd5e1" } }, // slate-300
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: { text: "Number of Bills", style: { color: "#cbd5e1" } },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    legend: {
      itemStyle: { color: "#e2e8f0" }, // slate-200
    },
    tooltip: {
      backgroundColor: "#1f2937", // slate-800
      style: { color: "#ffffff" },
      shared: true,
    },
    series: [
      {
        name: "Done",
        data: [5, 10, 8, 7, 12, 6],
        color: "#22c55e", // green-500
      },
      {
        name: "Pending",
        data: [3, 4, 6, 5, 7, 8],
        color: "#facc15", // yellow-400
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

export default BillingChart;
