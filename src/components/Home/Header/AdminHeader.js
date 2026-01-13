import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth, getUser } from "../../Auth/auth";

const BRAND = "#51B56C";

const LogoMark = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="18" cy="28" r="12" stroke={BRAND} strokeWidth="3" />
    <circle cx="28" cy="20" r="4" fill={BRAND} opacity="0.9" />
    <circle cx="10" cy="16" r="3" fill={BRAND} opacity="0.7" />
    <circle cx="40" cy="14" r="2.5" fill={BRAND} opacity="0.6" />
    <path
      d="M34 44c6.5 4.3 14.8 3.7 20.6-1.7"
      stroke={BRAND}
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M48 24c5.5 2.2 9.5 7.6 9.5 13.9"
      stroke={BRAND}
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default function AdminHeader() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState(getUser());   // ✅ admin user object
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ sync (login/logout after localStorage update)
  useEffect(() => {
    const sync = () => setAdmin(getUser());
    window.addEventListener("auth:changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("auth:changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // ✅ click outside close
  useEffect(() => {
    const onDoc = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // ✅ ESC close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onLogout = () => {
    clearAuth();
    setMenuOpen(false);
    navigate("/Login");
  };

  const adminName = admin?.name || admin?.full_name || "Admin";
  const adminInitial = adminName.slice(0, 1).toUpperCase();

  return (
    <header className="w-full bg-white border-b border-black/10 sticky top-0 z-50">
      <div className="mx-auto w-full px-4 sm:px-6 xl:px-12 h-[70px] flex items-center">
        {/* Left: Logo */}
        <Link to="/Admin" className="flex items-center gap-2 select-none">
          <LogoMark className="h-9 w-9" />
          <span className="leading-none font-semibold tracking-tight text-[28px]">
            <span style={{ color: BRAND }}>Pro</span>
            <span className="text-black/90">Laundry</span>
            <span className="ml-2 text-[14px] font-semibold text-slate-500">
              Admin
            </span>
          </span>
        </Link>

        {/* Right: Admin user dropdown */}
        <div className="ml-auto">
          {admin ? (
            <div
              ref={menuRef}
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="inline-flex items-center gap-3 rounded-lg border border-black/10 px-4 py-2.5 hover:bg-black/5 transition"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EAF1EC] text-slate-700 font-bold">
                  {adminInitial}
                </span>
                <span className="text-[15px] font-semibold text-slate-800 max-w-[170px] truncate">
                  {adminName}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-slate-600"
                >
                  <path
                    d="M7 10l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-0 w-[170px] rounded-lg border border-black/10 bg-white shadow-xl overflow-hidden">
                  <button
                    className="w-full text-left px-4 py-3 text-[15px] text-red-600 hover:bg-red-50"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // ✅ fallback (if someone opens admin page without login)
            <button
              onClick={() => navigate("/Login")}
              className="inline-flex items-center rounded-lg px-4 py-2 text-[15px] font-semibold text-white"
              style={{ backgroundColor: BRAND }}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
