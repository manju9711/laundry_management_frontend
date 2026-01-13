// import React, { useEffect, useMemo, useState } from "react";

// const BRAND = "#51B56C";

// /* ---------- Icons ---------- */
// const IconVacuum = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     <path d="M14 29c0 6 5 11 11 11h11" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M18 12h6l3 20H21l-3-20Z" stroke="white" strokeWidth="2.6" strokeLinejoin="round" />
//     <path d="M10 34h14" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <circle cx="12" cy="34" r="3.2" stroke="white" strokeWidth="2.6" />
//     <path d="M27 14h10c4 0 7 3 7 7v12" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//   </svg>
// );

// const IconWasher = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     <rect x="12" y="10" width="24" height="28" rx="3.5" stroke="white" strokeWidth="2.6" />
//     <path d="M12 17h24" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <circle cx="24" cy="28" r="7.5" stroke="white" strokeWidth="2.6" />
//     <path d="M21 28c1.2 2.2 3.2 3.5 6 3.7" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <circle cx="16.8" cy="13.6" r="1.2" fill="white" />
//     <circle cx="20.6" cy="13.6" r="1.2" fill="white" />
//   </svg>
// );

// const IconHanger = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     <path
//       d="M24 10c3 0 5 2 5 4.5 0 1.7-1 3-2.6 4.2l-2.4 1.8"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//     />
//     <path d="M9 30l15-10 15 10" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M12 30v7h24v-7" stroke="white" strokeWidth="2.6" strokeLinejoin="round" />
//   </svg>
// );

// // NEW: Alterations & Repairs (needle)
// const IconNeedle = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     <path d="M33 10l5 5" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M12 36l21-21" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M9 39c4-1 7-4 8-8" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M28 14c2 2 4 4 6 6" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <circle cx="38" cy="16" r="4" stroke="white" strokeWidth="2.6" />
//   </svg>
// );

// // NEW: Steam Iron
// const IconIron = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     <path
//       d="M10 30c0-8 6-14 14-14h7c4 0 7 3 7 7v7H10Z"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinejoin="round"
//     />
//     <path d="M10 37h28" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M30 20h5" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M16 14c0-2 2-4 4-4" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//   </svg>
// );

// // NEW: Shoes Cleaning (shoe)
// const IconShoe = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     <path
//       d="M12 30c6 0 10-6 12-10 2 2 4 4 8 5 3 1 6 2 6 6v3H12v-4Z"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinejoin="round"
//     />
//     <path d="M14 34h26" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M22 24l3 2" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//     <path d="M26 26l3 2" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
//   </svg>
// );

// // Curtain icon (matches your IconWasher style)
// const IconCurtain = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     {/* Rod */}
//     <path
//       d="M12 12h24"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//     />

//     {/* Hangers */}
//     <path
//       d="M16 12v4M24 12v4M32 12v4"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//     />

//     {/* Left curtain */}
//     <path
//       d="M14 16c3 2 3 4 0 6v16c3 2 3 4 0 6"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />

//     {/* Right curtain */}
//     <path
//       d="M34 16c-3 2-3 4 0 6v16c-3 2-3 4 0 6"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />

//     {/* Center split */}
//     <path
//       d="M24 16v28"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//       opacity="0.9"
//     />
//   </svg>
// );

// // Blanket / Bedding icon (matches your IconWasher style)
//  const IconBlanket = ({ size = 44 }) => (
//   <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
//     {/* Main folded blanket outline */}
//     <path
//       d="M14 16c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4H18c-2.2 0-4-1.8-4-4V16Z"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinejoin="round"
//     />

//     {/* Fold line */}
//     <path
//       d="M22 12v26"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//       opacity="0.9"
//     />

//     {/* Stitch / pattern dots */}
//     <circle cx="18.5" cy="20" r="1.2" fill="white" />
//     <circle cx="18.5" cy="25" r="1.2" fill="white" />
//     <circle cx="18.5" cy="30" r="1.2" fill="white" />

