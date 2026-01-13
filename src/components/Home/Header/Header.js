//login/logout 
// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { clearAuth, getUser } from "../../Auth/auth";

// const BRAND = "#51B56C";
// const BRAND_HOVER = "#46A560";

// const LogoMark = ({ className = "" }) => (
//   <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
//     <circle cx="18" cy="28" r="12" stroke={BRAND} strokeWidth="3" />
//     <circle cx="28" cy="20" r="4" fill={BRAND} opacity="0.9" />
//     <circle cx="10" cy="16" r="3" fill={BRAND} opacity="0.7" />
//     <circle cx="40" cy="14" r="2.5" fill={BRAND} opacity="0.6" />
//     <path d="M34 44c6.5 4.3 14.8 3.7 20.6-1.7" stroke={BRAND} strokeWidth="3" strokeLinecap="round" />
//     <path d="M48 24c5.5 2.2 9.5 7.6 9.5 13.9" stroke={BRAND} strokeWidth="3" strokeLinecap="round" />
//   </svg>
// );

// const MenuIcon = ({ open }) => (
//   <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
//     {open ? (
//       <path strokeWidth="2.2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
//     ) : (
//       <path strokeWidth="2.2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
//     )}
//   </svg>
// );

// export default function Header() {
//   const navigate = useNavigate();

//   const [open, setOpen] = useState(false);        // mobile drawer
//   const [user, setUser] = useState(getUser());    // ✅ logged in user
//   const [userMenu, setUserMenu] = useState(false); // desktop dropdown

//   const menuRef = useRef(null);

//   // ✅ user sync (login/logout after localStorage update)
//   useEffect(() => {
//     const sync = () => setUser(getUser());
//     window.addEventListener("auth:changed", sync);
//     window.addEventListener("storage", sync);
//     return () => {
//       window.removeEventListener("auth:changed", sync);
//       window.removeEventListener("storage", sync);
//     };
//   }, []);

//   // ESC close + prevent body scroll when menu open
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") {
//         setOpen(false);
//         setUserMenu(false);
//       }
//     };
//     window.addEventListener("keydown", onKey);

//     if (open) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "";

//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   // auto close on resize to desktop (xl)
//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 1280) setOpen(false); // xl
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // ✅ click outside close (desktop dropdown)
//   useEffect(() => {
//     const onDoc = (e) => {
//       if (!menuRef.current) return;
//       if (!menuRef.current.contains(e.target)) setUserMenu(false);
//     };
//     document.addEventListener("mousedown", onDoc);
//     return () => document.removeEventListener("mousedown", onDoc);
//   }, []);

//   const onLogout = () => {
//     clearAuth();
//     setUserMenu(false);
//     setOpen(false);
//     navigate("/Login");
//   };

//   const NavLinks = ({ mobile = false }) => (
//     <div className={mobile ? "flex flex-col gap-3" : "flex items-center gap-10"}>
//       <Link to="/" style={{ color: BRAND }} className="text-[18px] font-semibold" onClick={() => setOpen(false)}>
//         Home
//       </Link>

//       <Link to="/about" className="text-[18px] text-black/80 hover:text-black transition font-semibold" onClick={() => setOpen(false)}>
//         About Us
//       </Link>

//       <Link to="/services" className="text-[18px] text-black/80 hover:text-black transition font-semibold" onClick={() => setOpen(false)}>
//         Services
//       </Link>

//       <Link to="/prices" className="text-[18px] text-black/80 hover:text-black transition font-semibold" onClick={() => setOpen(false)}>
//         Prices
//       </Link>

//       <Link to="/contacts" className="text-[18px] text-black/80 hover:text-black transition font-semibold" onClick={() => setOpen(false)}>
//         Contact
//       </Link>
//     </div>
//   );

