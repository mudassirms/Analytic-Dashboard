import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import employeeExpenses from "../../../data/employeeExpenses";

const EmployeeExpenseBreakdown = () => {
  const expenseBreakdownOptions = {
    chart: {
      type: "bar",
      height: 300,
      backgroundColor: "#1e293b", // slate-800
    },
    title: {
      text: "",
      style: {
        fontSize: "16px",
        color: "#ffffff", // white
      },
    },
    xAxis: {
      categories: employeeExpenses.categories,
      title: { text: null },
      labels: {
        style: {
          color: "#cbd5e1", // slate-300
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Expense",
        style: {
          color: "#cbd5e1", // slate-300
        },
      },
      labels: {
        style: {
          color: "#cbd5e1", // slate-300
        },
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: "#ffffff", // white
        },
      },
    },
    legend: {
      reversed: true,
      backgroundColor: "transparent",
      itemStyle: {
        color: "#e2e8f0", // slate-200
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          color: "#ffffff", // white
          style: {
            textOutline: "none",
          },
        },
      },
    },
    series: employeeExpenses.series,
    credits: { enabled: false },
  };

  return (
    <div className="bg-slate-800 p-4 rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">Employee Expense Breakdown</h2>
      </div>
      <HighchartsReact highcharts={Highcharts} options={expenseBreakdownOptions} />
    </div>
  );
};

export default EmployeeExpenseBreakdown;
