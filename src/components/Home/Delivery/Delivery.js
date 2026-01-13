// Delivery.js
import React from "react";


const BRAND = "#51B56C";

export default function Delivery() {
  return (
    <section className="relative bg-[#F4F8F5] overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-8">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold leading-[1.05] text-slate-900">
              Quality Service with
              <br />
              Free{" "}
              <span style={{ color: BRAND }} className="font-extrabold">
                Collection &amp; Delivery
              </span>
            </h2>

            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.85] text-slate-500 max-w-[520px] mx-auto lg:mx-0">
              It is our goal to offer you the best possible laundry
              <br className="hidden sm:block" />
              and dry cleaning service available.
            </p>

            <div className="mt-10 text-[26px] sm:text-[32px] font-extrabold text-slate-900 tracking-wide">
               +91 9054678965
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* dotted curve arrow */}
            <svg
              className="hidden lg:block pointer-events-none absolute -left-8 top-6"
              width="260"
              height="140"
              viewBox="0 0 260 140"
              fill="none"
            >
              <path
                d="M14 90 C90 20, 160 120, 246 52"
                stroke="#D9E6DE"
                strokeWidth="3"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />
              <path
                d="M242 52 l14 6 -12 10"
                stroke="#D9E6DE"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <img
              src="https://muftykare.com/hero_section_3.png"
              alt="Delivery van"
              draggable={false}
              className="select-none w-[92%] max-w-[620px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
