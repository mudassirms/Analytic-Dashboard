import { useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const combinedData = {
  country: {
    categories: ["Ghana", "Tanzania", "South Africa"],
    series: [
      { name: "90+", data: [150, 100, 80], color: "#ef4444" },
      { name: "60-90", data: [120, 100, 70], color: "#facc15" },
      { name: "30-60", data: [100, 120, 60], color: "#4ade80" },
      { name: "0-30", data: [180, 160, 90], color: "#3b82f6" },
    ],
  },
  customer: {
    categories: ["Huawei", "ZTE", "Ericsson"],
    series: [
      { name: "90+", data: [180, 120, 60], color: "#ef4444" },
      { name: "60-90", data: [130, 100, 50], color: "#facc15" },
      { name: "30-60", data: [110, 90, 40], color: "#4ade80" },
      { name: "0-30", data: [160, 130, 70], color: "#3b82f6" },
    ],
  },
};

const POChart = () => {
  const [selectedView, setSelectedView] = useState("country");

  const options = {
    chart: {
      type: "bar",
      height: 400,
      backgroundColor: "#1e293b",
    },
    title: {
      text: `POs by ${selectedView === "country" ? "Country" : "Customer"}`,
      style: { color: "#fff", fontSize: "16px" },
    },
    xAxis: {
      categories: combinedData[selectedView].categories,
      title: { text: null },
      labels: { style: { color: "#cbd5e1" } },
      lineColor: "#334155",
      tickColor: "#334155",
    },
    yAxis: {
      min: 0,
      title: {
        text: "Total POs",
        align: "high",
        style: { color: "#cbd5e1" },
      },
      labels: { style: { color: "#cbd5e1" } },
      gridLineColor: "#334155",
    },
    legend: {
      reversed: true,
      itemStyle: { color: "#f1f5f9" },
    },
    plotOptions: {
      series: { stacking: "normal" },
    },
    series: combinedData[selectedView].series,
    credits: { enabled: false },
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl shadow-md">
      <div className="flex justify-end mb-3">
        <select
          onChange={(e) => setSelectedView(e.target.value)}
          value={selectedView}
          className="p-2 bg-slate-700 text-white text-sm rounded border border-slate-600"
        >
          <option value="country">By Country</option>
          <option value="customer">By Customer</option>
        </select>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default POChart;
