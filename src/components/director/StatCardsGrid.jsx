import { useNavigate } from 'react-router-dom';

const stats = [
  { label: 'Total # of POs', value: 250, filter: 'all', color: 'text-blue-400' },
  { label: 'Total PO Amount', value: '$35,60,80', filter: 'amount', color: 'text-green-400' },
  { label: 'Average Age of PO', value: 45, filter: 'average-age', color: 'text-yellow-300' },
  { label: '# of POs aged between 30 to 90 days', value: 363, filter: 'age-30-90', color: 'text-orange-400' },
  { label: '# of POs aged less than 30 days', value: 138, filter: 'age-less-30', color: 'text-teal-400' },
  { label: '# of POs aged > 90 days', value: 17, filter: 'age-over-90', color: 'text-red-400' },
];

const StatCardsGrid = ({ currentFilters }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          onClick={() =>
            navigate('/director/po-details', {
              state: {
                filter: stat.filter,
                userFilters: currentFilters, // Pass current filters
              },
            })
          }
          className="cursor-pointer bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.015] transition-all duration-300"
        >
          <div className="text-white font-semibold text-sl mb-2">{stat.label}</div>
          <div className={`text-3xl font-semibold ${stat.color}`}>{stat.value}</div>
        </div>
      ))}
    </div>
  );
};

export default StatCardsGrid;
