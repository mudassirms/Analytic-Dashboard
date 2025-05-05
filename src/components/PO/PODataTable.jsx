

const PODataTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-slate-800 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-white">PO Data Table</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="py-2 px-4 text-left text-sm font-medium text-white">PO Number</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">Year</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">Month</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">PO Type</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">Invoice Submitted Date</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">Country</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">Customer</th>
            <th className="py-2 px-4 text-left text-sm font-medium text-white">PO Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((po, index) => (
            <tr key={index} className="border-b border-slate-700">
              <td className="py-2 px-4 text-sm text-white">{po.poNumber}</td>
              <td className="py-2 px-4 text-sm text-white">{po.year}</td>
              <td className="py-2 px-4 text-sm text-white">{po.month}</td>
              <td className="py-2 px-4 text-sm text-white">{po.poType}</td>
              <td className="py-2 px-4 text-sm text-white">{po.invoiceSubmittedDate}</td>
              <td className="py-2 px-4 text-sm text-white">{po.country}</td>
              <td className="py-2 px-4 text-sm text-white">{po.customer}</td>
              <td className="py-2 px-4 text-sm text-white">{po.poAge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PODataTable;
