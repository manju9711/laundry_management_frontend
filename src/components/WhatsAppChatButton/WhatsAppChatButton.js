import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../Auth/auth";

const BRAND = "#51B56C";

export default function WhatsAppChatButton() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const token = getToken();
  const user = getUser();

  // ✅ உங்கள் Admin WhatsApp number (country code + number, no +)
  const adminNumber = "919543487649"; 

  const displayName = useMemo(() => {
    if (!user) return "Guest";
    return user?.name || user?.full_name || user?.username || user?.email || "User";
  }, [user]);

  const handleClick = () => {
    // ✅ Login இல்லனா popup
    if (!token || !user) {
      setShowPopup(true);
      return;
    }

    // ✅ WhatsApp message
    const message =
      `Hi Admin, I am ${displayName}. ` +
      `I want to schedule laundry pickup / need support. ` +
      `Time: ${new Date().toLocaleString()}`;

    const whatsappURL = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  const handleLoginRedirect = () => {
    setShowPopup(false);
    navigate("/Login"); // ✅ உங்கள் route /Login தான்
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* ✅ Login popup */}
      {showPopup && (
        <div className="w-[320px] rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="px-5 py-4">
            <div className="text-[15px] font-semibold text-slate-900">
              Login required
            </div>
            <div className="mt-1 text-[14px] text-slate-600 leading-relaxed">
              Only logged in users can request pickup / chat with admin.
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={handleLoginRedirect}
                className="h-10 px-4 rounded-lg text-white text-[14px] font-semibold"
                style={{ backgroundColor: BRAND }}
              >
                Go to Login
              </button>

              <button
                onClick={() => setShowPopup(false)}
                className="h-10 px-4 rounded-lg border border-slate-200 text-[14px] font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ WhatsApp Floating Button */}
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110"
        title="Chat with Admin"
        aria-label="Chat with Admin"
      >
        <i className="fa fa-whatsapp" aria-hidden="true" style={{ fontSize: "30px" }} />
      </button>
    </div>
  );
}
