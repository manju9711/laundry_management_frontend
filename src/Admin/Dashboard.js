// import React from "react";
// import AdminLayout from "./AdminLayout";
// import PieChart from "./PieChart";

// export default function Dashboard() {
//   const cards = [
//     { title: "Total Orders", value: "10", bg: "bg-[#0d6efd]" },
//     { title: "Total Customers", value: "2", bg: "bg-[#198754]" },
//     { title: "Total Revenue", value: "₹136,800", bg: "bg-[#ffc107]", darkText: true },
//     { title: "Pending Orders", value: "7", bg: "bg-[#dc3545]" },
//   ];

//   const monthData = [
//     { label: "Dry Cleaning", value: 15 },
//     { label: "Ironing", value: 35 },
//     { label: "Wash & Fold", value: 40 },
//     { label: "Folding", value: 5 },
//     { label: "Stream Ironing", value: 3 },
//     { label: "Shoe Laundry", value: 2 },
//   ];

//   const yearData = [
//     { label: "Dry Cleaning", value: 14 },
//     { label: "Ironing", value: 32 },
//     { label: "Wash & Fold", value: 44 },
//     { label: "Folding", value: 6 },
//     { label: "Stream Ironing", value: 2 },
//     { label: "Shoe Laundry", value: 2 },
//   ];

//   return (
//     <AdminLayout>
//       <h1 className="text-[44px] font-light text-slate-900">Dashboard</h1>

//       {/* Cards */}
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
//         {cards.map((c) => (
//           <div
//             key={c.title}
//             className={`${c.bg} rounded-md p-6 text-white shadow-sm`}
//           >
//             <div className={`text-[22px] font-semibold ${c.darkText ? "text-slate-900" : ""}`}>
//               {c.title}
//             </div>
//             <div className={`mt-3 text-[22px] ${c.darkText ? "text-slate-900" : ""}`}>
//               {c.value}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Statistics */}
//       <h2 className="mt-10 text-[40px] font-light text-slate-900">Order Statistics</h2>

//       <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
//         {/* Month */}
//         <div className="rounded-md border border-slate-300 bg-white p-6">
//           <div className="text-center text-[24px] font-medium text-slate-900">
//             Orders This Month
//           </div>

//           <div className="mt-6 flex items-center justify-center gap-10">
//             <Legend data={monthData} />
//             <PieChart data={monthData} size={280} donut={false} />
//           </div>
//         </div>

//         {/* Year */}
//         <div className="rounded-md border border-slate-300 bg-white p-6">
//           <div className="text-center text-[24px] font-medium text-slate-900">
//             Orders This Year
//           </div>

//           <div className="mt-6 flex items-center justify-center gap-10">
//             <Legend data={yearData} />
//             <PieChart data={yearData} size={280} donut={true} />
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

// function Legend({ data }) {
//   const colors = ["#ff5f7a", "#2aa3ff", "#b05cff", "#ff9a3d", "#50c7c7", "#8d6bff"];
//   return (
//     <div className="space-y-3">
//       {data.map((d, i) => (
//         <div key={d.label} className="flex items-center gap-3 text-[15px] text-slate-600">
//           <span
//             className="h-3 w-6 rounded-sm"
//             style={{ backgroundColor: colors[i % colors.length] }}
//           />
//           <span>{d.label}</span>
//         </div>
//       ))}
//     </div>
//   );
// }


