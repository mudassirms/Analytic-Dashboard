import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ExpenseRequestChart = () => {
    const options = {
        chart: {
          type: "column",
          backgroundColor: "#1e293b",
          height: "300px", // Consistent height for all charts

        },
        title: {
          text: "Expense Requests by Country",
          style: { color: "#fff" },
        },
        xAxis: {
          categories: ["USA", "India", "Germany", "UK", "Canada", "Japan"],
          title: { text: "Country", style: { color: "#ccc" } },
          labels: { style: { color: "#ccc" } },
          gridLineColor: "#334155",
        },
        yAxis: {
          min: 0,
          title: { text: "Expense Amount ($)", style: { color: "#ccc" } },
          labels: { style: { color: "#ccc" } },
          gridLineColor: "#334155",
        },
        legend: {
          itemStyle: { color: "#eee" },
        },
        tooltip: {
          backgroundColor: "#1f2937",
          style: { color: "#fff" },
          pointFormat: "Amount: <b>${point.y}</b>",
        },
        series: [
          {
            name: "Expense",
            data: [10000, 8500, 6200, 7000, 9200, 5400],
            color: "#3b82f6", // Tailwind blue-500
          },
        ],
      };
      
  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ExpenseRequestChart;
