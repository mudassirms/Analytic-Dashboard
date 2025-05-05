import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InsourceOutsourceReport = () => {
  const insourceOutsourceOptions = {
    chart: {
      type: "pie",
      backgroundColor: "#1e293b", // slate-800
      height: 300,
    },
    title: {
      text: "Insource vs Outsource Report",
      style: {
        fontSize: "16px",
        color: "#ffffff", // white
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#334155", // slate-700
      style: { color: "#ffffff" },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          color: "#ffffff", // white
          style: {
            textOutline: "none",
          },
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Source Type",
        colorByPoint: true,
        data: [
          { name: "Insource", y: 80, color: "#3b82f6" }, // blue-500
          { name: "Outsource", y: 20, color: "#ef4444" }, // red-500
        ],
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full max-w-sm mx-auto my-6 bg-slate-800 p-4 rounded-xl shadow-md">
      <HighchartsReact highcharts={Highcharts} options={insourceOutsourceOptions} />
    </div>
  );
};

export default InsourceOutsourceReport;
