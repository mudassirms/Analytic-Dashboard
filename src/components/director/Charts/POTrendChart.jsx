import { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { poTrendData, yearlyData } from '../../../data/directorData';

const POTrendChart = () => {
  const [view, setView] = useState('monthly'); // fixed useState typo

  const selectedData = view === 'monthly' ? poTrendData : yearlyData;

  const options = {
    chart: {
      type: 'spline',
      backgroundColor: '#1e293b',
    },
    title: {
      text: 'POs Amount Submitted',
      style: {
        color: '#ffffff',
        fontSize: '18px',
      },
    },
    xAxis: {
      categories: selectedData.map(item => item.date),
      title: {
        text: view === 'monthly' ? 'Month' : 'Year',
        style: { color: '#ffffff' },
      },
      labels: {
        style: { color: '#ffffff' },
      },
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
        style: { color: '#ffffff' },
      },
      labels: {
        style: { color: '#ffffff' },
      },
    },
    series: [
      {
        name: 'PO Amount',
        data: selectedData.map(item => item.amount),
        color: {
          linearGradient: [0, 0, 300, 0],
          stops: [
            [0, '#0ea5e9'],
            [0.5, '#10b981'],
            [1, '#f97316'],
          ],
        },
        marker: {
          enabled: true,
          radius: 4,
        },
      },
    ],
    tooltip: {
      backgroundColor: '#334155',
      style: { color: '#ffffff' },
    },
    legend: {
      itemStyle: { color: '#ffffff' },
      itemHoverStyle: { color: '#ffff00' },
    },
    credits: { enabled: false },
  };

  return (
    <div className="p-4 bg-slate-800 rounded-md">
      <div className="text-center mb-4">
        <button
          onClick={() => setView('monthly')}
          style={{
            padding: '6px 12px',
            backgroundColor: view === 'monthly' ? '#2563eb' : '#475569',
            color: '#ffffff',
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
            backgroundColor: view === 'yearly' ? '#2563eb' : '#475569',
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          Yearly
        </button>
      </div>

      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default POTrendChart;
