import React from "react";
import aboutImg from "./images/img1.jpg"; // ✅ change this to your exact image path

export default function About() {
  // const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* ✅ Background shapes (light green / light gray like screenshot) */}
      <div className="pointer-events-none absolute inset-0">
        {/* top-left soft diagonal */}
        <div className="absolute -top-40 -left-56 h-[520px] w-[520px] rotate-[22deg] bg-emerald-50/70" />
        {/* bottom-right soft diagonal */}
        <div className="absolute -bottom-48 -right-56 h-[520px] w-[520px] rotate-[22deg] bg-slate-50" />
        {/* big soft arc behind center */}
        <div className="absolute left-[22%] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-emerald-50/40" />
      </div>

      {/* ✅ Left floating small button (pencil style like screenshot) */}
     

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ✅ LEFT: Image card */}
          <div className="relative">
            <div className="relative bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.10)]">
              <img
                src={aboutImg}
                alt="About Laundry"
                className="h-[360px] w-full object-cover sm:h-[420px]"
                draggable={false}
              />
            </div>

            {/* ✅ Dotted curve arrow (like screenshot) */}
            <div className="pointer-events-none absolute right-[-70px] top-[70px] hidden lg:block">
              <svg width="170" height="120" viewBox="0 0 170 120" fill="none">
                <path
                  d="M10 90 C 60 25, 115 25, 160 60"
                  stroke="#D1D5DB"
                  strokeWidth="3"
                  strokeDasharray="2 8"
                  strokeLinecap="round"
                />
                <path
                  d="M154 55 L160 60 L152 63"
                  stroke="#D1D5DB"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* ✅ Green badge: 25 years (bottom-right overlap) */}
            {/* <div className="absolute bottom-[-22px] right-[-22px] flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_50px_rgba(16,185,129,0.35)]">
              <div className="text-[54px] font-extrabold leading-none">25</div>
              <div className="-mt-1 text-[14px] font-semibold leading-tight">
                years of
              </div>
              <div className="text-[14px] font-semibold leading-tight">
                experience
              </div>
            </div> */}
          </div>

          {/* ✅ RIGHT: Content */}
          <div className="lg:pl-4">
            <div className="text-[15px] font-semibold tracking-[0.12em] text-emerald-500">
              [Clean. Fresh. Reliable.]
            </div>

            <h2 className="mt-5 text-[42px] font-extrabold leading-[1.1] text-slate-900 sm:text-[48px]">
              We are Passionate About 
              Laundry
            </h2>

            <p className="mt-6 max-w-[720px] text-[16px] leading-[1.9] text-slate-500">
              We are professionals in the laundry and dry cleaning business,
              which means we always stay up to date on the latest technologies,
              cleaning methods, and solutions for dealing with stains or delicate
              fabrics. Plus, we maintain the highest standards of business
              integrity by following local and national regulations and
              environmental safety rules. We are passionate about changing the
              way you think about laundry!
            </p>

            {/* ✅ Checklist + Call box row (with divider) */}
            <div className="mt-10 grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
              {/* checklist */}
              <ul className="space-y-4">
                {[
                  "100% Customer Satisfaction",
                  "Free Collection & Delivery",
                  "Affordable Prices",
                  "Best Quality",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-slate-600">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="#10B981"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[16px]">{t}</span>
                  </li>
                ))}
              </ul>

              {/* divider */}
              <div className="hidden md:block h-full w-px bg-slate-200" />

              {/* call box */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.77.65 2.6a2 2 0 0 1-.45 2.11L8.1 9.7a16 16 0 0 0 6 6l1.27-1.2a2 2 0 0 1 2.11-.45c.83.31 1.7.53 2.6.65A2 2 0 0 1 22 16.9Z"
                      stroke="#10B981"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <div className="text-[16px] text-slate-500">
                    Call for Quality Services
                  </div>
                  <div className="mt-1 text-[22px] font-extrabold tracking-wide text-slate-900">
                    +91 9054678965
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Bottom-right scroll-to-top (green round) */}
        {/* <button
          type="button"
          onClick={scrollTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 shadow-[0_18px_50px_rgba(16,185,129,0.35)] hover:bg-emerald-600"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5l7 7-1.4 1.4L13 8.8V19h-2V8.8L6.4 13.4 5 12l7-7Z"
              fill="white"
            />
          </svg>
        </button> */}
      </div>
    </section>
  );
}
