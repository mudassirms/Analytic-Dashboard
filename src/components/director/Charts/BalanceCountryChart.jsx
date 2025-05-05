import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BalanceCountryChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1e293b", 
      height: "300px", // Consistent height for all charts
    },
    title: {
      text: "Balance by Country",
      style: { color: "#fff" }, 
    },
    xAxis: {
      categories: ["USA", "India", "Germany", "UK", "Canada", "Japan"],
      title: { text: "Country", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: { text: "Balance ($)", style: { color: "#ccc" } },
      labels: { style: { color: "#ccc" } },
      gridLineColor: "#334155",
    },
    tooltip: {
      backgroundColor: "#1f2937",
      style: { color: "#fff" },
      pointFormat: "Balance: <b>${point.y}</b>",
    },
    legend: {
      itemStyle: { color: "#eee" },
    },
    series: [
      {
        name: "Balance",
        data: [15000, 12000, 8000, 9500, 11000, 6000],
        color: "#10b981", 
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

export default BalanceCountryChart;
