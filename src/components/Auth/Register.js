// // src/pages/Auth/RegisterPage.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const BRAND = "#51B56C";

// export default function Register() {
//   const [showPass, setShowPass] = useState(false);
//   const [showPass2, setShowPass2] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//     agree: true,
//   });

//   const set = (k) => (e) => {
//     const v = k === "agree" ? e.target.checked : e.target.value;
//     setForm((p) => ({ ...p, [k]: v }));
//   };

//   return (
//     <div className="relative min-h-screen bg-[#F4F8F5] overflow-hidden">
//       {/* soft curves */}
//       <div className="pointer-events-none absolute -left-[420px] top-[140px] h-[900px] w-[900px] rounded-full bg-[#EAF1EC] opacity-70" />
//       <div className="pointer-events-none absolute -right-[360px] -top-[260px] h-[860px] w-[860px] rounded-full bg-[#EAF1EC] opacity-70" />
//       <div className="pointer-events-none absolute -right-[280px] bottom-[-360px] h-[820px] w-[820px] rounded-full bg-[#EAF1EC] opacity-55" />

//       <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           {/* LEFT INFO (desktop) */}
//           <div className="hidden lg:block">
//             <div
//               className="text-[16px] font-semibold tracking-[0.16em]"
//               style={{ color: BRAND }}
//             >
//               ProLaundry
//             </div>

//             <h1 className="mt-4 text-[56px] font-extrabold leading-[1.05] text-slate-900">
//               Create your
//               <br />
//               <span style={{ color: BRAND }}>Account</span>
//             </h1>

//             <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-slate-600">
//               Register to request laundry pickup & delivery. Manage your orders
//               easily and track progress anytime.
//             </p>

//             <div className="mt-8 flex items-center gap-6 text-slate-600">
//               <FeatureDot label="Fast Pickup Booking" />
//               <FeatureDot label="Doorstep Delivery" />
//               <FeatureDot label="Clean & Safe" />
//             </div>
//           </div>

//           {/* RIGHT CARD */}
//           <div className="mx-auto w-full max-w-[560px]">
//             <div className="bg-white border border-[#E8EEF4] shadow-[0_26px_70px_rgba(0,0,0,0.10)]">
//               <div className="px-8 sm:px-10 py-9 sm:py-10">
//                 <h2 className="text-[34px] sm:text-[40px] font-extrabold text-slate-900">
//                   Create Account
//                 </h2>
//                 <p className="mt-2 text-[16px] text-slate-500">
//                   Register to request laundry pickup & delivery.
//                 </p>

//                 {/* Form (UI only) */}
//                 <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
//                   <Field
//                     label="Full Name"
//                     placeholder="Your name"
//                     value={form.name}
//                     onChange={set("name")}
//                   />

//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <Field
//                       label="Email Address"
//                       placeholder="Your e-mail address"
//                       value={form.email}
//                       onChange={set("email")}
//                       type="email"
//                     />
//                     <Field
//                       label="Phone Number"
//                       placeholder="Your phone number"
//                       value={form.phone}
//                       onChange={set("phone")}
//                       type="tel"
//                     />
//                   </div>

//                   <PasswordField
//                     label="Password"
//                     placeholder="Create password"
//                     value={form.password}
//                     onChange={set("password")}
//                     show={showPass}
//                     onToggle={() => setShowPass((p) => !p)}
//                   />

//                   <PasswordField
//                     label="Confirm Password"
//                     placeholder="Confirm password"
//                     value={form.confirmPassword}
//                     onChange={set("confirmPassword")}
//                     show={showPass2}
//                     onToggle={() => setShowPass2((p) => !p)}
//                   />

//                   <label className="flex items-center gap-2 text-[14px] text-slate-600 select-none">
//                     <input
//                       type="checkbox"
//                       checked={form.agree}
//                       onChange={set("agree")}
//                       className="h-4 w-4"
//                     />
//                     I agree to the terms & privacy policy.
//                   </label>

