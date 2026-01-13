// // HowItWork.js
// import React, { useEffect, useMemo, useState } from "react";

// const BRAND = "#51B56C";

// /* -------------------- Simple illustrations (self-contained SVG) -------------------- */
// /* NOTE: If you have exact PNG/SVGs, replace <ArtX /> with <img src={...} /> */

// const ArtBag = () => (
//   <svg width="260" height="220" viewBox="0 0 260 220" fill="none">
//     <ellipse cx="140" cy="196" rx="88" ry="14" fill="#EEF2EF" />
//     <path d="M92 58h86l14 120H78L92 58Z" fill="#E9F3EE" stroke="#D6E6DD" strokeWidth="3" />
//     <path d="M115 40c0-10 8-18 18-18h9c10 0 18 8 18 18" stroke="#BFD7CB" strokeWidth="6" strokeLinecap="round"/>
//     <path d="M98 64h98" stroke="#D6E6DD" strokeWidth="3" />
//     <path d="M152 82c-10 0-18 8-18 18v66" stroke="#C7DCCE" strokeWidth="5" strokeLinecap="round"/>
//     <path d="M124 104h62" stroke="#D6E6DD" strokeWidth="3" strokeLinecap="round"/>
//     <path d="M122 126h66" stroke="#D6E6DD" strokeWidth="3" strokeLinecap="round"/>
//   </svg>
// );

// const ArtTruck = () => (
//   <svg width="260" height="220" viewBox="0 0 260 220" fill="none">
//     <ellipse cx="132" cy="196" rx="92" ry="14" fill="#EEF2EF" />
//     <path d="M54 96h108v64H54V96Z" fill="#F3F6F4" stroke="#D6E6DD" strokeWidth="3" />
//     <path d="M162 112h40l18 18v30h-58v-48Z" fill="#E9F3EE" stroke="#D6E6DD" strokeWidth="3" />
//     <path d="M174 122h22l10 10h-32v-20Z" fill="#D7F0E3" stroke="#BFE3CF" strokeWidth="3" />
//     <text x="78" y="138" fontSize="18" fill="#9CB9AA" fontWeight="700">LAUNDRY</text>
//     <circle cx="92" cy="168" r="14" fill="#2F3B45"/>
//     <circle cx="92" cy="168" r="7" fill="#C9D6D1"/>
//     <circle cx="192" cy="168" r="14" fill="#2F3B45"/>
//     <circle cx="192" cy="168" r="7" fill="#C9D6D1"/>
//   </svg>
// );

// const ArtWasher = () => (
//   <svg width="260" height="220" viewBox="0 0 260 220" fill="none">
//     <ellipse cx="140" cy="198" rx="92" ry="14" fill="#EEF2EF" />
//     <rect x="150" y="56" width="78" height="112" rx="10" fill="#F3F6F4" stroke="#D6E6DD" strokeWidth="3"/>
//     <rect x="160" y="66" width="58" height="14" rx="6" fill="#E9F3EE"/>
//     <circle cx="189" cy="118" r="28" fill="#E9F3EE" stroke="#CFE3D8" strokeWidth="4"/>
//     <path d="M176 118c6 10 14 14 26 14" stroke="#9ECFB6" strokeWidth="4" strokeLinecap="round"/>
//     <path d="M70 158h72l18 18H88l-18-18Z" fill="#F0C54A" stroke="#E3B63A" strokeWidth="3"/>
//     <rect x="62" y="120" width="96" height="44" rx="8" fill="#F6D56C" stroke="#E3B63A" strokeWidth="3"/>
//     <path d="M78 130h64" stroke="#E3B63A" strokeWidth="3" strokeLinecap="round"/>
//   </svg>
// );

// const ArtRack = () => (
//   <svg width="260" height="220" viewBox="0 0 260 220" fill="none">
//     <ellipse cx="140" cy="198" rx="92" ry="14" fill="#EEF2EF" />
//     <path d="M90 70h120" stroke="#CFE3D8" strokeWidth="6" strokeLinecap="round"/>
//     <path d="M110 70v108" stroke="#CFE3D8" strokeWidth="6" strokeLinecap="round"/>
//     <path d="M190 70v108" stroke="#CFE3D8" strokeWidth="6" strokeLinecap="round"/>
//     <path d="M125 82c10 10 20 10 30 0" stroke="#B9D6C8" strokeWidth="4" strokeLinecap="round"/>
//     <path d="M132 84v10l-30 18" stroke="#B9D6C8" strokeWidth="4" strokeLinecap="round"/>
//     <path d="M148 84v10l30 18" stroke="#B9D6C8" strokeWidth="4" strokeLinecap="round"/>
//     <rect x="102" y="112" width="96" height="56" rx="10" fill="#F3F6F4" stroke="#D6E6DD" strokeWidth="3"/>
//     <rect x="112" y="118" width="20" height="48" rx="6" fill="#F5B400" opacity="0.9"/>
//     <rect x="136" y="118" width="20" height="48" rx="6" fill="#23A6FF" opacity="0.75"/>
//     <rect x="160" y="118" width="20" height="48" rx="6" fill="#FF4D6D" opacity="0.7"/>
//   </svg>
// );