//     {/* Rolled edge / tuck */}
//     <path
//       d="M34 18c2 0 3.5 1.6 3.5 3.6V34c0 2-1.5 3.6-3.5 3.6H30"
//       stroke="white"
//       strokeWidth="2.6"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );


// /* ---------- helpers ---------- */
// const usePerView = () => {
//   const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1400);

//   useEffect(() => {
//     const on = () => setW(window.innerWidth);
//     window.addEventListener("resize", on);
//     return () => window.removeEventListener("resize", on);
//   }, []);

//   if (w >= 1024) return 3;
//   if (w >= 768) return 2;
//   return 1;
// };

// const chunk = (arr, size) => {
//   const out = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// };

// /* ---------- Card ---------- */
// const ServiceCard = ({ item }) => {
//   return (
//     <div className="relative overflow-hidden bg-slate-200">
//       <img
//         src={item.image}
//         alt={item.title}
//         className="h-[420px] w-full object-cover object-center"
//       />

//       {/* bottom dark gradient */}
//       <div
//         className="absolute inset-x-0 bottom-0 h-[52%]"
//         style={{
//           background:
//             "linear-gradient(to top, rgba(10,15,25,0.92), rgba(10,15,25,0.35) 60%, rgba(10,15,25,0) 100%)",
//         }}
//       />

//       {/* icon + text (exact style) */}
//       <div className="absolute inset-x-0 bottom-0 h-[52%] flex items-center justify-center px-6">
//         <div className="flex items-center gap-7 md:gap-10">
//           <div
//             className="h-[90px] w-[90px]  rounded-full flex items-center justify-center shrink-0"
//             style={{
//               backgroundColor: BRAND,
//               boxShadow: "0 14px 40px rgba(0,0,0,.25)",
//             }}
//           >
//             {item.icon}
//           </div>

//           <div className="max-w-[360px] md:max-w-[420px]">
//             <h3
//               className="text-white font-extrabold leading-tight text-[26px] md:text-[34px]"
//               style={{ textShadow: "0 6px 22px rgba(0,0,0,.35)" }}
//             >
//               {item.title}
//             </h3>

