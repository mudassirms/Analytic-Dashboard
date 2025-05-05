import { useNavigate } from 'react-router-dom';

const stats = [
  { label: 'Total Sites', value: 448, filter: 'total-sites', isPending: false },
  { label: 'On Air Sites', value: 448, filter: 'on-air-sites', isPending: false },
  { label: 'Pre DT Done', value: 379, filter: 'pre-dt-done', isPending: false },
  { label: 'Pre Report Submitted', value: 363, filter: 'pre-report-submitted', isPending: false },
  { label: 'Pending Pre SSV', value: 42, filter: 'pending-pre-ssv', isPending: true },
  { label: 'Post DT Done', value: 352, filter: 'post-dt-done', isPending: false },
  { label: 'Post Report Submitted', value: 330, filter: 'post-report-submitted', isPending: false },
  { label: 'Pending Post SSV', value: 70, filter: 'pending-post-ssv', isPending: true },
];

const StatCardsGrid = ({ currentFilters }) => {
  const navigate = useNavigate();

  const handleCardClick = (stat) => {
    navigate('/manager/region-details', {
      state: {
        filter: stat.filter,
        userFilters: currentFilters,
      },
    });
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 w-max px-2 py-4">
        {stats.map((stat) => {
          const bgColor = stat.isPending
            ? 'bg-red-600 hover:bg-red-500'
            : 'bg-slate-800 hover:bg-slate-700';

          return (
            <div
              key={stat.label}
              onClick={() => handleCardClick(stat)}
              className={`min-w-[100px] cursor-pointer ${bgColor} rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.015] transition-all duration-300`}
            >
              <div className="text-white font-semibold text-sm mb-2">{stat.label}</div>
              <div className="text-2xl font-bold text-center text-white">{stat.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatCardsGrid;
