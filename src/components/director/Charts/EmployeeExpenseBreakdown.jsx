// src/components/analytics/EmployeeExpenseBreakdown.jsx

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import employeeExpenses from "../../../data/employeeExpenses";

const EmployeeExpenseBreakdown = () => {
  const expenseBreakdownOptions = {
    chart: {
      type: "bar",
      height: "300px",
      backgroundColor: "#1e293b", 
    },
    title: {
      text: "Employee Expense Breakdown",
      style: {
        fontSize: "16px",
        color: "#ffffff", 
      },
    },
    xAxis: {
      categories: employeeExpenses.categories,
      title: { text: null },
      labels: {
        style: {
          color: "#ffffff", 
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total Expense",
        style: {
          color: "#ffffff", 
        },
      },
      labels: {
        style: {
          color: "#ffffff", 
        },
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color: "#ffffff", 
        },
      },
    },
    legend: {
      reversed: true,
      backgroundColor: "transparent", 
      itemStyle: {
        color: "#ffffff", 
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          color: "#ffffff", 
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
    <div className="w-full max-w-3xl mx-auto my-6">
      <HighchartsReact highcharts={Highcharts} options={expenseBreakdownOptions} />
    </div>
  );
};

export default EmployeeExpenseBreakdown;