//             <p
//               className="mt-2 text-white/90 text-[14px] md:text-[16px] leading-[1.55]"
//               style={{ textShadow: "0 5px 18px rgba(0,0,0,.35)" }}
//             >
//               {item.desc}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Services() {
//   // ✅ TOTAL 6 items
//   const cards = useMemo(
//     () => [
//       // {
//       //   title: "Carpet Cleaning",
//       //   desc: "To keep carpet at peak performance, we recommend professional deep cleaning your carpet every 12 to 18 months.",
//       //   image:
//       //     "https://media.istockphoto.com/id/1146967802/photo/person-cleaning-carpet-with-vacuum-cleaner.jpg?s=612x612&w=0&k=20&c=UJC79wrTWavMoIas1vxjmokR7TawUVNZR7XMqMnCaFQ=",
//       //   icon: <IconVacuum />,
//       // },
//       {
//         title: "Laundry Services",
//         desc: "Let us pick up your dirty laundry, sort it, pre-treat stains, wash, dry, fold and deliver back to you in one neat, easy package.",
//         image:
//           "https://images.squarespace-cdn.com/content/v1/636fd93bb20ae968f91ece82/1713559561523-ZMLEUZPF6QSLVBM9GKYQ/laundry_service_near_downtown_long_beach.jpg",
//         icon: <IconWasher />,
//       },
//       {
//         title: "Dry Cleaning Services",
//         desc: "SMU students and local residents love on our reliable dry cleaning services for the fast, accurate, top quality results.",
//         image:
//           "https://easyspinlaundry.com/wp-content/uploads/2025/09/Dry-Cleaning-1-1.webp",
//         icon: <IconHanger />,
//       },
//       {
//         title: "Alterations & Repairs",
//         desc: "We have expert seamstresses and tailors to ensure we meet and exceed your fitting requirements.",
//         image:
//           "https://asraaz.blr1.digitaloceanspaces.com/services/368_2024_8846_Ln_alterations.jpg",
//         icon: <IconNeedle />,
//       },
//       {
//         title: "Steam Iron",
//         desc: "These services are accomplished under the guidance of adroit personnel who have industry proficiency.",
//         image:
//           "https://t3.ftcdn.net/jpg/00/75/91/18/360_F_75911873_OwO8MuElxbYpM6QwoPe6uKVmeUsGjIYx.jpg",
//         icon: <IconIron />,
//       },
//       // {
//       //   title: "Shoes Cleaning",
//       //   desc: "We use premium cleaning products and standardised processes to take care of your shoes and refresh the look.",
//       //   image:
//       //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXzYGWlqUAMl8OIMrMpws9_SAM1kTbU-P5A&s",
//       //   icon: <IconShoe />,
//       // },
//       {
//       title: "Curtain Cleaning",
//       desc: "We gently deep-clean curtains to remove dust, stains and odour, keeping them fresh and hygienic without damaging the fabric.",
//       image:
//         "https://media.istockphoto.com/id/486726853/photo/ironing-with-garment-steamer.jpg?s=612x612&w=0&k=20&c=t8NvfBAcpD3fb7iQfsEZRfh9YT1txiFR9aAJTJORy3o=",
//       icon: <IconCurtain />, 
//     },
//     {
//       title: "Blanket Cleaning",
//       desc: "Special care wash for blankets, comforters and bedding—deep cleaned, sanitised and delivered fresh and folded.",
//       image:
//         "https://tumbledry.in/wp-content/uploads/2022/12/06-copy-13.jpg",
//       icon: <IconBlanket />, 
//     },
//     ],
//     []
//   );

//   const perView = usePerView();
//   const [page, setPage] = useState(0);
//   const [pause, setPause] = useState(false);

//   useEffect(() => setPage(0), [perView]);

//   const pages = useMemo(() => chunk(cards, perView), [cards, perView]);
//   const pageCount = pages.length;

//   const go = (i) => setPage((i + pageCount) % pageCount);

//   // ✅ AUTO SLIDE
//   useEffect(() => {
//     if (pause) return;
//     const t = setInterval(() => {
//       setPage((p) => (p + 1) % pageCount);
//     }, 4500);
//     return () => clearInterval(t);
//   }, [pause, pageCount]);

//   return (
//     <section className="bg-white py-10">
//       {/* heading */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
//         <div className="text-[18px] font-semibold tracking-wide" style={{ color: BRAND }}>
//           [ Our Services ]
//         </div>
//         <h2 className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.05] text-slate-900">
//           Dry Cleaning &amp; Laundry,
//           <br />
//           Free Delivery
//         </h2>
//       </div>

//       {/* ✅ wider container */}
//       <div className="mx-auto max-w-[1680px] px-3 sm:px-6 lg:px-8 mt-8">
//         {/* carousel */}
//         <div
//           className="relative overflow-hidden"
//           onMouseEnter={() => setPause(true)}
//           onMouseLeave={() => setPause(false)}
//         >
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${page * 100}%)` }}
//           >
//             {pages.map((group, idx) => (
//               <div key={idx} className="w-full shrink-0">
//                 <div
//                   className="grid gap-8 lg:gap-10"
//                   style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
//                 >
//                   {group.map((it, i) => (
//                     <ServiceCard key={`${idx}-${i}-${it.title}`} item={it} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* dots */}
//         <div className="mt-10 flex items-center justify-center gap-4">
//           {Array.from({ length: pageCount }).map((_, i) => (
//             <button
//               key={i}
//               type="button"
//               onClick={() => go(i)}
//               className={`h-3 w-3 rounded-full transition ${page === i ? "" : "opacity-20"}`}
//               style={{ backgroundColor: BRAND }}
//               aria-label={`Go to page ${i + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


//new services
import React, { useEffect, useMemo, useState } from "react";

const BRAND = "#51B56C";

/* ---------- Icons ---------- */

// Steam Iron
const IconIron = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M10 30c0-8 6-14 14-14h7c4 0 7 3 7 7v7H10Z"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path d="M10 37h28" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M30 20h5" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M16 14c0-2 2-4 4-4" stroke="white" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);
//  Household Items (Home)
const IconHome = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M10 22L24 10l14 12v16a3 3 0 0 1-3 3H13a3 3 0 0 1-3-3V22Z"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M20 41V28h8v13"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M18 24h12"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

//  Hotel Services (Building)
const IconBuilding = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M14 41V11h20v30"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M10 41h28"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M20 17h4M20 23h4M20 29h4M28 17h0M28 23h0M28 29h0"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M22 41V35h4v6"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
  </svg>
);

