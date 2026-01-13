// AdminRoutes.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import ViewRequest from "./ViewRequest";
import Customers from "./Customers";
import Notifications from "./Notifications";

export default function AdminRoutes() {
  return (
    <Routes>
      {/* ✅ when user opens /Admin -> redirect to /Admin/Dashboard */}
      <Route index element={<Navigate to="Dashboard" replace />} />

      {/* ✅ IMPORTANT: no leading slash here */}
      <Route path="Dashboard" element={<Dashboard />} />
      <Route path="ViewRequest" element={<ViewRequest />} />
      <Route path="Customers" element={<Customers />} />
      <Route path="Notifications" element={<Notifications />} />

      {/* optional fallback */}
      <Route path="*" element={<Navigate to="Dashboard" replace />} />
    </Routes>
  );
}