// /* -------------------- UI bits -------------------- */
// const StepTitle = ({ green, rest }) => (
//   <h3 className="text-[34px] leading-[1.15] font-extrabold text-slate-800">
//     <span style={{ color: BRAND }}>{green}</span>{" "}
//     <span className="text-slate-800">{rest}</span>
//   </h3>
// );

// export default function HowItWork() {
//   const steps = useMemo(
//     () => [
//       {
//         num: "01",
//         titleGreen: "Bag Up",
//         titleRest: "All Your Dirty Clothes",
//         desc:
//           "We are pleased to pickup your laundry and ensure that it is expertly laundered and pressed.",
//         art: <ArtBag />,
//       },
//       {
//         num: "02",
//         titleGreen: "Pick Up",
//         titleRest: "Your Clothes",
//         desc:
//           "Morning of your pickup, leave your bags in their designated pickup location by 8:00 am for a driver to pick up.",
//         art: <ArtTruck />,
//       },
//       {
//         num: "03",
//         titleGreen: "Clean",
//         titleRest: "Your Clothes",
//         desc:
//           "Our facilities are so good we guarantee you’ll be satisfied – we put a quality guarantee on all items.",
//         art: <ArtWasher />,
//       },
//       {
//         num: "04",
//         titleGreen: "Deliver",
//         titleRest: "Clean, Folded Clothes",
//         desc:
//           "We’ll deliver your pristine garments back to you, anytime and anywhere.",
//         art: <ArtRack />,
//       },
//     ],
//     []
//   );

//   const [active, setActive] = useState(0);
//   const [pause, setPause] = useState(false);

//   // optional auto-rotate (like screenshot behavior)
//   useEffect(() => {
//     if (pause) return;
//     const t = setInterval(() => setActive((p) => (p + 1) % steps.length), 6500);
//     return () => clearInterval(t);
//   }, [pause, steps.length]);

//   const s = steps[active];

//   return (
//     <section
//       className="relative bg-white py-14 lg:py-20 overflow-hidden"
//       onMouseEnter={() => setPause(true)}
//       onMouseLeave={() => setPause(false)}
//     >
//       {/* very light background curve (left) */}
//       <div className="pointer-events-none absolute -left-52 top-12 h-[520px] w-[520px] rounded-full bg-[#F5F7F6]" />

//       {/* dotted curve arrow (only large screens) */}
//       <svg
//         className="hidden lg:block pointer-events-none absolute left-1/2 top-[92px] -translate-x-1/2"
//         width="520"
//         height="160"
//         viewBox="0 0 520 160"
//         fill="none"
//       >
//         <path
//           d="M30 46 C170 10, 260 95, 460 56"
//           stroke="#D9E6DE"
//           strokeWidth="3"
//           strokeDasharray="2 10"
//           strokeLinecap="round"
//         />
//         <path
//           d="M456 56 l18 6 -14 12"
//           stroke="#D9E6DE"
//           strokeWidth="3"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </svg>

//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 items-center">
//           {/* LEFT (fixed) */}
//           <div>
//             <div
//               className="text-[18px] font-semibold tracking-[0.12em]"
//               style={{ color: BRAND }}
//             >
//               Get Your Clothes Collected &amp; Delivered
//             </div>

//             <h2 className="mt-3 text-[48px] md:text-[58px] font-extrabold text-slate-800 leading-[1.02]">
//               How We Work
//             </h2>

//             <p className="mt-6 text-[17px] leading-[1.85] text-slate-500 max-w-[560px]">
//               Our Service is dedicated to making your life easier by providing
//               pick up laundry service. Give yourself one less thing to worry
//               about and try our residential wash and fold service that includes
//               pick up and delivery.
//             </p>

//             <p className="mt-6 text-[17px] leading-[1.85] text-slate-500 max-w-[560px]">
//               We have been in the laundry business for more than 12 years and
//               would love to earn your business. Try us today and save $10 Off
//               your first laundry service of 20 pounds or more.
//             </p>

//             <a
//               href="#"
//               className="mt-10 inline-flex items-center justify-center px-10 py-4 text-white font-semibold"
//               style={{ backgroundColor: BRAND }}
//             >
//               Get Service Now
//             </a>
//           </div>

