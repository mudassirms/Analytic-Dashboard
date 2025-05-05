
import PODataTable from "../PO/PODataTable"; // Import the PODataTable component

const TotalPOPage = () => {
  const poData = [
    {
      poNumber: "PO1234",
      year: "2025",
      month: "May",
      poType: "Standard",
      invoiceSubmittedDate: "2025-05-01",
      country: "USA",
      customer: "Customer A",
      poAge: "30 days",
    },
    {
      poNumber: "PO1235",
      year: "2025",
      month: "April",
      poType: "Urgent",
      invoiceSubmittedDate: "2025-04-25",
      country: "Canada",
      customer: "Customer B",
      poAge: "35 days",
    },
    {
      poNumber: "PO1236",
      year: "2025",
      month: "March",
      poType: "Standard",
      invoiceSubmittedDate: "2025-03-15",
      country: "Germany",
      customer: "Customer C",
      poAge: "45 days",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-700 to-cyan-600 text-white">
      <div className="text-center py-6">
        <h1 className="text-3xl font-semibold">Total PO Metrics</h1>
      </div>

      {/* PO Data Table */}
      <PODataTable data={poData} />
    </div>
  );
};

export default TotalPOPage;
