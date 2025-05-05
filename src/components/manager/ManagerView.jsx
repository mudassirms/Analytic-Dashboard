import { useState } from "react";
import StatCardsGrid from "./Charts/StatCardsGrid"; 
const ManagerView = () => {
  const [filters] = useState({
    region: "",
    site: "",
    fromDate: "",
    toDate: "",
  });

  return (
    <div className="space-y-8">
      {/* Title of the Manager Dashboard */}
      <h1 className="text-3xl font-bold text-white mb-6">Manager Dashboard</h1>

      {/* StatCards Section */}
      <div className="p-6 space-y-6">
        <StatCardsGrid currentFilters={filters} />
      </div>

      
    </div>
  );
};

export default ManagerView;
