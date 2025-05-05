import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BalanceCountryChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1e293b", // slate-800
      height: 300,
    },
    title: {
      text: "Balance by Country",
      style: { color: "#ffffff", fontSize: "16px" },
    },
    xAxis: {
      categories: ["USA", "India", "Germany", "UK", "Canada", "Japan"],
      title: { text: "Country", style: { color: "#cbd5e1" } },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    yAxis: {
      title: { text: "Balance ($)", style: { color: "#cbd5e1" } },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    tooltip: {
      backgroundColor: "#1f2937", // slate-800
      style: { color: "#ffffff" },
      pointFormat: "Balance: <b>${point.y}</b>",
    },
    legend: {
      itemStyle: { color: "#e2e8f0" }, // slate-200
    },
    series: [
      {
        name: "Balance",
        data: [15000, 12000, 8000, 9500, 11000, 6000],
        color: "#10b981", // emerald-500
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

export default BalanceCountryChart;
