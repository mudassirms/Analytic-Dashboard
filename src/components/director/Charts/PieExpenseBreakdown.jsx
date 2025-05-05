import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import employeeExpenses from "../../../data/employeeExpenses";

const PieExpenseBreakdown = ({ employeeIndex = 2 }) => {
  const pieData = employeeExpenses.series.map((item) => ({
    name: item.name,
    y: item.data[employeeIndex],
    color: item.color,
  }));

  const pieExpenseOptions = {
    chart: {
      type: "pie",
      backgroundColor: "#1e293b",
      height: "300px",
    },
    title: {
      text: `Expense Distribution: ${employeeExpenses.categories[employeeIndex]}`,
      style: {
        fontSize: "16px",
        color: "#ffffff",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#334155",
      style: {
        color: "#ffffff",
      },
    },
    legend: {
      itemStyle: {
        color: "#ffffff",
        fontWeight: "normal",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          style: {
            color: "#ffffff",
            fontWeight: "bold",
          },
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Expenses",
        colorByPoint: true,
        data: pieData,
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full max-w-sm mx-auto my-4">
      <HighchartsReact highcharts={Highcharts} options={pieExpenseOptions} />
    </div>
  );
};

export default PieExpenseBreakdown;
