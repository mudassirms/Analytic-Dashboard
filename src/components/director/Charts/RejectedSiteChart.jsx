import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RejectedSiteChart = () => {
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "#1e293b",
      height: 300,
    },
    title: {
      text: "Rejected Site Count",
      style: { color: "#ffffff", fontSize: "16px" },
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      title: {
        text: "Months",
        style: { color: "#cbd5e1" }, // slate-300
      },
      labels: {
        style: { color: "#cbd5e1" }, // slate-300
      },
      gridLineColor: "#334155", // slate-700
    },
    yAxis: {
      title: {
        text: "Rejected Count",
        style: { color: "#cbd5e1" },
      },
      labels: {
        style: { color: "#cbd5e1" },
      },
      gridLineColor: "#334155",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#1f2937", // slate-800
      style: { color: "#ffffff" },
    },
    series: [
      {
        name: "Rejected Sites",
        data: [
          { y: 2, color: "#ef4444" },
          { y: 5, color: "#f97316" },
          { y: 3, color: "#eab308" },
          { y: 4, color: "#10b981" },
          { y: 6, color: "#3b82f6" },
          { y: 1, color: "#8b5cf6" },
        ],
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

export default RejectedSiteChart;