//   return (
//     <header className="w-full bg-white border-b border-black/10 relative z-50">
//       <div className="mx-auto w-full px-4 sm:px-6 xl:px-12 h-[74px] sm:h-[84px] flex items-center">
//         {/* Left: Logo */}
//         <Link to="/" className="flex items-center gap-2 select-none">
//           <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
//           <span className="leading-none font-semibold tracking-tight text-[30px] sm:text-[40px]">
//             <span style={{ color: BRAND }}>Pro</span>
//             <span className="text-black/90">Laundry</span>
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden xl:flex flex-1 items-center justify-center">
//           <NavLinks />
//         </nav>

//         {/* Right */}
//         <div className="ml-auto flex items-center gap-2">
//           {/* ✅ Desktop (xl+) */}
//           <div className="hidden xl:flex items-center">
//             {!user ? (
//               <Link
//                 to="/Login"
//                 className="inline-flex shrink-0 text-white font-semibold text-[18px] px-8 py-3 rounded-lg"
//                 style={{ backgroundColor: BRAND }}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
//               >
//                 Login / Signup
//               </Link>
//             ) : (
//               <div
//                 ref={menuRef}
//                 className="relative"
//                 onMouseEnter={() => setUserMenu(true)}
//                 onMouseLeave={() => setUserMenu(false)}
//               >
//                 {/* username pill */}
//                 <button
//                   type="button"
//                   onClick={() => setUserMenu((v) => !v)} // click toggle also
//                   className="inline-flex items-center gap-3 rounded-lg border border-black/10 px-4 py-2.5 hover:bg-black/5 transition"
//                 >
//                   <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EAF1EC] text-slate-700 font-bold">
//                     {(user?.name || user?.full_name || "U").slice(0, 1).toUpperCase()}
//                   </span>
//                   <span className="text-[16px] font-semibold text-slate-800 max-w-[170px] truncate">
//                     {user?.name || user?.full_name || "User"}
//                   </span>
//                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-600">
//                     <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
//                   </svg>
//                 </button>

//                 {/* dropdown */}
//                 {userMenu && (
//                   <div className="absolute right-0 mt-0 w-[190px] rounded-lg border border-black/10 bg-white shadow-xl overflow-hidden">
//                     <button
//                       className="w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:bg-black/5"
//                       onClick={() => {
//                         setUserMenu(false);
//                         navigate("/MyAccount");
//                       }}
//                     >
//                       My Account
//                     </button>
//                     <button
//                       className="w-full text-left px-4 py-3 text-[15px] text-red-600 hover:bg-red-50"
//                       onClick={onLogout}
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {/* Mobile Toggle */}
//           <button
//             type="button"
//             aria-label="Toggle menu"
//             aria-expanded={open}
//             onClick={() => setOpen((v) => !v)}
//             className="xl:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-black/10 hover:bg-black/5 transition"
//           >
//             <MenuIcon open={open} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile/Tablet Drawer */}
//       <div className={`xl:hidden fixed inset-0 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
//         <div
//           className={`absolute inset-0 bg-black/35 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
//           onClick={() => setOpen(false)}
//         />

//         <div
//           className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-xl border-l border-black/10 transition-transform duration-200 ${
//             open ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="h-[74px] sm:h-[84px] px-4 sm:px-6 flex items-center justify-between border-b border-black/10">
//             <div className="flex items-center gap-2">
//               <LogoMark className="h-9 w-9" />
//               <span className="font-semibold tracking-tight text-[26px]">
//                 <span style={{ color: BRAND }}>Pro</span>
//                 <span className="text-black/90">Laundry</span>
//               </span>
//             </div>

//             <button
//               type="button"
//               aria-label="Close menu"
//               onClick={() => setOpen(false)}
//               className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 hover:bg-black/5 transition"
//             >
//               <MenuIcon open />
//             </button>
//           </div>

//           <div className="p-5">
//             <NavLinks mobile />

//             {/* ✅ Mobile auth area */}
//             {!user ? (
//               <Link
//                 to="/Login"
//                 className="mt-6 inline-flex w-full justify-center text-white font-semibold text-[18px] py-3 px-8 rounded-lg"
//                 style={{ backgroundColor: BRAND }}
//                 onClick={() => setOpen(false)}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_HOVER)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
//               >
//                 Login / Signup
//               </Link>
//             ) : (
//               <div className="mt-6 rounded-lg border border-black/10 overflow-hidden">
//                 <div className="px-4 py-3 bg-[#F4F8F5]">
//                   <div className="text-[12px] text-slate-500">Logged in as</div>
//                   <div className="font-semibold text-slate-800">
//                     {user?.name || user?.full_name || "User"}
//                   </div>
//                 </div>

