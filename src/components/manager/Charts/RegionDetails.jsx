
const regions = [
  {
    name: "GAR",
    note: "26 IBS Sites are also on Hold",
    data: {
      "Total Sites": 448,
      "On Air Sites": 448,
      "Pre DT Done": 379,
      "Pre Report Submitted": 363,
      "Pending Pre SSV": 42,
      "Post DT Done": 352,
      "Post Report Submitted": 330,
      "Pending Post SSV": 70,
    },
  },
  {
    name: "ASHANTI",
    note: "84 Sites two email Approvals done and system approvals pending",
    data: {
      "Total Sites": 329,
      "On Air Sites": 329,
      "Pre DT Done": 298,
      "Pre Report Submitted": 363,
      "Pending Pre SSV": 14,
      "Post DT Done": 346,
      "Post Report Submitted": 314,
      "Pending Post SSV": 88,
    },
  },
  {
    name: "SAVANA",
    note: "16 Sites Approvals and invoices done and the remaining 6 sites are waiting for MTN approvals",
    data: {
      "Total Sites": 560,
      "On Air Sites": 560,
      "Pre DT Done": 379,
      "Pre Report Submitted": 363,
      "Pending Pre SSV": 29,
      "Post DT Done": 456,
      "Post Report Submitted": 290,
      "Pending Post SSV": 54,
    },
  },
  {
    name: "CENTERAL",
    note: "84 Sites invoice done and 60 sites already submitted in the system final two approvals remaining",
    data: {
      "Total Sites": 355,
      "On Air Sites": 355,
      "Pre DT Done": 250,
      "Pre Report Submitted": 363,
      "Pending Pre SSV": 52,
      "Post DT Done": 247,
      "Post Report Submitted": 345,
      "Pending Post SSV": 85,
    },
  },
];

const colorMap = {
  "Total Sites": "bg-green-600",
  "On Air Sites": "bg-blue-600",
  "Pre DT Done": "bg-yellow-600 text-black",
  "Pre Report Submitted": "bg-gray-500",
  "Pending Pre SSV": "bg-blue-400 text-black",
  "Post DT Done": "bg-orange-600 text-black",
  "Post Report Submitted": "bg-lime-500 text-black",
  "Pending Post SSV": "bg-yellow-300 text-black",
};

const RegionDetail = () => {
  return (
    <div className="p-6 space-y-8 text-white bg-slate-800 min-h-screen rounded-xl">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 items-center border border-slate-600 rounded-xl p-4 bg-slate-700">
        <div>
          <label className="text-sm font-semibold">From Date</label>
          <input type="date" className="ml-2 bg-slate-800 text-white border border-slate-600 px-2 py-1 rounded" />
        </div>
        <div>
          <label className="text-sm font-semibold">To Date</label>
          <input type="date" className="ml-2 bg-slate-800 text-white border border-slate-600 px-2 py-1 rounded" />
        </div>
        <div>
          <label className="text-sm font-semibold">Region</label>
          <select className="ml-2 bg-slate-800 text-white border border-slate-600 px-2 py-1 rounded">
            <option value="ALL">ALL</option>
            {regions.map((r) => (
              <option key={r.name}>{r.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Region Blocks */}
      {regions.map((region) => (
        <div key={region.name} className="space-y-4 border-t border-slate-600 pt-4">
          <h2 className="font-bold text-xl text-white">
            {region.name}{" "}
            <span className="text-sm text-slate-400 italic">({region.note})</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Object.entries(region.data).map(([label, value]) => (
              <div
                key={label}
                className={`rounded-2xl shadow-md p-4 text-center font-semibold ${colorMap[label] || "bg-slate-700"}`}
              >
                <div className="text-xs uppercase tracking-wide">{label}</div>
                <div className="text-2xl font-bold mt-1">{value}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegionDetail;
