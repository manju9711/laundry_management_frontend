import React from "react";
import AdminLayout from "./AdminLayout";

export default function Notifications() {
  const rows = [
    { id: 1, title: "New pickup request received", time: "2 mins ago" },
    { id: 2, title: "Pending orders count increased", time: "1 hour ago" },
  ];

  return (
    <AdminLayout>
      <h1 className="text-[44px] font-light text-slate-900">Notifications</h1>

      <div className="mt-6 space-y-4">
        {rows.map((n) => (
          <div key={n.id} className="rounded-md border border-slate-300 bg-white p-5">
            <div className="text-slate-900 font-semibold">{n.title}</div>
            <div className="text-slate-500 text-sm mt-1">{n.time}</div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}
