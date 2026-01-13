import React from "react";
import Sidebar from "./Sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="flex-1 min-h-screen p-8">{children}</div>
    </div>
  );
}
