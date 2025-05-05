
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
    "Total Sites": "bg-green-700",
    "On Air Sites": "bg-blue-600",
    "Pre DT Done": "bg-yellow-600",
    "Pre Report Submitted": "bg-gray-500",
    "Pending Pre SSV": "bg-blue-400",
    "Post DT Done": "bg-orange-700",
    "Post Report Submitted": "bg-lime-500",
    "Pending Post SSV": "bg-yellow-400",
  };
  
  const RegionDetail = () => {
    return (
      <div className="p-6 space-y-8 text-slate-800 bg-white">
        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 items-center border border-slate-500 rounded-xl p-4">
          <div>
            <label className="text-sm font-semibold">From Date</label>
            <input type="date" className="border px-2 py-1 rounded ml-2" />
          </div>
          <div>
            <label className="text-sm font-semibold">To Date</label>
            <input type="date" className="border px-2 py-1 rounded ml-2" />
          </div>
          <div>
            <label className="text-sm font-semibold">Region</label>
            <select className="border px-2 py-1 rounded ml-2">
              <option value="ALL">ALL</option>
              {regions.map((r) => (
                <option key={r.name}>{r.name}</option>
              ))}
            </select>
          </div>
        </div>
  
        {/* Region Blocks */}
        {regions.map((region) => (
          <div key={region.name} className="space-y-2 border-t pt-4">
            <h2 className="font-bold text-xl">
              {region.name}{" "}
              <span className="text-sm text-slate-600 italic">({region.note})</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {Object.entries(region.data).map(([label, value]) => (
                <div
                  key={label}
                  className={`text-white px-4 py-2 rounded shadow-md text-center ${colorMap[label] || "bg-slate-600"}`}
                >
                  <div className="text-sm font-semibold">{label}</div>
                  <div className="text-lg font-bold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RegionDetail;
  