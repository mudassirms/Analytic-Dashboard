import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const RejectedSiteChart = () => {
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "#1e293b", 
      height: "300px", 

    },
    title: {
      text: "Rejected Site Count",
      style: { color: "#fff" },
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      title: { text: "Months", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155", 
    },
    yAxis: {
      title: { text: "Rejected Count", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155",
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: "#1f2937",
      style: { color: "#fff" },
    },
    series: [
      {
        name: "Rejected Sites",
        data: [
          { y: 2, color: "#ef4444" },  // red-500
          { y: 5, color: "#f97316" },  // orange-500
          { y: 3, color: "#eab308" },  // yellow-500
          { y: 4, color: "#10b981" },  // emerald-500
          { y: 6, color: "#3b82f6" },  // blue-500
          { y: 1, color: "#8b5cf6" },  // violet-500
        ],
      },
    ],
  };

  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RejectedSiteChart;
