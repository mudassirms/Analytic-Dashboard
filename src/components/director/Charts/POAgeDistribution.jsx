import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { poAgeDistribution, poAgeDistributionCustomer } from "../../../data/directorData"; 
const POAgeDistribution = ({ filterType, setFilterType }) => {
  const [data, setData] = useState([]);

  // Define custom colors 
  const countryColors = [
    "#1f77b4", // USA color
    "#ff7f0e", // India color
    "#2ca02c", // Germany color
  ];

  useEffect(() => {
    if (filterType === "country") {
      setData(poAgeDistribution); // country data
    } else {
      setData(poAgeDistributionCustomer); // customer data
    }
  }, [filterType]);

  const options = {
    chart: {
      type: "column",
      backgroundColor: "#1e293b",
    },
    title: {
      text: "",
      style: {
        color: "#ffffff",
        fontSize: "16px",
      },
    },
    xAxis: {
      categories: data[0]?.data.map((d) => d.name), 
      title: { text: "Age Bucket" },
      labels: { style: { color: "#ffffff" } },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Count",
        style: { color: "#ffffff" },
      },
      labels: { style: { color: "#ffffff" } },
    },
    tooltip: {
      pointFormat: "Count: <b>{point.y}</b>",
      backgroundColor: "#334155",
      style: { color: "#ffffff" },
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: "#ffffff", 
      },
      itemHoverStyle: {
        color: "#ffff00",
       },
      symbolStyle: {
        borderColor: "#ffffff", 
      },
    },
    plotOptions: {
      column: {
        stacking: "normal", 
        borderRadius: 5,
      },
    },
    series: data.map((entry, index) => ({
      name: entry.country || entry.customer,
      data: entry.data.map((d) => d.value), 
      color: countryColors[index % countryColors.length], 
    })),
    credits: { enabled: false },
  };

  return (
    <div className="bg-slate-800 p-4 rounded-md">
      {/* Filter Dropdown Inside Chart */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">PO Age Distribution</h2>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="bg-slate-700 text-white p-2 rounded-md border border-slate-600"
        >
          <option value="country">By Country</option>
          <option value="customer">By Customer</option>
        </select>
      </div>

      {/* Highcharts */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default POAgeDistribution;