//           {/* RIGHT (changes) */}
//           <div className="relative">
//             {/* big circle + watermark number */}
//             <div className="relative mx-auto max-w-[640px]">
//               <div
//                 className="absolute -right-6 -top-8 h-[520px] w-[520px] rounded-full"
//                 style={{
//                   border: "12px solid #EEF3EF",
//                 }}
//               />
//               <div className="absolute -right-6 -top-8 h-[520px] w-[520px] rounded-full bg-white/60" />

//               <div className="absolute -right-6 -top-8 h-[520px] w-[520px] rounded-full flex items-center justify-center">
//                 <div className="select-none text-[160px] font-extrabold text-[#EEF3EF] leading-none">
//                   {s.num}
//                 </div>
//               </div>

//               {/* content */}
//               <div className="relative z-10 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 items-center">
//                 <div className="flex items-center justify-center md:justify-end">
//                   {s.art}
//                 </div>

//                 <div className="md:pr-6">
//                   <StepTitle green={s.titleGreen} rest={s.titleRest} />
//                   <p className="mt-4 text-[17px] leading-[1.9] text-slate-500 max-w-[360px]">
//                     {s.desc}
//                   </p>
//                 </div>
//               </div>

//               {/* stepper (bottom) */}
//               <div className="mt-12 flex items-center justify-center">
//                 <div className="flex items-center">
//                   {steps.map((it, i) => (
//                     <div key={it.num} className="flex items-center">
//                       <button
//                         type="button"
//                         onClick={() => setActive(i)}
//                         className="h-[64px] w-[64px] rounded-full flex items-center justify-center font-bold text-[20px] transition"
//                         style={{
//                           border:
//                             i === active
//                               ? `4px solid ${BRAND}`
//                               : "4px solid #EEF3EF",
//                           color: i === active ? BRAND : "#2F3645",
//                           background: "#fff",
//                           boxShadow:
//                             i === active
//                               ? "0 14px 34px rgba(0,0,0,0.06)"
//                               : "0 14px 34px rgba(0,0,0,0.04)",
//                         }}
//                         aria-label={`Step ${i + 1}`}
//                       >
//                         {i + 1}
//                       </button>

//                       {i !== steps.length - 1 && (
//                         <div
//                           className="mx-2 w-[54px] md:w-[70px] h-[0px]"
//                           style={{
//                             borderTop: "4px dotted #D9E6DE",
//                             opacity: i < active ? 1 : 0.7,
//                           }}
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* END RIGHT */}
//         </div>
//       </div>
//     </section>
//   );
// }


// HowItWork.js
import React, { useEffect, useMemo, useRef, useCallback, useState } from "react";
import img1 from "./images/stepbox-img01.png";
import img2 from "./images/stepbox-img02.png";
import img3 from "./images/stepbox-img03.png";
import img4 from "./images/stepbox-img04.png";

const BRAND = "#51B56C";
const INTERVAL_MS = 6500;

/* -------------------- UI helpers -------------------- */
const StepTitle = ({ green, rest }) => (
  <h3 className="text-[34px] sm:text-[36px] leading-[1.12] font-extrabold text-slate-900">
    <span style={{ color: BRAND }}>{green}</span>{" "}
    <span className="text-slate-800">{rest}</span>
  </h3>
);

const ArtView = ({ src }) => (
  <img
    src={src}
    alt=""
    draggable={false}
    className="select-none pointer-events-none w-[200px] h-[250px]"
  />
);

