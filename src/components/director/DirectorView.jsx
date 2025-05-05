import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StatCardsGrid from "./StatCardsGrid";
import FilterBar from "./FilterBar";
import BillingChart from "./Charts/BillingChart";
import ExpenseRequestChart from "./Charts/ExpenseRequestChart";
import BalanceCountryChart from "./Charts/BalanceCountryChart";
import BillingStatusAgeChart from "./Charts/BillingStatusAgeChart";
import EmployeeScorecardChart from "./Charts/EmployeeScorecardChart";
import RejectedSiteChart from "./Charts/RejectedSiteChart";
import EmployeeExpenseBreakdown from "./Charts/EmployeeExpenseBreakdown";
import PieExpenseContainer from "./Charts/PieExpenseContainer";
import InsourceOutsourceReport from "./Charts/InsourceOutsourceReport";
import POAgeDistribution from "./Charts/POAgeDistribution";
import POTrendChart from "./Charts/POTrendChart";
import { poTrendData } from "../../data/directorData";

import {
  poAgeDistribution,
  poAgeDistributionCustomer,
} from "../../data/directorData";
import POChart from "./Charts/TotalPOandAge";
import Heatmap from "./Charts/CountryCustomerheatmap";

const DirectorView = () => {
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    fromDate: "",
    toDate: "",
    country: "",
    customer: "",
    poType: "",
  });

  const [poAgeFilter, setPoAgeFilter] = useState("country");

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const handleNavigateToPOTable = () => {
    navigate("/po-table", { state: { userFilters: filters } });
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white mb-4">Director Dashboard</h1>

      {/* Filter Bar */}
      <FilterBar
        onFilterChange={handleFilterChange}
        showPOAgeFilter={false}
        filters={filters}
      />

      {/* Metric Cards */}
      <div className="p-6 space-y-6">
        <StatCardsGrid currentFilters={filters} />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <BillingChart />
        <BalanceCountryChart />
        <BillingStatusAgeChart />
        <RejectedSiteChart />
        <ExpenseRequestChart />
        <EmployeeExpenseBreakdown />
        <PieExpenseContainer />
        <InsourceOutsourceReport />
        <EmployeeScorecardChart score={89} />
        
        {/* PO Age Distribution Chart with Filter Inside the Chart */}
        <POAgeDistribution
          dataByCountry={poAgeDistribution}
          dataByCustomer={poAgeDistributionCustomer}
          filterType={poAgeFilter}
          setFilterType={setPoAgeFilter}  
        />
        <POChart/>
        <Heatmap/>
        <POTrendChart poTrendData={poTrendData} yearlyData={[]} />
      </div>

      {/* PO Table Navigation */}
      <button
        onClick={handleNavigateToPOTable}
        className="mt-4 bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-md"
      >
        View PO Table
      </button>
    </div>
  );
};

export default DirectorView;
