//api integration
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import AdminLayout from "./AdminLayout";
// import { API_BASE } from "../utils/apiBase";

// export default function ViewRequest() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [err, setErr] = useState("");

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       setLoading(true);
//       setErr("");

//       const token = localStorage.getItem("token"); // optional
//       // const res = await axios.get(`${API_BASE}/pickup_list.php?page=1&limit=100`, {
//        const res = await axios.get(`${API_BASE}/pickup_list.php?orderBy=id&orderDir=ASC`, {
//         headers: {
//           ...(token ? { Authorization: `Bearer ${token}` } : {}),
//         },
//         timeout: 15000,
//       });

//       if (!res.data?.status) {
//         setErr(res.data?.message || "Failed to fetch");
//         return;
//       }

//       setRows(res.data.rows || []);
//     } catch (e) {
//       const serverMsg = e?.response?.data?.message;
//       setErr(serverMsg || e?.message || "Network error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1 className="text-[44px] font-light text-slate-900">View Requests</h1>

//       {err && (
//         <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
//           {err}
//         </div>
//       )}

//       <div className="mt-6 rounded-md border border-slate-300 bg-white p-6">
//         {loading ? (
//           <div className="text-slate-600">Loading...</div>
//         ) : (
//           <div className="overflow-auto">
//             <table className="min-w-[900px] w-full text-left">
//               <thead>
//                 <tr className="border-b border-slate-200 text-slate-600">
//                   <th className="py-3">ID</th>
//                   <th className="py-3">Customer</th>
//                   <th className="py-3">Service</th>
//                   <th className="py-3">Pickup Date</th>
//                   <th className="py-3">Delivery Date</th>
//                   <th className="py-3">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {rows.length === 0 ? (
//                   <tr>
//                     <td className="py-6 text-slate-500" colSpan={5}>
//                       No requests found
//                     </td>
//                   </tr>
//                 ) : (
//                   rows.map((r) => (
//                     <tr key={r.id} className="border-b border-slate-100 text-slate-800">
//                       <td className="py-3">{r.id}</td>
//                       <td className="py-3">{r.customer_name}</td>
//                       <td className="py-3">{r.service}</td>
//                       <td className="py-3">{r.pickup_date}</td>
//                       <td className="py-3">{r.delivery_date}</td>
//                       <td className="py-3">
//                         <span className="rounded-md bg-yellow-100 px-3 py-1 text-yellow-800">
//                           {r.status || "Pending"}
//                         </span>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// }

//accept/reject
import React, { useEffect, useMemo, useState } from "react";
import AdminLayout from "./AdminLayout";
import axios from "axios";
import { API_BASE } from "../utils/apiBase";

const BRAND = "#51B56C";

const STAGES = [
  { key: "received", label: "Received" },
  { key: "picked_up", label: "Picked Up" },
  { key: "sorting", label: "Sorting" },
  { key: "washing", label: "Washing" },
  { key: "drying", label: "Drying" },
  { key: "ironing", label: "Ironing" },
  { key: "folding", label: "Folding" },
  { key: "qc", label: "QC" },
  { key: "out_for_delivery", label: "Out for delivery" },
  { key: "delivered", label: "Delivered" },
];

export default function ViewRequest() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const authHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchRequests = async () => {
    try {
      setLoading(true);
      setErr("");
      const res = await axios.get(`${API_BASE}/pickup_list.php?orderBy=id&orderDir=ASC`, {
        headers: authHeaders(),
        timeout: 15000,
      });
      if (!res.data?.status) throw new Error(res.data?.message || "Failed to fetch");
      setRows(res.data.rows || []);
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const decision = async (requestId, decisionValue) => {
    try {
      setErr("");
      await axios.post(
        `${API_BASE}/dashboard/request_decision.php`,
        { requestId, decision: decisionValue }, // accept | reject
        { headers: { ...authHeaders(), "Content-Type": "application/json" }, timeout: 15000 }
      );
      await fetchRequests();
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Update failed");
    }
  };

  const updateStage = async (requestId, stage, note = "") => {
    try {
      setErr("");
      await axios.post(
        `${API_BASE}/dashboard/update_stage.php`,
        { requestId, stage, note },
        { headers: { ...authHeaders(), "Content-Type": "application/json" }, timeout: 15000 }
      );
      await fetchRequests();
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Stage update failed");
    }
  };

  const statusBadge = (status) => {
    const s = String(status || "pending").toLowerCase();
    if (s === "accepted") return "bg-green-100 text-green-800";
    if (s === "rejected") return "bg-red-100 text-red-800";
    return "bg-yellow-100 text-yellow-800";
  };

  const canStageUpdate = (r) => String(r.status || "").toLowerCase() === "accepted";

  const stageOptions = useMemo(() => STAGES, []);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between">
        <h1 className="text-[44px] font-light text-slate-900">View Requests</h1>

        <button
          onClick={fetchRequests}
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
        {loading ? (
          <div className="text-slate-600">Loading...</div>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-[1100px] w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600">
                  <th className="py-3">ID</th>
                  <th className="py-3">Customer</th>
                  <th className="py-3">Service</th>
                  <th className="py-3">Pickup</th>
                  <th className="py-3">Delivery</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Stage</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {rows.length === 0 ? (
                  <tr>
                    <td className="py-6 text-slate-500" colSpan={8}>
                      No requests found
                    </td>
                  </tr>
                ) : (
                  rows.map((r) => (
                    <tr key={r.id} className="border-b border-slate-100 text-slate-800">
                      <td className="py-3">{r.id}</td>
                      <td className="py-3">{r.customer_name}</td>
                      <td className="py-3">{r.service}</td>
                      <td className="py-3">{r.pickup_date}</td>
                      <td className="py-3">{r.delivery_date}</td>

                      <td className="py-3">
                        <span className={`rounded-md px-3 py-1 ${statusBadge(r.status)}`}>
                          {r.status || "pending"}
                        </span>
                      </td>

                      <td className="py-3">
                        <select
                          className="h-10 rounded-md border border-slate-200 px-3 text-[14px] disabled:bg-slate-50"
                          value={r.process_stage || ""}
                          disabled={!canStageUpdate(r)}
                          onChange={(e) =>
                            updateStage(r.id, e.target.value, `Stage updated to ${e.target.value}`)
                          }
                        >
                          <option value="" disabled>
                            Select stage
                          </option>
                          {stageOptions.map((s) => (
                            <option key={s.key} value={s.key}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decision(r.id, "accept")}
                            disabled={String(r.status || "").toLowerCase() === "accepted"}
                            className="h-10 px-4 rounded-md text-white font-semibold text-[14px] disabled:opacity-50"
                            style={{ backgroundColor: BRAND }}
                          >
                            Accept
                          </button>

                          <button
                            onClick={() => decision(r.id, "reject")}
                            disabled={String(r.status || "").toLowerCase() === "rejected"}
                            className="h-10 px-4 rounded-md bg-red-600 text-white font-semibold text-[14px] disabled:opacity-50"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}


