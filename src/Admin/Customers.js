// import React from "react";
// import AdminLayout from "./AdminLayout";

// export default function Customers() {
//   const rows = [
//     { id: 1, name: "Pradeep P", email: "pradeep@test.com", phone: "9876543210" },
//     { id: 2, name: "Manju", email: "pcs313@gmail.com", phone: "8796546789" },
//   ];

//   return (
//     <AdminLayout>
//       <h1 className="text-[44px] font-light text-slate-900">Customers</h1>

//       <div className="mt-6 rounded-md border border-slate-300 bg-white p-6">
//         <div className="overflow-auto">
//           <table className="min-w-[900px] w-full text-left">
//             <thead>
//               <tr className="border-b border-slate-200 text-slate-600">
//                 <th className="py-3">ID</th>
//                 <th className="py-3">Name</th>
//                 <th className="py-3">Email</th>
//                 <th className="py-3">Phone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((r) => (
//                 <tr key={r.id} className="border-b border-slate-100 text-slate-800">
//                   <td className="py-3">{r.id}</td>
//                   <td className="py-3">{r.name}</td>
//                   <td className="py-3">{r.email}</td>
//                   <td className="py-3">{r.phone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";
import { API_BASE } from "../utils/apiBase";

export default function Customers() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [search, setSearch] = useState("");
  const [page] = useState(1);
  const [limit] = useState(50);

  const authHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      setErr("");

      const qs = new URLSearchParams({
        page: String(page),
        limit: String(limit),
        ...(search.trim() ? { search: search.trim() } : {}),
      }).toString();

      const res = await axios.get(`${API_BASE}/dashboard/customers_list.php?${qs}`, {
        headers: authHeaders(),
        timeout: 15000,
      });

      if (!res.data?.status) throw new Error(res.data?.message || "Failed");
      setRows(res.data.rows || []);
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminLayout>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[44px] font-light text-slate-900">Customers</h1>
          <div className="text-slate-500 text-[14px]">List of customer master data</div>
        </div>

        <button
          onClick={fetchCustomers}
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

      <div className="mt-6 rounded-md border border-slate-300 bg-white p-6">
        {/* Search */}
        <div className="flex items-center gap-3">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name / email / phone..."
            className="h-10 w-full max-w-[360px] rounded-md border border-slate-200 px-3 text-[14px]"
          />
          <button
            onClick={fetchCustomers}
            className="h-10 px-4 rounded-md bg-slate-900 text-white text-[14px] font-semibold hover:bg-slate-800"
            disabled={loading}
          >
            Search
          </button>
        </div>

        <div className="mt-5 overflow-auto">
          <table className="min-w-[900px] w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-slate-600">
                <th className="py-3">ID</th>
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Phone</th>
                <th className="py-3">User ID</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-6 text-slate-500">
                    Loading...
                  </td>
                </tr>
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-slate-500">
                    No customers found
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.customer_id} className="border-b border-slate-100 text-slate-800">
                    <td className="py-3">{r.customer_id}</td>
                    <td className="py-3 font-semibold">{r.name}</td>
                    <td className="py-3">{r.email || "-"}</td>
                    <td className="py-3">{r.phone || "-"}</td>
                    <td className="py-3">{r.user_id ?? "-"}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
}