//                 <button
//                   className="w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:bg-black/5"
//                   onClick={() => {
//                     setOpen(false);
//                     navigate("/MyAccount");
//                   }}
//                 >
//                   My Account
//                 </button>

//                 <button className="w-full text-left px-4 py-3 text-[15px] text-red-600 hover:bg-red-50" onClick={onLogout}>
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


//scroll
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth, getUser } from "../../Auth/auth";

const BRAND = "#51B56C";
const BRAND_HOVER = "#46A560";

const LogoMark = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="18" cy="28" r="12" stroke={BRAND} strokeWidth="3" />
    <circle cx="28" cy="20" r="4" fill={BRAND} opacity="0.9" />
    <circle cx="10" cy="16" r="3" fill={BRAND} opacity="0.7" />
    <circle cx="40" cy="14" r="2.5" fill={BRAND} opacity="0.6" />
    <path d="M34 44c6.5 4.3 14.8 3.7 20.6-1.7" stroke={BRAND} strokeWidth="3" strokeLinecap="round" />
    <path d="M48 24c5.5 2.2 9.5 7.6 9.5 13.9" stroke={BRAND} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const MenuIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
    {open ? (
      <path strokeWidth="2.2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    ) : (
      <path strokeWidth="2.2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    )}
  </svg>
);


export default function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);        // mobile drawer
  const [user, setUser] = useState(getUser());    // ✅ logged in user
  const [userMenu, setUserMenu] = useState(false); // desktop dropdown

  const menuRef = useRef(null);

  const scrollToSection = (id) => {
  // home page-ல இருந்தா direct scroll
  const go = () => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // already home page?
  if (window.location.pathname === "/") {
    go();
  } else {
    // first go to home, then scroll
    navigate("/", { replace: false });
    setTimeout(go, 50); // short delay to allow DOM render
  }

  setOpen(false);
};

  // ✅ user sync (login/logout after localStorage update)
  useEffect(() => {
    const sync = () => setUser(getUser());
    window.addEventListener("auth:changed", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("auth:changed", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // ESC close + prevent body scroll when menu open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setUserMenu(false);
      }
    };
    window.addEventListener("keydown", onKey);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // auto close on resize to desktop (xl)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false); // xl
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ✅ click outside close (desktop dropdown)
  useEffect(() => {
    const onDoc = (e) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setUserMenu(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const onLogout = () => {
    clearAuth();
    setUserMenu(false);
    setOpen(false);
    navigate("/Login");
  };

 const NavLinks = ({ mobile = false }) => (
  <div className={mobile ? "flex flex-col gap-3" : "flex items-center gap-10"}>
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      style={{ color: BRAND }}
      className="text-[18px] font-semibold text-left"
    >
      Home
    </button>

    <button
      type="button"
      onClick={() => scrollToSection("about")}
      className="text-[18px] text-black/80 hover:text-black transition font-semibold text-left"
    >
      About Us
    </button>

    <button
      type="button"
      onClick={() => scrollToSection("services")}
      className="text-[18px] text-black/80 hover:text-black transition font-semibold text-left"
    >
      Services
    </button>

    <button
      type="button"
      onClick={() => scrollToSection("prices")}
      className="text-[18px] text-black/80 hover:text-black transition font-semibold text-left"
    >
      Prices
    </button>

    <button
      type="button"
      onClick={() => scrollToSection("contact")}
      className="text-[18px] text-black/80 hover:text-black transition font-semibold text-left"
    >
      Contact
    </button>
  </div>
);


  return (
    // <header className="w-full bg-white border-b border-black/10 relative z-50">
    <header className="fixed top-0 left-0 w-full bg-white border-b border-black/10 z-[9999]">
      <div className="mx-auto w-full px-4 sm:px-6 xl:px-12 h-[74px] sm:h-[84px] flex items-center">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 select-none">
          <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
          <span className="leading-none font-semibold tracking-tight text-[30px] sm:text-[40px]">
            <span style={{ color: BRAND }}>Pro</span>
            <span className="text-black/90">Laundry</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex flex-1 items-center justify-center">
          <NavLinks />
        </nav>

        {/* Right */}
        <div className="ml-auto flex items-center gap-2">
          {/* ✅ Desktop (xl+) */}
          <div className="hidden xl:flex items-center">
            {!user ? (
              <Link
                to="/Login"
                className="inline-flex shrink-0 text-white font-semibold text-[18px] px-8 py-3 rounded-lg"
                style={{ backgroundColor: BRAND }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
              >
                Login / Signup
              </Link>
            ) : (
              <div
                ref={menuRef}
                className="relative"
                onMouseEnter={() => setUserMenu(true)}
                onMouseLeave={() => setUserMenu(false)}
              >
                {/* username pill */}
                <button
                  type="button"
                  onClick={() => setUserMenu((v) => !v)} // click toggle also
                  className="inline-flex items-center gap-3 rounded-lg border border-black/10 px-4 py-2.5 hover:bg-black/5 transition"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#EAF1EC] text-slate-700 font-bold">
                    {(user?.name || user?.full_name || "U").slice(0, 1).toUpperCase()}
                  </span>
                  <span className="text-[16px] font-semibold text-slate-800 max-w-[170px] truncate">
                    {user?.name || user?.full_name || "User"}
                  </span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-600">
                    <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* dropdown */}
                {userMenu && (
                  <div className="absolute right-0 mt-0 w-[190px] rounded-lg border border-black/10 bg-white shadow-xl overflow-hidden">
                    <button
                      className="w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:bg-black/5"
                      onClick={() => {
                        setUserMenu(false);
                        navigate("/MyAccount");
                      }}
                    >
                      My Account
                    </button>
                    <button
                      className="w-full text-left px-4 py-3 text-[15px] text-red-600 hover:bg-red-50"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border border-black/10 hover:bg-black/5 transition"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Drawer */}
      <div className={`xl:hidden fixed inset-0 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <div
          className={`absolute inset-0 bg-black/35 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-[360px] bg-white shadow-xl border-l border-black/10 transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-[74px] sm:h-[84px] px-4 sm:px-6 flex items-center justify-between border-b border-black/10">
            <div className="flex items-center gap-2">
              <LogoMark className="h-9 w-9" />
              <span className="font-semibold tracking-tight text-[26px]">
                <span style={{ color: BRAND }}>Pro</span>
                <span className="text-black/90">Laundry</span>
              </span>
            </div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10 hover:bg-black/5 transition"
            >
              <MenuIcon open />
            </button>
          </div>

          <div className="p-5">
            <NavLinks mobile />

            {/* ✅ Mobile auth area */}
            {!user ? (
              <Link
                to="/Login"
                className="mt-6 inline-flex w-full justify-center text-white font-semibold text-[18px] py-3 px-8 rounded-lg"
                style={{ backgroundColor: BRAND }}
                onClick={() => setOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = BRAND_HOVER)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = BRAND)}
              >
                Login / Signup
              </Link>
            ) : (
              <div className="mt-6 rounded-lg border border-black/10 overflow-hidden">
                <div className="px-4 py-3 bg-[#F4F8F5]">
                  <div className="text-[12px] text-slate-500">Logged in as</div>
                  <div className="font-semibold text-slate-800">
                    {user?.name || user?.full_name || "User"}
                  </div>
                </div>

                <button
                  className="w-full text-left px-4 py-3 text-[15px] text-slate-700 hover:bg-black/5"
                  onClick={() => {
                    setOpen(false);
                    navigate("/MyAccount");
                  }}
                >
                  My Account
                </button>

                <button className="w-full text-left px-4 py-3 text-[15px] text-red-600 hover:bg-red-50" onClick={onLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}