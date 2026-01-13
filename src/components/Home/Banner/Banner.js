

//login
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import image1 from "./images/home-slider1.jpg";
import image2 from "./images/home-slider2.jpg";
import ScheduleModel from "../ScheduleModel/ScheduleModel";

import { getUser } from "../../Auth/auth"; // ✅ adjust path if needed

const BRAND = "#51B56C";
const BLUE = "#23A6FF";

const ArrowBtn = ({ dir = "left", onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute top-1/2 -translate-y-1/2 z-20 h-12 w-12 md:h-14 md:w-14 bg-white/90 hover:bg-white border border-black/10 shadow-sm flex items-center justify-center transition"
    style={dir === "left" ? { left: "18px" } : { right: "18px" }}
    aria-label={dir === "left" ? "Previous slide" : "Next slide"}
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 md:h-6 md:w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  </button>
);

const Bullet = ({ icon, title, subtitle, color = "#FF4D6D" }) => (
  <div className="flex items-start gap-5">
    <div
      className="h-12 w-12 rounded-md flex items-center justify-center"
      style={{ backgroundColor: `${color}15` }}
    >
      <div style={{ color }}>{icon}</div>
    </div>
    <div>
      <div className="text-[16px] text-black/50 leading-tight">{subtitle}</div>
      <div className="text-[28px] md:text-[30px] font-semibold text-black/70 leading-tight">
        {title}
      </div>
    </div>
  </div>
);

export default function Banner() {
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [pause, setPause] = useState(false);
  const [open, setOpen] = useState(false);

  // ✅ toast message when user not logged in
  const [warn, setWarn] = useState("");

  const showWarn = (text) => {
    setWarn(text);
    // auto hide
    clearTimeout(window.__warnTimer);
    window.__warnTimer = setTimeout(() => setWarn(""), 3000);
  };

  // ✅ Only logged-in users can open pickup popup
  const onScheduleClick = () => {
    const u = getUser();
    if (!u) {
      showWarn("Only logged-in users can submit a request.");
      return;
    }
    setOpen(true);
  };

  const slides = useMemo(
    () => [
      {
        id: 1,
        image: image1,
        overlay: "left",
        content: (
          <div className="max-w-[560px]">
            <div className=" text-[26px] md:text-[30px] text-black/55">
              Want to get your
            </div>

            <h1 className="mt-2 text-[35px] sm:text-[44px] md:text-[54px] font-semibold leading-[1.05] text-black/70">
              Clothes Cleaned?{" "}
              <span style={{ color: BRAND }} className="font-semibold">
                Quickly
              </span>
            </h1>

            <div className="mt-6 text-[25px] sm:text-[28px] md:text-[30px] font-semibold text-black/65">
              Call us @{" "}
              <span style={{ color: BLUE }} className="font-semibold">
                +91 9054678965
              </span>
            </div>

            {/* ✅ login check here */}
            <button
              onClick={onScheduleClick}
              className="mt-8 inline-flex px-9 py-4 text-white text-xl font-bold"
              style={{ backgroundColor: BRAND }}
            >
              schedule a pickup
            </button>
          </div>
        ),
      },
      {
        id: 2,
        image: image2,
        overlay: "left",
        content: (
          <div className="max-w-[620px]">
            <div className="text-[22px] sm:text-[34px] md:text-[44px] text-black/55 font-light">
              The Best Cleaning Service
            </div>

            <div className="mt-2 text-[30px] sm:text-[44px] md:text-[54px] font-semibold leading-[1.1] text-black/70">
              with{" "}
              <span style={{ color: BLUE }} className="italic font-semibold">
                EcoDrive
              </span>
              <span className="align-super text-[18px] ml-1">™</span>
            </div>

            <div className="mt-10 space-y-8">
              <Bullet
                color="#FF4D6D"
                subtitle="Get clean your clothes with"
                title="Best Equipments"
                icon={
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                    <path d="M7 3h10v18H7V3Z" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M9 6h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                }
              />

              <Bullet
                color="#F5B400"
                subtitle="We use products which are"
                title="Eco Friendly"
                icon={
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                    <path
                      d="M20 4c-8 1-13 6-14 14 8-1 13-6 14-14Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 18c2-5 6-9 12-12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />

              <Bullet
                color="#23A6FF"
                subtitle="On-time Service with"
                title="Quick Delivery"
                icon={
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                    <path d="M6 20h12M8 17c2 1 6 1 8 0M8 12c0 3 8 3 8 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M8 5h8v7H8V5Z" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                }
              />
            </div>

            {/* ✅ optional: second slide also allow pickup */}
            <button
              onClick={onScheduleClick}
              className="mt-10 inline-flex px-9 py-4 text-white text-xl font-bold"
              style={{ backgroundColor: BRAND }}
            >
              schedule a pickup
            </button>
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    if (pause) return;
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [pause, slides.length]);

  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  const s = slides[active];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
    >
      {/* ✅ Not logged in toast */}
     {warn && (
  <div className="fixed top-[92px] right-4 z-[99999] w-[360px] max-w-[92vw] rounded-2xl border border-[#CFE3D8] bg-white px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
    <div className="flex items-start gap-3">
      {/* icon */}
      <div className="mt-0.5 grid h-10 w-10 place-items-center rounded-xl bg-[#EAF1EC] text-[#51B56C]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 9v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex-1">
        <div className="text-[14px] font-semibold text-slate-900">
          Login required
        </div>
        <div className="mt-1 text-[14px] leading-relaxed text-slate-600">
          {warn}
        </div>

        <div className="mt-3 flex gap-2">
          <button
            className="inline-flex h-9 items-center justify-center rounded-lg px-4 text-[13px] font-semibold text-white"
            style={{ backgroundColor: "#51B56C" }}
            onClick={() => navigate("/Login")}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#46A560")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#51B56C")}
          >
            Login
          </button>

          <button
            className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-200 px-4 text-[13px] font-semibold text-slate-700 hover:bg-slate-50"
            onClick={() => setWarn("")}
          >
            Close
          </button>
        </div>
      </div>

      {/* close icon */}
      <button
        type="button"
        className="ml-1 grid h-9 w-9 place-items-center rounded-lg text-slate-500 hover:bg-slate-50"
        onClick={() => setWarn("")}
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
    </div>
  </div>
)}


      <div className="relative w-full h-[520px] sm:h-[620px]">
        {/* Background image */}
        <img
          src={s.image}
          alt={`Slide ${active + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* overlay panel only text side */}
        <div className="absolute inset-0 pointer-events-none z-[5]">
          {s.overlay === "left" ? (
            <>
              <div className="absolute inset-y-0 left-0 w-full md:w-[55%] bg-[#F6F8FB]/30" />
              <div className="hidden md:block absolute inset-y-0" style={{ left: "55%", width: "160px" }} />
            </>
          ) : (
            <>
              <div className="absolute inset-y-0 right-0 w-full md:w-[55%] bg-[#F6F8FB]/95" />
              <div className="hidden md:block absolute inset-y-0" style={{ right: "55%", width: "160px" }} />
            </>
          )}
        </div>

        {/* Content */}
        <div className="absolute inset-0 z-[10]">
          <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-12">
            <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center">
              <div className={`${s.overlay === "left" ? "" : "md:col-start-2"}`}>
                {s.content}
              </div>
            </div>
          </div>
        </div>

        {/* arrows */}
        <ArrowBtn dir="left" onClick={prev} />
        <ArrowBtn dir="right" onClick={next} />

        {/* dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-3 rounded-full transition-all ${i === active ? "w-10" : "w-3"}`}
              style={{ backgroundColor: i === active ? "#111" : "rgba(0,0,0,0.25)" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ✅ pickup modal */}
      <ScheduleModel open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
