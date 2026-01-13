
// import React, { useEffect, useRef, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const BRAND = "#51B56C";

// export default function ScheduleModel({
//   open,
//   onClose,
//   onSubmit,
//   defaultValues = {},
// }) {
//   const modalRef = useRef(null);
//   const pickupRef = useRef(null);
//   const deliveryRef = useRef(null);

//   const [form, setForm] = useState({
//     name: defaultValues.name || "",
//     email: defaultValues.email || "",
//     phone: defaultValues.phone || "",
//     address: defaultValues.address || "",
//     service: defaultValues.service || "",
//     pickupDate: defaultValues.pickupDate ? new Date(defaultValues.pickupDate) : null,
//     deliveryDate: defaultValues.deliveryDate ? new Date(defaultValues.deliveryDate) : null,
//     comment: defaultValues.comment || "",
//   });

//   useEffect(() => {
//     if (!open) return;

//     const onKey = (e) => {
//       if (e.key === "Escape") onClose?.();
//     };
//     window.addEventListener("keydown", onKey);

//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";

//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = prev;
//     };
//   }, [open, onClose]);

//   useEffect(() => {
//     if (!open) return;
//     setTimeout(() => {
//       modalRef.current?.querySelector("input")?.focus();
//     }, 0);
//   }, [open]);

//   if (!open) return null;

//   const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

//   const handleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) onClose?.();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit?.(form);
//   };

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-3 sm:px-6"
//       onMouseDown={handleBackdropClick}
//       aria-hidden="true"
//     >
//       {/* ✅ Smaller popup like screenshot */}
//       <div
//         ref={modalRef}
//         className="
//           relative bg-white
//           w-[min(90vw,600px)]
        
//           shadow-[0_26px_70px_rgba(0,0,0,0.25)]
//           border border-[#E8EEF4]
//         "
//         role="dialog"
//         aria-modal="true"
//         aria-label="Schedule a Pickup"
//       >
//         {/* close */}
//         <button
//           type="button"
//           onClick={onClose}
//           className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-slate-500 hover:bg-slate-100"
//           aria-label="Close"
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M6 6l12 12M18 6L6 18"
//               stroke="currentColor"
//               strokeWidth="2.4"
//               strokeLinecap="round"
//             />
//           </svg>
//         </button>

//         {/* ✅ less padding + compact typography */}
//         <div className="px-8 py-8 sm:px-10 sm:py-9">
//           <h2 className="text-[34px] sm:text-[40px] font-extrabold text-slate-900 tracking-tight">
//             Schedule a Pickup
//           </h2>

//           <form className="mt-6" onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <Input value={form.name} onChange={set("name")} placeholder="Your Name *" />

//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <Input
//                   value={form.email}
//                   onChange={set("email")}
//                   placeholder="Your e-mail address *"
//                 />
//                 <Input
//                   value={form.phone}
//                   onChange={set("phone")}
//                   placeholder="Your phone number"
//                 />
//               </div>

//               <Input
//                 value={form.address}
//                 onChange={set("address")}
//                 placeholder="Address *"
//               />

//               {/* service */}
//               <div className="relative">
//                 <select
//                   value={form.service}
//                   onChange={set("service")}
//                   className="h-[52px] w-full appearance-none rounded-[2px] border border-[#E2E8F0] bg-white px-5 text-[16px] text-slate-700 outline-none focus:border-[#CFE3D8]"
//                 >
//                   <option value="" disabled>
//                     Service
//                   </option>
//                   <option value="Laundry Service">Laundry Service</option>
//                   <option value="Dry Cleaning">Dry Cleaning</option>
//                   <option value="Ironing">Ironing</option>
//                   <option value="Curtains">Curtains</option>
//                   <option value="Blanket / Bedding">Blanket / Bedding</option>
//                 </select>

//                 <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
//                   <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M7 10l5 5 5-5"
//                       stroke={BRAND}
//                       strokeWidth="2.4"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//               </div>

//               {/* ✅ Date pickers */}
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <DateField
//                   placeholder="Pick-Up Date"
//                   value={form.pickupDate}
//                   minDate={new Date()}
//                   onChange={(d) => {
//                     setForm((p) => ({
//                       ...p,
//                       pickupDate: d,
//                       // pickup change pannina delivery old date wrong aagakoodathu
//                       deliveryDate:
//                         p.deliveryDate && d && p.deliveryDate < d ? null : p.deliveryDate,
//                     }));
//                   }}
//                   onIconClick={() => pickupRef.current?.setOpen(true)}
//                   datepickerRef={pickupRef}
//                 />
//                 <DateField
//                   placeholder="Delivery Date"
//                   value={form.deliveryDate}
//                   minDate={form.pickupDate || new Date()}
//                   onChange={(d) => setForm((p) => ({ ...p, deliveryDate: d }))}
//                   onIconClick={() => deliveryRef.current?.setOpen(true)}
//                   datepickerRef={deliveryRef}
//                 />
//               </div>