//  Hospital Services (Medical Cross)
const IconMedicalCross = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <path
      d="M20 12h8v8h8v8h-8v8h-8v-8h-8v-8h8v-8Z"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    <path
      d="M10 41h28"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

//  Stain Removal (Sparkles)
const IconSparkles = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* big sparkle */}
    <path
      d="M24 10l2.6 7.4L34 20l-7.4 2.6L24 30l-2.6-7.4L14 20l7.4-2.6L24 10Z"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    {/* small sparkle */}
    <path
      d="M36 28l1.4 4L41 33.4l-3.6 1.3L36 39l-1.4-4.3L31 33.4l3.6-1.4L36 28Z"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    {/* shine lines */}
    <path
      d="M12 31l2 2M10 24h3M14 19l2 2"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);

// Saree Polishing (Saree/Drape)
const IconSaree = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    {/* hanger top */}
    <path
      d="M24 10c2 0 3 1.3 3 3 0 1.2-.6 2.2-2 3.3"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    {/* saree drape outline */}
    <path
      d="M16 16h16l-2.5 16c-.4 2.6-2.7 4.5-5.3 4.5h-3.4c-2.6 0-4.9-1.9-5.3-4.5L16 16Z"
      stroke="white"
      strokeWidth="2.6"
      strokeLinejoin="round"
    />
    {/* pleats */}
    <path
      d="M20 20l-1 10M24 20v12M28 20l1 10"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    {/* base */}
    <path
      d="M12 41h24"
      stroke="white"
      strokeWidth="2.6"
      strokeLinecap="round"
    />
  </svg>
);





/* ---------- helpers ---------- */
const usePerView = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1400);

  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  if (w >= 1024) return 3;
  if (w >= 768) return 2;
  return 1;
};

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

