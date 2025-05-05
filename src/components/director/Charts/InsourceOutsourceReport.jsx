import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const InsourceOutsourceReport = () => {
  const insourceOutsourceOptions = {
    chart: {
      type: "pie",
      backgroundColor: "#1e293b", 
      height: "300px",
    },
    title: {
      text: "Insource vs Outsource Report",
      style: {
        fontSize: "16px",
        color: "#ffffff", 
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#334155", 
      style: { color: "#ffffff" }, 
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          color: "#ffffff",
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
          { name: "Insource", y: 80, color: "#3b82f6" },
          { name: "Outsource", y: 20, color: "#ef4444" },
        ],
      },
    ],
    credits: { enabled: false },
  };

  return (
    <div className="w-full max-w-sm mx-auto my-6">
      <HighchartsReact highcharts={Highcharts} options={insourceOutsourceOptions} />
    </div>
  );
};

export default InsourceOutsourceReport;
