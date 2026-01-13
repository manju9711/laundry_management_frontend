import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE } from "../../utils/apiBase";

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

const stageIndex = (k) => STAGES.findIndex((s) => s.key === (k || ""));

export default function MyAccount() {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [rows, setRows] = useState([]);

  const [activeId, setActiveId] = useState(null);
  const [timeline, setTimeline] = useState([]);
  const [timelineLoading, setTimelineLoading] = useState(false);

  const authHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  const fetchMy = async () => {
    try {
      setLoading(true);
      setErr("");
      const res = await axios.get(`${API_BASE}/my_requests.php`, {
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

  const fetchTimeline = async (requestId) => {
    try {
      setTimelineLoading(true);
      const res = await axios.get(`${API_BASE}/request_timeline.php?requestId=${requestId}`, {
        headers: authHeaders(),
        timeout: 15000,
      });
      if (!res.data?.status) throw new Error(res.data?.message || "Failed timeline");
      setTimeline(res.data.rows || []);
    } catch (e) {
      setErr(e?.response?.data?.message || e?.message || "Timeline error");
    } finally {
      setTimelineLoading(false);
    }
  };

  useEffect(() => {
    fetchMy();
  }, []);

  const openTracking = (id) => {
    setActiveId(id);
    fetchTimeline(id);
  };

  return (
    <div className="min-h-screen bg-white pt-[84px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[14px] font-semibold tracking-[0.12em]" style={{ color: BRAND }}>
              MY ACCOUNT
            </div>
            <h1 className="mt-2 text-[44px] font-light text-slate-900">My Orders</h1>
          </div>

          <button
            onClick={fetchMy}
            className="h-10 px-4 rounded-md border border-slate-200 bg-white text-[14px] font-semibold text-slate-700 hover:bg-slate-50"
            disabled={loading}
          >
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        {err && (
          <div className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800">
            {err}
          </div>
        )}

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="rounded-md border border-slate-200 bg-white p-6">
            <div className="text-[18px] font-semibold text-slate-900">Your Requests</div>

            <div className="mt-4 space-y-3">
              {!loading && rows.length === 0 && <div className="text-slate-500">No requests yet.</div>}

              {rows.map((r) => {
                const s = String(r.status || "pending").toLowerCase();
                const badge =
                  s === "accepted"
                    ? "bg-green-100 text-green-800"
                    : s === "rejected"
                    ? "bg-red-100 text-red-800"
                    : "bg-yellow-100 text-yellow-800";

                return (
                  <button
                    key={r.id}
                    onClick={() => openTracking(r.id)}
                    className={`w-full text-left rounded-md border border-slate-200 p-4 hover:bg-slate-50 transition ${
                      activeId === r.id ? "ring-2 ring-[rgba(81,181,108,0.35)]" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="font-semibold text-slate-900">#{r.id} • {r.service}</div>
                      <span className={`rounded-md px-3 py-1 text-[13px] ${badge}`}>
                        {r.status || "pending"}
                      </span>
                    </div>

                    <div className="mt-2 text-[14px] text-slate-600">
                      Pickup: {r.pickup_date} • Delivery: {r.delivery_date}
                    </div>

                    <div className="mt-2 text-[13px] text-slate-500">
                      Stage: <span className="font-medium text-slate-700">{r.process_stage || "-"}</span>
                      {r.process_note ? <span> • {r.process_note}</span> : null}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-md border border-slate-200 bg-white p-6">
            <div className="text-[18px] font-semibold text-slate-900">Tracking</div>

            {!activeId ? (
              <div className="mt-4 text-slate-500">Select a request to see tracking.</div>
            ) : (
              <>
                <div className="mt-4">
                  <ProgressBar stageKey={rows.find((x) => x.id === activeId)?.process_stage} />
                </div>

                <div className="mt-6">
                  <div className="text-[14px] font-semibold text-slate-900">Timeline</div>

                  {timelineLoading ? (
                    <div className="mt-3 text-slate-500">Loading timeline...</div>
                  ) : timeline.length === 0 ? (
                    <div className="mt-3 text-slate-500">No timeline yet.</div>
                  ) : (
                    <div className="mt-3 space-y-3">
                      {timeline.map((t, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="mt-1 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: BRAND }} />
                          <div className="flex-1">
                            <div className="text-[14px] font-semibold text-slate-800">
                              {t.process_stage || t.status}
                            </div>
                            {t.note ? <div className="text-[13px] text-slate-600">{t.note}</div> : null}
                            <div className="text-[12px] text-slate-400">{t.changed_at}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ stageKey }) {
  const idx = stageIndex(stageKey);
  const active = idx < 0 ? 0 : idx;

  return (
    <div>
      <div className="text-[14px] font-semibold text-slate-800">Process</div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {STAGES.map((s, i) => {
          const done = i <= active;
          return (
            <div key={s.key} className="flex items-center gap-2">
              <div
                className={`h-9 px-3 rounded-full border text-[13px] font-semibold ${
                  done ? "text-white border-transparent" : "text-slate-600 border-slate-200"
                }`}
                style={done ? { backgroundColor: BRAND } : {}}
              >
                {s.label}
              </div>
              {i !== STAGES.length - 1 && (
                <div className={`h-[2px] w-8 ${i < active ? "bg-[#51B56C]" : "bg-slate-200"}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