/* ---------- Card ---------- */
const ServiceCard = ({ item }) => {
  return (
    <div className="relative overflow-hidden bg-slate-200">
      <img
        src={item.image}
        alt={item.title}
        className="h-[420px] w-full object-cover object-center"
      />

      {/* bottom dark gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-[52%]"
        style={{
          background:
            "linear-gradient(to top, rgba(10,15,25,0.92), rgba(10,15,25,0.35) 60%, rgba(10,15,25,0) 100%)",
        }}
      />

      {/* icon + text (exact style) */}
      <div className="absolute inset-x-0 bottom-0 h-[52%] flex items-center justify-center px-6">
        <div className="flex items-center gap-7 md:gap-10">
          <div
            className="h-[90px] w-[90px]  rounded-full flex items-center justify-center shrink-0"
            style={{
              backgroundColor: BRAND,
              boxShadow: "0 14px 40px rgba(0,0,0,.25)",
            }}
          >
            {item.icon}
          </div>

          <div className="max-w-[360px] md:max-w-[420px]">
            <h3
              className="text-white font-extrabold leading-tight text-[26px] md:text-[34px]"
              style={{ textShadow: "0 6px 22px rgba(0,0,0,.35)" }}
            >
              {item.title}
            </h3>

            <p
              className="mt-2 text-white/90 text-[14px] md:text-[16px] leading-[1.55]"
              style={{ textShadow: "0 5px 18px rgba(0,0,0,.35)" }}
            >
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  
  const cards = useMemo(
  () => [
    {
      title: "Dry Wash & Iron",
      desc: "Gentle dry-wash with perfect steam press—shirts, pants, uniforms and daily wear all come back crisp, fresh and ready to wear.",
      image:
        "https://media.istockphoto.com/id/614993130/photo/women-iron.jpg?s=612x612&w=0&k=20&c=oR0qRI93yEF8f3akdBS7sh3n1VHpNQNcbRhu7RyZP4c=",
      icon: <IconIron />,
    },
    {
      title: "Saree Polishing",
      desc: "Special saree care with polishing finish—keeps the fabric smooth, adds a clean shine and maintains the saree’s original drape.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2023/2/AA/KM/RS/185075251/product-jpeg-500x500.jpg",
      icon: <IconSaree />,
    },
    {
      title: "Stain Removal",
      desc: "Targeted stain treatment for food, oil, ink and sweat marks—safe pre-treatment and deep cleaning without damaging the fabric.",
      image:
        "https://images.pexels.com/photos/4239032/pexels-photo-4239032.jpeg",
      icon: <IconSparkles />,
    },
    {
      title: "Household Items",
      desc: "We clean curtains, blankets, bedsheets, pillow covers, rugs and more—deep cleaned, sanitised and delivered fresh and neatly packed.",
      image:
        "https://img.freepik.com/free-photo/man-doing-professional-home-cleaning-service_23-2150358960.jpg?semt=ais_hybrid&w=740&q=80",
      icon: <IconHome />,
    },
    {
      title: "Hotel Services",
      desc: "Bulk laundry for hotels—bedsheets, towels, staff uniforms and linens with consistent quality, quick turnaround and hygienic handling.",
      image:
        "https://images.pexels.com/photos/6585754/pexels-photo-6585754.jpeg",
      icon: <IconBuilding />,
    },
    {
      title: "Hospital Services",
      desc: "Hygienic linen processing for hospitals—patient bedsheets, gowns and staff uniforms washed with sanitised protocols and safe packaging.",
      image:
        "https://images.pexels.com/photos/3952234/pexels-photo-3952234.jpeg",
      icon: <IconMedicalCross />,
    },
  ],
  []
);


  const perView = usePerView();
  const [page, setPage] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => setPage(0), [perView]);

  const pages = useMemo(() => chunk(cards, perView), [cards, perView]);
  const pageCount = pages.length;

  const go = (i) => setPage((i + pageCount) % pageCount);

  // ✅ AUTO SLIDE
  useEffect(() => {
    if (pause) return;
    const t = setInterval(() => {
      setPage((p) => (p + 1) % pageCount);
    }, 4500);
    return () => clearInterval(t);
  }, [pause, pageCount]);

  return (
    <section className="bg-white py-10">
      {/* heading */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="text-[18px] font-semibold tracking-wide" style={{ color: BRAND }}>
          [ Our Services ]
        </div>
        <h2 className="mt-3 text-[36px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.05] text-slate-900">
          Dry Cleaning &amp; Laundry,
          <br />
          Free Delivery
        </h2>
      </div>

      {/* ✅ wider container */}
      <div className="mx-auto max-w-[1680px] px-3 sm:px-6 lg:px-8 mt-8">
        {/* carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {pages.map((group, idx) => (
              <div key={idx} className="w-full shrink-0">
                <div
                  className="grid gap-8 lg:gap-10"
                  style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
                >
                  {group.map((it, i) => (
                    <ServiceCard key={`${idx}-${i}-${it.title}`} item={it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-10 flex items-center justify-center gap-4">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              className={`h-3 w-3 rounded-full transition ${page === i ? "" : "opacity-20"}`}
              style={{ backgroundColor: BRAND }}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
