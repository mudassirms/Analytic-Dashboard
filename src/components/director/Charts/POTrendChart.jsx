import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const POTrendChart = ({ poTrendData, yearlyData }) => {
  const [view, setView] = useState('monthly'); 

  const selectedData = view === 'monthly' ? poTrendData : yearlyData;

  const options = {
    chart: {
      type: 'spline',
      backgroundColor: '#1f2937', // Dark background
    },
    title: {
      text: 'POs Monthly / Yearly Trend',
      style: {
        color: '#e5e7eb', 
        fontSize: '20px', 
      },
    },
    xAxis: {
      categories: selectedData.map(item => item.date),
      title: {
        text: view === 'monthly' ? 'Month' : 'Year',
        style: {
          color: '#e5e7eb', 
        },
      },
      labels: {
        style: {
          color: '#e5e7eb', 
        },
      },
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
        style: {
          color: '#e5e7eb',
        },
      },
      labels: {
        style: {
          color: '#e5e7eb', 
        },
      },
    },
    series: [
      {
        name: 'PO Amount',
        data: selectedData.map(item => item.amount),
        color: {
          linearGradient: [0, 0, 300, 0],
          stops: [
            [0, '#0ea5e9'], // Cyan-Blue
            [0.5, '#10b981'], // Green
            [1, '#f97316'], // Orange 
          ],
        },
        marker: {
          enabled: true,
          radius: 4,
        },
      },
    ],
    credits: { enabled: false },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', 
      style: {
        color: '#fff', 
      },
    },
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      {/* Button Container */}
      <div className="text-center mb-4">
        <button
          onClick={() => setView('monthly')}
          style={{
            padding: '6px 12px',
            backgroundColor: view === 'monthly' ? '#3b82f6' : '#e5e7eb',
            color: view === 'monthly' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '8px',
            fontSize: '14px',
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => setView('yearly')}
          style={{
            padding: '6px 12px',
            backgroundColor: view === 'yearly' ? '#3b82f6' : '#e5e7eb',
            color: view === 'yearly' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Yearly
        </button>
      </div>

      {/* Highcharts Component */}
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default POTrendChart;
