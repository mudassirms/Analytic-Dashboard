import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import FilterBar from "./FilterBar";

const PODetailTable = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const userFilters = useMemo(() => location.state?.userFilters || {}, [location.state?.userFilters]);
  const filterFromCard = location.state?.filter || "all";

  const [filters, setFilters] = useState({
    fromDate: userFilters.fromDate || "",
    toDate: userFilters.toDate || "",
    country: userFilters.country || "",
    customer: userFilters.customer || "",
    poType: userFilters.poType || "",
    poAge: "",
  });

  const poData = [
    {
      poNumber: "PO-1001",
      year: 2024,
      month: "October",
      poType: "Urgent",
      invoiceDate: "2024-10-05",
      country: "China",
      customer: "Cisco Systems",
      poAge: 91,
    },
    {
      poNumber: "PO-1002",
      year: 2023,
      month: "May",
      poType: "Urgent",
      invoiceDate: "2023-05-19",
      country: "Canada",
      customer: "Huawei",
      poAge: 22,
    },
    // Add more mock data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const getFilteredData = () => {
    let data = [...poData];

    if (filterFromCard === "age-30-90") data = data.filter(po => po.poAge >= 30 && po.poAge <= 90);
    if (filterFromCard === "age-less-30") data = data.filter(po => po.poAge < 30);
    if (filterFromCard === "age-over-90") data = data.filter(po => po.poAge > 90);

    if (filters.country) data = data.filter(po => po.country === filters.country);
    if (filters.customer) data = data.filter(po => po.customer === filters.customer);
    if (filters.poType) data = data.filter(po => po.poType === filters.poType);

    if (filters.poAge === "less-30") data = data.filter(po => po.poAge < 30);
    if (filters.poAge === "30-90") data = data.filter(po => po.poAge >= 30 && po.poAge <= 90);
    if (filters.poAge === "greater-90") data = data.filter(po => po.poAge > 90);

    return data;
  };

  const filteredData = getFilteredData();
  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const currentData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleBackClick = () => navigate(-1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  useEffect(() => {
    setFilters(prev => ({ ...prev, poAge: userFilters.poAge || prev.poAge }));
  }, [userFilters]);

  return (
    <div className="p-6 bg-slate-800 rounded-xl text-white">
      <button
        onClick={handleBackClick}
        className="text-slate-300 bg-slate-700 hover:bg-slate-600 p-2 rounded-md mb-4"
      >
        &larr; Back
      </button>

      <FilterBar onFilterChange={handleFilterChange} showPOAgeFilter={true} filters={filters} />

      <h2 className="text-xl font-semibold mb-4">PO Details Table ({filterFromCard})</h2>

      {filteredData.length === 0 ? (
        <div className="text-center text-slate-300 py-10">No matching PO records found.</div>
      ) : (
        <>
          <div className="overflow-auto rounded-lg border border-slate-700">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-700 text-slate-300">
                <tr>
                  <th className="px-4 py-2">PO Number</th>
                  <th>Year</th>
                  <th>Month</th>
                  <th>PO Type</th>
                  <th>Invoice Date</th>
                  <th>Country</th>
                  <th>Customer</th>
                  <th>PO Age</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((po, index) => (
                  <tr key={index} className="border-t border-slate-700 hover:bg-slate-600">
                    <td className="px-4 py-2">{po.poNumber}</td>
                    <td>{po.year}</td>
                    <td>{po.month}</td>
                    <td>{po.poType}</td>
                    <td>{po.invoiceDate}</td>
                    <td>{po.country}</td>
                    <td>{po.customer}</td>
                    <td>{po.poAge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => goToPage(currentPage - 1)}
              className="text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md"
              disabled={currentPage === 1}
            >
              &lt;&lt; Prev
            </button>

            <span className="mx-4 text-slate-300">
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={() => goToPage(currentPage + 1)}
              className="text-slate-300 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-md"
              disabled={currentPage === totalPages}
            >
              Next &gt;&gt;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PODetailTable;