//               <textarea
//                 value={form.comment}
//                 onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
//                 placeholder="Your comment"
//                 className="min-h-[110px] w-full resize-none rounded-[2px] border border-[#E2E8F0] bg-white px-5 py-3 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
//               />
//             </div>

//             <button
//               type="submit"
//               className="mt-6 inline-flex h-[50px] items-center justify-center px-12 text-[16px] font-semibold text-white"
//               style={{ backgroundColor: BRAND }}
//             >
//               Order Now
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* ✅ react-datepicker clean UI */}
//       <style>{`
//         .react-datepicker {
//           border: 1px solid #E2E8F0 !important;
//           font-family: inherit !important;
//           box-shadow: 0 18px 50px rgba(0,0,0,0.12);
//         }
//         .react-datepicker__header {
//           background: #fff !important;
//           border-bottom: 1px solid #E2E8F0 !important;
//         }
//         .react-datepicker__day--selected,
//         .react-datepicker__day--keyboard-selected {
//           background: ${BRAND} !important;
//           color: #fff !important;
//         }
//         .react-datepicker__day:hover {
//           background: rgba(81,181,108,0.12) !important;
//         }
//       `}</style>
//     </div>
//   );
// }

// /* -------------------- Inputs -------------------- */
// function Input({ value, onChange, placeholder }) {
//   return (
//     <input
//       value={value}
//       onChange={onChange}
//       placeholder={placeholder}
//       className="h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
//     />
//   );
// }

// /* -------------------- Date Field (calendar icon click opens picker) -------------------- */
// function DateField({ placeholder, value, onChange, minDate, onIconClick, datepickerRef }) {
//   return (
//     <div className="relative">
//       <DatePicker
//         ref={datepickerRef}
//         selected={value}
//         onChange={onChange}
//         minDate={minDate}
//         placeholderText={placeholder}
//         dateFormat="dd/MM/yyyy"
//         className="h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 pr-14 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
//         popperPlacement="bottom-start"
//         popperClassName="z-[10000]"
//       />

//       <button
//         type="button"
//         onClick={onIconClick}
//         className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-md hover:bg-slate-50"
//         aria-label="Pick date"
//       >
//         <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//           <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke={BRAND} strokeWidth="2" />
//           <path d="M7 3.8V7M17 3.8V7" stroke={BRAND} strokeWidth="2" strokeLinecap="round" />
//           <path d="M3.5 9H20.5" stroke={BRAND} strokeWidth="2" strokeLinecap="round" />
//           <path
//             d="M8 13h3M8 16h3M13 13h3M13 16h3"
//             stroke={BRAND}
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

//api integration
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { API_BASE } from "../../../utils/apiBase";

const BRAND = "#51B56C";

