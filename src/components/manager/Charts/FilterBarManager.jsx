const FilterBarManager = ({ filters, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-slate-700 p-4 rounded-lg mb-6 flex flex-col sm:flex-row sm:items-end gap-4">
      {/* Region Filter */}
      <div className="flex flex-col text-white">
        <label htmlFor="region" className="mb-1 text-sm text-slate-300">Region</label>
        <select
          id="region"
          name="region"
          value={filters.region}
          onChange={handleChange}
          className="bg-slate-800 p-2 rounded-md text-white"
        >
          <option value="">All</option>
          <option value="North">North</option>
          <option value="South">South</option>
          <option value="East">East</option>
          <option value="West">West</option>
        </select>
      </div>

      {/* Site Filter */}
      <div className="flex flex-col text-white">
        <label htmlFor="site" className="mb-1 text-sm text-slate-300">Site</label>
        <select
          id="site"
          name="site"
          value={filters.site}
          onChange={handleChange}
          className="bg-slate-800 p-2 rounded-md text-white"
        >
          <option value="">All</option>
          <option value="Site A">Site A</option>
          <option value="Site B">Site B</option>
          <option value="Site C">Site C</option>
        </select>
      </div>

      {/* From Date */}
      <div className="flex flex-col text-white">
        <label htmlFor="fromDate" className="mb-1 text-sm text-slate-300">From Date</label>
        <input
          type="date"
          id="fromDate"
          name="fromDate"
          value={filters.fromDate}
          onChange={handleChange}
          className="bg-slate-800 p-2 rounded-md text-white"
        />
      </div>

      {/* To Date */}
      <div className="flex flex-col text-white">
        <label htmlFor="toDate" className="mb-1 text-sm text-slate-300">To Date</label>
        <input
          type="date"
          id="toDate"
          name="toDate"
          value={filters.toDate}
          onChange={handleChange}
          className="bg-slate-800 p-2 rounded-md text-white"
        />
      </div>
    </div>
  );
};

export default FilterBarManager;
