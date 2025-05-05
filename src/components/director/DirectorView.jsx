import { useState } from "react";

import StatCardsGrid from "./StatCardsGrid";
import BillingChart from "./Charts/BillingChart";
import ExpenseRequestChart from "./Charts/ExpenseRequestChart";
import BalanceCountryChart from "./Charts/BalanceCountryChart";
import BillingStatusAgeChart from "./Charts/BillingStatusAgeChart";
import EmployeeScorecardChart from "./Charts/EmployeeScorecardChart";
import RejectedSiteChart from "./Charts/RejectedSiteChart";
import EmployeeExpenseBreakdown from "./Charts/EmployeeExpenseBreakdown";
import InsourceOutsourceReport from "./Charts/InsourceOutsourceReport";
import POAgeDistribution from "./Charts/POAgeDistribution";
import POTrendChart from "./Charts/POTrendChart";
import POChart from "./Charts/TotalPOandAge";
import Heatmap from "./Charts/CountryCustomerheatmap";
import PieExpenseBreakdown from "./Charts/PieExpenseBreakdown";
import PODetailTable from "./PODetailTable"; 

import {
  poAgeDistribution,
  poAgeDistributionCustomer,
  poTrendData,
} from "../../data/directorData";

const DirectorView = () => {
  const [filters] = useState({
    fromDate: "",
    toDate: "",
    country: "",
    customer: "",
    poType: "",
  });

  const [poAgeFilter, setPoAgeFilter] = useState("country");
  const [showPOTable, setShowPOTable] = useState(false); // 👈 Toggle for PO table

  const handleViewTable = () => {
    setShowPOTable(true);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white mb-6">Director Dashboard</h1>

      {!showPOTable ? (
        <>
          <div className="p-6 space-y-6">
            <StatCardsGrid currentFilters={filters} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <BillingChart />
            <BalanceCountryChart />
            <BillingStatusAgeChart />
            <RejectedSiteChart />
            <ExpenseRequestChart />
            <InsourceOutsourceReport />
            <EmployeeScorecardChart score={89} />

            <PieExpenseBreakdown />
            <EmployeeExpenseBreakdown />

            <POAgeDistribution
              dataByCountry={poAgeDistribution}
              dataByCustomer={poAgeDistributionCustomer}
              filterType={poAgeFilter}
              setFilterType={setPoAgeFilter}
            />
            <POChart />
            <Heatmap />
            <POTrendChart poTrendData={poTrendData} yearlyData={[]} />
          </div>

          <div className="mt-8 text-left">
            <button
              onClick={handleViewTable}
              className="mt-4 bg-slate-700 hover:bg-slate-600 text-white p-4 rounded-md w-full sm:w-auto"
            >
              View PO Data
            </button>
          </div>
        </>
      ) : (
         <div className="mt-10">
    <PODetailTable filters={filters} onBack={() => setShowPOTable(false)} />
  </div>
      )}
    </div>
  );
};

export default DirectorView;
