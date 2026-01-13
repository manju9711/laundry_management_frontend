// import React from "react";
// import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
// import Main from "./components/Main/Main";
// import Header from "./components/Home/Header/Header";
// import { Footer } from "./components/Home/Footer/Footer";
// import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
// import AdminRoutes from "./Admin/AdminRoutes";
// import MyAccount from "./components/MyAccount/MyAccount";


// function App() {
//   return (
//     <BrowserRouter>
//     <Header/>
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/MyAccount" element={<MyAccount />} />
//         <Route path="/Admin/*" element={<AdminRoutes />} />
       
       


//       </Routes>
//       <Footer/>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from "react";
import {
  BrowserRouter,Routes,Route,Navigate,useLocation} from "react-router-dom";

import Main from "./components/Main/Main";
import Header from "./components/Home/Header/Header";
import AdminHeader from "./components/Home/Header/AdminHeader";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import MyAccount from "./components/MyAccount/MyAccount";
import AdminRoutes from "./Admin/AdminRoutes";

import { getToken, getUser} from './components/Auth/auth'
import { Footer } from "./components/Home/Footer/Footer";
import WhatsAppChatButton from "./components/WhatsAppChatButton/WhatsAppChatButton";


// ✅ Admin guard
function AdminProtected({ children }) {
  const token = getToken();
  const user = getUser();
  const role = user?.role || localStorage.getItem("role"); // whichever you store

  if (!token) return <Navigate to="/Login" replace />;
  if (role !== "admin") return <Navigate to="/" replace />;

  return children;
}

function AppShell() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/Admin");

  return (
    <>
      {/* ✅ Header switch */}
      {isAdminRoute ? <AdminHeader /> : <Header />}
     
      <Routes>
        {/* Public */}
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/MyAccount" element={<MyAccount />} />

        {/* ✅ Admin only */}
        <Route
          path="/Admin/*"
          element={
            <AdminProtected>
              <AdminRoutes />
            </AdminProtected>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
  <Footer/>
  <WhatsAppChatButton/>
      {/* ✅ Footer admin page-ல வேண்டாம்னா hide */}
      {/* {!isAdminRoute && <Footer />} */}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

