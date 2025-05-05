import { useState, useEffect } from "react";

const FilterBar = ({ onFilterChange, showPOAgeFilter = false, filters }) => {
  const [internalFilters, setInternalFilters] = useState(filters);

  useEffect(() => {
    setInternalFilters(filters);
  }, [filters]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...internalFilters, [name]: value };
    setInternalFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-slate-800 p-6 rounded-lg shadow-lg mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="flex flex-col">
          <label className="text-white mb-2">From Date</label>
          <input
            type="date"
            name="fromDate"
            value={internalFilters.fromDate}
            onChange={handleChange}
            className="p-3 rounded-md border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2">To Date</label>
          <input
            type="date"
            name="toDate"
            value={internalFilters.toDate}
            onChange={handleChange}
            className="p-3 rounded-md border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2">Country</label>
          <select
            name="country"
            value={internalFilters.country}
            onChange={handleChange}
            className="p-3 rounded-md border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Brazil">Brazil</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2">Customer</label>
          <select
            name="customer"
            value={internalFilters.customer}
            onChange={handleChange}
            className="p-3 rounded-md border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All</option>
            <option value="Ericsson"> Ericsson</option>
            <option value="Juniper Networks">Juniper Networks </option>
            <option value="Huawei">Huawei</option>
            <option value="NEC Corporation"> NEC Corporation</option>
            <option value="Cisco Systems">Cisco Systems</option>
            <option value="Arista">Arista</option>
            <option value="Alcatel-Lucent">Alcatel</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2">PO Type</label>
          <select
            name="poType"
            value={internalFilters.poType}
            onChange={handleChange}
            className="p-3 rounded-md border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option value="">All</option>
            <option value="Standard">Standard</option>
            <option value="Urgent">Urgent</option>
          </select>
        </div>

        {/* Conditional PO Age Filter */}
        {showPOAgeFilter && (
          <div className="flex flex-col">
            <label className="text-white mb-2">PO Age</label>
            <select
              name="poAge"
              value={internalFilters.poAge}
              onChange={handleChange}
              className="p-3 rounded-md border border-slate-600 bg-slate-900 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="">All</option>
              <option value="less-30">Less than 30 days</option>
              <option value="30-90">Between 30 to 90 days</option>
              <option value="greater-90">Greater than 90 days</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
