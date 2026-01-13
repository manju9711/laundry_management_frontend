// Sidebar.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    [
      "block rounded-md px-4 py-3 text-[16px] transition",
      isActive
        ? "bg-white/10 text-white font-semibold"
        : "text-white/70 hover:bg-white/10 hover:text-white",
    ].join(" ");

  return (
    <aside className="w-[280px] min-h-screen bg-[#3a424a] text-white">
      <div className="px-6 py-6 text-[40px] font-light">Menu</div>

      <nav className="px-4 space-y-2">
        {/* ✅ full paths */}
        <NavLink to="/Admin/Dashboard" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/Admin/ViewRequest" className={linkClass}>
          View Requests
        </NavLink>

        <NavLink to="/Admin/Customers" className={linkClass}>
          Customers
        </NavLink>

        <NavLink to="/Admin/Notifications" className={linkClass}>
          Notifications
        </NavLink>

        <button
          onClick={() => {
            alert("Logged out (static)");
            navigate("/");
          }}
          className="w-full text-left rounded-md px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white transition"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}
