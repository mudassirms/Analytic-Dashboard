import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BillingChart = () => {
  const options = {
    chart: {
      type: "bar",
      backgroundColor: "#1e293b", 
      height: "300px", // Consistent height for all charts
    },
    title: {
      text: "Billing Status",
      style: { color: "#fff" },
    },
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      title: { text: "Months", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: { text: "Number of Bills", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155", 
    },
    legend: {
      itemStyle: { color: "#eee" },
    },
    tooltip: {
      backgroundColor: "#1f2937", 
      style: { color: "#fff" },
    },
    series: [
      {
        name: "Done",
        data: [5, 10, 8, 7, 12, 6],
        color: "#22c55e", 
      },
      {
        name: "Pending",
        data: [3, 4, 6, 5, 7, 8],
        color: "#facc15", 
      },
    ],
    credits: { enabled: false }, 
  };

  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BillingChart;