//api
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import PieChart from "./PieChart";
import { API_BASE } from "../utils/apiBase";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [stats, setStats] = useState({
    totalOrders: 0,
    totalCustomers: 0,
    totalRevenue: 0,
    pendingOrders: 0,
  });

  const [monthData, setMonthData] = useState([]);
  const [yearData, setYearData] = useState([]);

  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAll = async () => {
    try {
      setLoading(true);
      setErr("");

      const token = localStorage.getItem("token");
      const headers = { ...(token ? { Authorization: `Bearer ${token}` } : {}) };

      // ✅ 1) Stats
      const statsRes = await axios.get(`${API_BASE}/dashboard/dashboard_stats.php`, {
        headers,
        timeout: 15000,
      });

      if (!statsRes.data?.status) {
        throw new Error(statsRes.data?.message || "Failed to fetch dashboard stats");
      }

      // backend may return {stats:{...}} or direct keys
      const s = statsRes.data?.stats || statsRes.data;

      setStats({
        totalOrders: Number(s.totalOrders ?? s.total_orders ?? 0),
        totalCustomers: Number(s.totalCustomers ?? s.total_customers ?? 0),
        totalRevenue: Number(s.totalRevenue ?? s.total_revenue ?? 0),
        pendingOrders: Number(s.pendingOrders ?? s.pending_orders ?? 0),
      });

      // ✅ 2) Charts (month + year)
      const [mRes, yRes] = await Promise.all([
        axios.get(`${API_BASE}/dashboard/service_chart.php?period=month`, { headers, timeout: 15000 }),
        axios.get(`${API_BASE}/dashboard/service_chart.php?period=year`, { headers, timeout: 15000 }),
      ]);

      if (!mRes.data?.status) throw new Error(mRes.data?.message || "Failed to fetch month chart");
      if (!yRes.data?.status) throw new Error(yRes.data?.message || "Failed to fetch year chart");

      setMonthData(normalizeChart(mRes.data));
      setYearData(normalizeChart(yRes.data));
    } catch (e) {
      const serverMsg = e?.response?.data?.message;
      setErr(serverMsg || e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  const cards = useMemo(() => {
    const inr = (n) =>
      Number(n || 0).toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
      });

    return [
      { title: "Total Orders", value: String(stats.totalOrders || 0), bg: "bg-[#0d6efd]" },
      { title: "Total Customers", value: String(stats.totalCustomers || 0), bg: "bg-[#198754]" },
      { title: "Total Revenue", value: inr(stats.totalRevenue), bg: "bg-[#ffc107]", darkText: true },
      { title: "Pending Orders", value: String(stats.pendingOrders || 0), bg: "bg-[#dc3545]" },
    ];
  }, [stats]);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-[44px] font-light text-slate-900">Dashboard</h1>

        <button
          onClick={fetchAll}
          className="h-10 px-4 rounded-md border border-slate-200 bg-white text-[14px] font-semibold text-slate-700 hover:bg-slate-50"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {err && (
        <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
          {err}
        </div>
      )}

      {/* Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((c) => (
          <div key={c.title} className={`${c.bg} rounded-md p-6 text-white shadow-sm`}>
            <div className={`text-[22px] font-semibold ${c.darkText ? "text-slate-900" : ""}`}>
              {c.title}
            </div>
            <div className={`mt-3 text-[22px] ${c.darkText ? "text-slate-900" : ""}`}>
              {loading ? "..." : c.value}
            </div>
          </div>
        ))}
      </div>

      {/* Order Statistics */}
      <h2 className="mt-10 text-[40px] font-light text-slate-900">Order Statistics</h2>

      <div className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Month */}
        <div className="rounded-md border border-slate-300 bg-white p-6">
          <div className="text-center text-[24px] font-medium text-slate-900">
            Orders This Month
          </div>

          <div className="mt-6 flex items-center justify-center gap-10">
            <Legend data={monthData} />
            <PieChart data={monthData} size={280} donut={false} />
          </div>

          {!loading && monthData.length === 0 && (
            <div className="mt-4 text-center text-slate-500 text-[14px]">No data</div>
          )}
        </div>

        {/* Year */}
        <div className="rounded-md border border-slate-300 bg-white p-6">
          <div className="text-center text-[24px] font-medium text-slate-900">
            Orders This Year
          </div>

          <div className="mt-6 flex items-center justify-center gap-10">
            <Legend data={yearData} />
            <PieChart data={yearData} size={280} donut={true} />
          </div>

          {!loading && yearData.length === 0 && (
            <div className="mt-4 text-center text-slate-500 text-[14px]">No data</div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

/* ✅ Convert backend response -> [{label,value}] */
function normalizeChart(apiData) {
  const arr =
    apiData?.data ||
    apiData?.rows ||
    apiData?.chart ||
    apiData?.items ||
    [];

  // if backend returns: [{service:"Dry Cleaning", count:15}]
  return (arr || [])
    .map((x) => ({
      label: x.label || x.service || x.service_name || x.name || "Unknown",
      value: Number(x.value ?? x.count ?? x.total ?? 0),
    }))
    .filter((x) => x.value > 0);
}

function Legend({ data }) {
  const colors = ["#ff5f7a", "#2aa3ff", "#b05cff", "#ff9a3d", "#50c7c7", "#8d6bff"];
  return (
    <div className="space-y-3">
      {(data || []).map((d, i) => (
        <div key={`${d.label}-${i}`} className="flex items-center gap-3 text-[15px] text-slate-600">
          <span className="h-3 w-6 rounded-sm" style={{ backgroundColor: colors[i % colors.length] }} />
          <span className="min-w-[140px]">{d.label}</span>
          <span className="text-slate-500">({d.value})</span>
        </div>
      ))}
    </div>
  );
}
