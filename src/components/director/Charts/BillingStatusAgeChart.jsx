import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BillingStatusAgeChart = () => {
  const options = {
    chart: {
      type: "scatter",
      backgroundColor: "#1e293b",
      zoomType: "xy",
      height: 300,
    },
    title: {
      text: "Billing Status Age vs Price",
      style: { color: "#ffffff", fontSize: "16px" },
    },
    xAxis: {
      title: {
        enabled: true,
        text: "Billing Age (days)",
        style: { color: "#cbd5e1" }, // slate-300
      },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: {
        text: "Price ($)",
        style: { color: "#cbd5e1" },
      },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    legend: {
      itemStyle: { color: "#e2e8f0" }, // slate-200
    },
    tooltip: {
      backgroundColor: "#1f2937", // slate-800
      style: { color: "#ffffff" },
      pointFormat: "Age: <b>{point.x} days</b><br/>Price: <b>${point.y}</b>",
    },
    series: [
      {
        name: "Billing Entries",
        color: "#f59e0b", // amber-500
        data: [
          [5, 2000],
          [10, 3500],
          [15, 3000],
          [20, 4000],
          [25, 4200],
          [30, 5000],
          [35, 4800],
          [40, 5300],
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

export default BillingStatusAgeChart;
