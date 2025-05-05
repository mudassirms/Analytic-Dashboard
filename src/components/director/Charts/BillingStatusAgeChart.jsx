import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BillingStatusAgeChart = () => {
  const options = {
    chart: {
      type: "scatter",
      backgroundColor: "#1e293b",
      zoomType: "xy",
      height: "300px", // Consistent height for all charts

    },
    title: {
      text: "Billing Status Age vs Price",
      style: { color: "#fff" },
    },
    xAxis: {
      title: {
        enabled: true,
        text: "Billing Age (days)",
        style: { color: "#ccc" },
      },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: {
        text: "Price ($)",
        style: { color: "#ccc" },
      },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155",
    },
    legend: {
      itemStyle: { color: "#eee" },
    },
    tooltip: {
      backgroundColor: "#1f2937",
      style: { color: "#fff" },
      pointFormat: "Age: <b>{point.x} days</b><br/>Price: <b>${point.y}</b>",
    },
    series: [
      {
        name: "Billing Entries",
        color: "#f59e0b", 
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
  };

  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BillingStatusAgeChart;