export default function HowItWork() {
  const steps = useMemo(
    () => [
      {
        num: "01",
        titleGreen: "Bag Up",
        titleRest: "All Your Dirty Clothes",
        desc:
          "We are pleased to pickup your laundry and ensure that it is expertly laundered and pressed.",
        artSrc: img1,
      },
      {
        num: "02",
        titleGreen: "Pick Up",
        titleRest: "Your Clothes",
        desc:
          "Morning of your pickup, leave your bags in their designated pickup location by 8:00 am for a driver to pick up.",
        artSrc: img2,
      },
      {
        num: "03",
        titleGreen: "Clean",
        titleRest: "Your Clothes",
        desc:
          "Our facilities are so good we guarantee you’ll be satisfied – we put a quality guarantee on all items.",
        artSrc: img3,
      },
      {
        num: "04",
        titleGreen: "Deliver",
        titleRest: "Clean, Folded Clothes",
        desc: "We’ll deliver your pristine garments back to you, anytime and anywhere.",
        artSrc: img4,
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startAuto = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % steps.length);
    }, INTERVAL_MS);
  }, [steps.length]);

  useEffect(() => {
    startAuto();
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [startAuto]);

  const go = (i) => {
    setActive(i);
    startAuto(); // ✅ click pannitu next auto-change timing fresh-aa start aagum
  };

  const s = steps[active];

  return (
    <section className="relative isolate bg-white py-14 lg:py-20 overflow-hidden">
      {/* ✅ LEFT background big circle (lg only) */}
      {/* <div className="hidden lg:block pointer-events-none absolute -left-[420px] top-[60px] h-[680px] w-[680px] rounded-full bg-[#F5F7F6]" /> */}

      {/* dotted curve arrow (lg only) */}
      <svg
        className="hidden lg:block pointer-events-none absolute left-1/2 top-[120px] -translate-x-1/2"
        width="540"
        height="170"
        viewBox="0 0 540 170"
        fill="none"
      >
        <path
          d="M40 56 C190 18, 290 112, 500 62"
          stroke="#D9E6DE"
          strokeWidth="3"
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        <path
          d="M496 62 l18 6 -14 12"
          stroke="#D9E6DE"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:[grid-template-columns:1fr_1.25fr] gap-14 lg:gap-10 items-center">
          {/* LEFT fixed */}
          <div>
            <div
              className="text-[15px] sm:text-[16px] font-semibold tracking-[0.12em]"
              style={{ color: BRAND }}
            >
              Get Your Clothes Collected &amp; Delivered
            </div>

            <h2 className="mt-3 text-[46px] md:text-[58px] font-extrabold text-slate-900 leading-[1.02]">
              How We Work
            </h2>

            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.9] text-slate-500 max-w-[560px]">
              Our Service is dedicated to making your life easier by providing
              pick up laundry service. Give yourself one less thing to worry
              about and try our residential wash and fold service that includes
              pick up and delivery.
            </p>

            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.9] text-slate-500 max-w-[560px]">
              We have been in the laundry business for more than 12 years and
              would love to earn your business. Try us today and save $10 Off
              your first laundry service of 20 pounds or more.
            </p>

            <a
              href="#"
              className="mt-10 inline-flex items-center justify-center px-10 py-4 text-white font-semibold"
              style={{ backgroundColor: BRAND }}
            >
              Get Service Now
            </a>
          </div>

          {/* RIGHT changing */}
          <div className="relative w-full">
            <div className="relative w-full overflow-visible">
              <div className="relative ml-auto h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[520px] lg:w-[520px]">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "12px solid #EEF3EF",
                    background: "rgba(255,255,255,0.65)",
                  }}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="select-none font-extrabold leading-none text-[#EEF3EF] text-[120px] sm:text-[150px] lg:text-[170px]">
                    {s.num}
                  </div>
                </div>

                {/* mobile/tablet */}
                <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-[72px] sm:top-[88px]">
                  <ArtView src={s.artSrc} />
                </div>

                {/* text inside circle */}
                <div className="absolute right-8 sm:right-12 lg:right-14 top-1/2 -translate-y-1/2 max-w-[250px] sm:max-w-[280px]">
                  <StepTitle green={s.titleGreen} rest={s.titleRest} />
                  <p className="mt-4 text-[16px] leading-[1.9] text-slate-500">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* desktop art overlap */}
              <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-[340px] justify-center">
                <div className="relative">
                  <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-2 h-[26px] w-[210px] rounded-full bg-[#EEF2EF]" />
                  <ArtView src={s.artSrc} />
                </div>
              </div>

              {/* stepper */}
              <div className="mt-12 flex items-center justify-center">
                <div className="flex items-center">
                  {steps.map((it, i) => {
                    const isDone = i < active;
                    const isActive = i === active;

                    const borderColor = isDone || isActive ? BRAND : "#EEF3EF";
                    const textColor = isActive
                      ? BRAND
                      : isDone
                      ? "#2F3645"
                      : "#B7C1BC";

                    return (
                      <div key={it.num} className="flex items-center">
                        <button
                          type="button"
                          onClick={() => go(i)}
                          className="h-[64px] w-[64px] rounded-full flex items-center justify-center font-bold text-[20px] bg-white transition"
                          style={{
                            border: `4px solid ${borderColor}`,
                            color: textColor,
                            boxShadow: isActive
                              ? "0 14px 34px rgba(0,0,0,0.08)"
                              : "0 14px 34px rgba(0,0,0,0.05)",
                          }}
                          aria-label={`Step ${i + 1}`}
                        >
                          {i + 1}
                        </button>

                        {i !== steps.length - 1 && (
                          <div
                            className="mx-2 w-[56px] sm:w-[68px] h-[0px]"
                            style={{
                              borderTop: `4px dotted ${
                                i < active ? BRAND : "#D9E6DE"
                              }`,
                              opacity: i < active ? 1 : 0.65,
                            }}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* end stepper */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