//                   <button
//                     type="button"
//                     className="mt-2 w-full h-[50px] text-[16px] font-semibold text-white"
//                     style={{ backgroundColor: BRAND }}
//                   >
//                     Create Account
//                   </button>

//                   <div className="pt-5 text-center text-[15px] text-slate-600">
//                     Already have an account?{" "}
//                     <Link
//                       to="/login"
//                       className="font-semibold hover:underline"
//                       style={{ color: BRAND }}
//                     >
//                       Login
//                     </Link>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="mt-6 text-center text-[14px] text-slate-500 lg:hidden">
//               ProLaundry • Pickup & Delivery • Easy Tracking
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* UI pieces */
// function FeatureDot({ label }) {
//   return (
//     <div className="flex items-center gap-2">
//       <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
//       <span className="text-[15px]">{label}</span>
//     </div>
//   );
// }

// function Field({ label, value, onChange, placeholder, type = "text" }) {
//   return (
//     <div>
//       <div className="text-[14px] font-semibold text-slate-700">{label}</div>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="mt-2 h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
//       />
//     </div>
//   );
// }

// function PasswordField({ label, value, onChange, placeholder, show, onToggle }) {
//   return (
//     <div>
//       <div className="text-[14px] font-semibold text-slate-700">{label}</div>
//       <div className="relative mt-2">
//         <input
//           type={show ? "text" : "password"}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           className="h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 pr-12 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
//         />
//         <button
//           type="button"
//           onClick={onToggle}
//           className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-md hover:bg-slate-50"
//           aria-label="Toggle password"
//         >
//           {show ? (
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path
//                 d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"
//                 stroke="#64748B"
//                 strokeWidth="2"
//               />
//               <path
//                 d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
//                 stroke="#64748B"
//                 strokeWidth="2"
//               />
//             </svg>
//           ) : (
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
//               <path d="M3 12s3.5-7 9-7 9 7 9 7" stroke="#64748B" strokeWidth="2" />
//               <path
//                 d="M4 4l16 16"
//                 stroke="#64748B"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }


//api integration
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE } from "../../utils/apiBase"; 

const BRAND = "#51B56C";