export default function ScheduleModel({ open, onClose, defaultValues = {} }) {
  const modalRef = useRef(null);
  const pickupRef = useRef(null);
  const deliveryRef = useRef(null);

  const [form, setForm] = useState({
    name: defaultValues.name || "",
    email: defaultValues.email || "",
    phone: defaultValues.phone || "",
    address: defaultValues.address || "",
    service: defaultValues.service || "",
    pickupDate: defaultValues.pickupDate ? new Date(defaultValues.pickupDate) : null,
    deliveryDate: defaultValues.deliveryDate ? new Date(defaultValues.deliveryDate) : null,
    comment: defaultValues.comment || "",
  });

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null); // {type: "success"|"error", text: ""}

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    setMsg(null);
    setTimeout(() => {
      modalRef.current?.querySelector("input")?.focus();
    }, 0);
  }, [open]);

  if (!open) return null;

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  const toYMD = (d) => {
    if (!d) return "";
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim()) return "Email is required";
    if (!form.phone.trim()) return "Phone is required";
    if (!form.address.trim()) return "Address is required";
    if (!form.service.trim()) return "Service is required";
    if (!form.pickupDate) return "Pickup date is required";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg(null);

    const err = validate();
    if (err) {
      setMsg({ type: "error", text: err });
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      address: form.address.trim(),
      service: form.service.trim(),
      pickupDate: toYMD(form.pickupDate),
      deliveryDate: form.deliveryDate ? toYMD(form.deliveryDate) : "",
      comment: form.comment?.trim() || "",
    };

    try {
      setLoading(true);

      // ✅ token (optional)
      const token = localStorage.getItem("token");

      const response = await axios.post(`${API_BASE}/pickup_create.php`, payload, {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        timeout: 15000,
      });

      const data = response?.data;

      if (!data?.status) {
        setMsg({ type: "error", text: data?.message || "Failed to submit request" });
        return;
      }

      setMsg({
        type: "success",
        text: `Pickup request submitted! Request ID: ${data.requestId}`,
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        address: "",
        service: "",
        pickupDate: null,
        deliveryDate: null,
        comment: "",
      });

      setTimeout(() => onClose?.(), 1200);
    } catch (error) {
      // ✅ axios error message handle
      const serverMsg = error?.response?.data?.message;
      const fallback =
        error?.message === "Network Error"
          ? "Backend not reachable / CORS issue"
          : error?.message || "Network error";

      setMsg({
        type: "error",
        text: serverMsg || fallback,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-3 sm:px-6"
      onMouseDown={handleBackdropClick}
      aria-hidden="true"
    >
      <div
        ref={modalRef}
        className="
          relative bg-white
          w-[min(90vw,600px)]
          shadow-[0_26px_70px_rgba(0,0,0,0.25)]
          border border-[#E8EEF4]
        "
        role="dialog"
        aria-modal="true"
        aria-label="Schedule a Pickup"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center text-slate-500 hover:bg-slate-100"
          aria-label="Close"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="px-8 py-8 sm:px-10 sm:py-9">
          <h2 className="text-[34px] sm:text-[40px] font-extrabold text-slate-900 tracking-tight">
            Schedule a Pickup
          </h2>

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

          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input value={form.name} onChange={set("name")} placeholder="Your Name *" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input
                  value={form.email}
                  onChange={set("email")}
                  placeholder="Your e-mail address *"
                />
                <Input value={form.phone} onChange={set("phone")} placeholder="Your phone number" />
              </div>

              <Input value={form.address} onChange={set("address")} placeholder="Address *" />

              <div className="relative">
                <select
                  value={form.service}
                  onChange={set("service")}
                  className="h-[52px] w-full appearance-none rounded-[2px] border border-[#E2E8F0] bg-white px-5 text-[16px] text-slate-700 outline-none focus:border-[#CFE3D8]"
                >
                  <option value="" disabled>
                    Service
                  </option>
                  <option value="Dry wash and Iron">Dry wash and Iron</option>
                  <option value="Saree Polishing">Saree Polishing</option>
                  <option value="Stain Removal">Stain Removal</option>
                  <option value="Household Items">Household Items</option>
                  <option value="Hotel Services">Hotel Services</option>
                  <option value="Hospital Services">Hospital Services</option>
                </select>

                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 10l5 5 5-5"
                      stroke={BRAND}
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <DateField
                  placeholder="Pick-Up Date"
                  value={form.pickupDate}
                  minDate={new Date()}
                  onChange={(d) => {
                    setForm((p) => ({
                      ...p,
                      pickupDate: d,
                      deliveryDate: p.deliveryDate && d && p.deliveryDate < d ? null : p.deliveryDate,
                    }));
                  }}
                  onIconClick={() => pickupRef.current?.setOpen(true)}
                  datepickerRef={pickupRef}
                />
                <DateField
                  placeholder="Delivery Date"
                  value={form.deliveryDate}
                  minDate={form.pickupDate || new Date()}
                  onChange={(d) => setForm((p) => ({ ...p, deliveryDate: d }))}
                  onIconClick={() => deliveryRef.current?.setOpen(true)}
                  datepickerRef={deliveryRef}
                />
              </div>

              <textarea
                value={form.comment}
                onChange={(e) => setForm((p) => ({ ...p, comment: e.target.value }))}
                placeholder="Your comment"
                className="min-h-[110px] w-full resize-none rounded-[2px] border border-[#E2E8F0] bg-white px-5 py-3 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 inline-flex h-[50px] items-center justify-center px-12 text-[16px] font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: BRAND }}
            >
              {loading ? "Submitting..." : "Order Now"}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .react-datepicker {
          border: 1px solid #E2E8F0 !important;
          font-family: inherit !important;
          box-shadow: 0 18px 50px rgba(0,0,0,0.12);
        }
        .react-datepicker__header {
          background: #fff !important;
          border-bottom: 1px solid #E2E8F0 !important;
        }
        .react-datepicker__day--selected,
        .react-datepicker__day--keyboard-selected {
          background: ${BRAND} !important;
          color: #fff !important;
        }
        .react-datepicker__day:hover {
          background: rgba(81,181,108,0.12) !important;
        }
      `}</style>
    </div>
  );
}

function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
    />
  );
}

function DateField({ placeholder, value, onChange, minDate, onIconClick, datepickerRef }) {
  return (
    <div className="relative">
      <DatePicker
        ref={datepickerRef}
        selected={value}
        onChange={onChange}
        minDate={minDate}
        placeholderText={placeholder}
        dateFormat="dd/MM/yyyy"
        className="h-[52px] w-full rounded-[2px] border border-[#E2E8F0] bg-white px-5 pr-14 text-[16px] text-slate-700 outline-none placeholder:text-slate-400 focus:border-[#CFE3D8]"
        popperPlacement="bottom-start"
        popperClassName="z-[10000]"
      />

      <button
        type="button"
        onClick={onIconClick}
        className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-md hover:bg-slate-50"
        aria-label="Pick date"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="5.5" width="17" height="15" rx="2" stroke={BRAND} strokeWidth="2" />
          <path d="M7 3.8V7M17 3.8V7" stroke={BRAND} strokeWidth="2" strokeLinecap="round" />
          <path d="M3.5 9H20.5" stroke={BRAND} strokeWidth="2" strokeLinecap="round" />
          <path
            d="M8 13h3M8 16h3M13 13h3M13 16h3"
            stroke={BRAND}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