export default function Register() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // {type, text}

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: true,
  });

  const set = (k) => (e) => {
    const v = k === "agree" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [k]: v }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.phone.trim()) return "Phone is required";
    if (!form.password) return "Password is required";
    if (form.password.length < 6) return "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) return "Passwords do not match";
    if (!form.agree) return "Please accept terms";
    return null;
  };

  const onRegister = async () => {
    const err = validate();
    if (err) {
      setMsg({ type: "error", text: err });
      return;
    }

    try {
      setLoading(true);
      setMsg(null);

      const payload = {
        fullName: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        password: form.password,
        confirmPassword: form.confirmPassword,
      };

      const res = await axios.post(`${API_BASE}/register.php`, payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 15000,
      });

      if (!res.data?.status) {
        setMsg({ type: "error", text: res.data?.message || "Registration failed" });
        return;
      }

      setMsg({ type: "success", text: "Registration successful. Please login." });

      setTimeout(() => navigate("/login"), 800);
    } catch (e) {
      setMsg({
        type: "error",
        text: e?.response?.data?.message || e?.message || "Network error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4F8F5] overflow-hidden pt-[84px]">
      {/* soft curves */}
      <div className="pointer-events-none absolute -left-[420px] top-[140px] h-[900px] w-[900px] rounded-full bg-[#EAF1EC] opacity-70" />
      <div className="pointer-events-none absolute -right-[360px] -top-[260px] h-[860px] w-[860px] rounded-full bg-[#EAF1EC] opacity-70" />
      <div className="pointer-events-none absolute -right-[280px] bottom-[-360px] h-[820px] w-[820px] rounded-full bg-[#EAF1EC] opacity-55" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT INFO */}
          <div className="hidden lg:block">
            <div className="text-[16px] font-semibold tracking-[0.16em]" style={{ color: BRAND }}>
              ProLaundry
            </div>

            <h1 className="mt-4 text-[56px] font-extrabold leading-[1.05] text-slate-900">
              Create your
              <br />
              <span style={{ color: BRAND }}>Account</span>
            </h1>

            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.9] text-slate-600">
              Register to request laundry pickup & delivery. Manage your orders easily and track
              progress anytime.
            </p>

            <div className="mt-8 flex items-center gap-6 text-slate-600">
              <FeatureDot label="Fast Pickup Booking" />
              <FeatureDot label="Doorstep Delivery" />
              <FeatureDot label="Clean & Safe" />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="mx-auto w-full max-w-[560px]">
            <div className="bg-white border border-[#E8EEF4] shadow-[0_26px_70px_rgba(0,0,0,0.10)]">
              <div className="px-8 sm:px-10 py-9 sm:py-10">
                <h2 className="text-[34px] sm:text-[40px] font-extrabold text-slate-900">
                  Create Account
                </h2>
                <p className="mt-2 text-[16px] text-slate-500">
                  Register to request laundry pickup & delivery.
                </p>

                {msg && (
                  <div
                    className={`mt-4 rounded-md border px-4 py-3 text-[14px] ${
                      msg.type === "success"
                        ? "border-green-200 bg-green-50 text-green-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}

                <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <Field
                    label="Full Name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set("name")}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Email Address"
                      placeholder="Your e-mail address"
                      value={form.email}
                      onChange={set("email")}
                      type="email"
                    />
                    <Field
                      label="Phone Number"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={set("phone")}
                      type="tel"
                    />
                  </div>

                  <PasswordField
                    label="Password"
                    placeholder="Create password"
                    value={form.password}
                    onChange={set("password")}
                    show={showPass}
                    onToggle={() => setShowPass((p) => !p)}
                  />

                  <PasswordField
                    label="Confirm Password"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={set("confirmPassword")}
                    show={showPass2}
                    onToggle={() => setShowPass2((p) => !p)}
                  />

                  <label className="flex items-center gap-2 text-[14px] text-slate-600 select-none">
                    <input
                      type="checkbox"
                      checked={form.agree}
                      onChange={set("agree")}
                      className="h-4 w-4"
                    />
                    I agree to the terms & privacy policy.
                  </label>

                  <button
                    type="button"
                    onClick={onRegister}
                    disabled={loading}
                    className="mt-2 w-full h-[50px] text-[16px] font-semibold text-white disabled:opacity-60"
                    style={{ backgroundColor: BRAND }}
                  >
                    {loading ? "Creating..." : "Create Account"}
                  </button>

                  <div className="pt-5 text-center text-[15px] text-slate-600">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold hover:underline" style={{ color: BRAND }}>
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-6 text-center text-[14px] text-slate-500 lg:hidden">
              ProLaundry • Pickup & Delivery • Easy Tracking
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* UI pieces */
function FeatureDot({ label }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
      <span className="text-[15px]">{label}</span>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div>
      <div className="text-[14px] font-semibold text-slate-700">{label}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-2 h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
      />
    </div>
  );
}

function PasswordField({ label, value, onChange, placeholder, show, onToggle }) {
  return (
    <div>
      <div className="text-[14px] font-semibold text-slate-700">{label}</div>
      <div className="relative mt-2">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 pr-12 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
        />
        <button
          type="button"
          onClick={onToggle}
          className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-md hover:bg-slate-50"
          aria-label="Toggle password"
        >
          {show ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z"
                stroke="#64748B"
                strokeWidth="2"
              />
              <path
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                stroke="#64748B"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 12s3.5-7 9-7 9 7 9 7" stroke="#64748B" strokeWidth="2" />
              <path d="M4 4l16 16" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
