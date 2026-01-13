// Prices.js
import React, { useEffect, useMemo, useState } from "react";

const BRAND = "#51B56C";

/* -------------------- Responsive per-view -------------------- */
const usePerView = () => {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1400);

  useEffect(() => {
    const on = () => setW(window.innerWidth);
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, []);

  if (w >= 1024) return 4;
  if (w >= 768) return 2;
  return 1;
};

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

/* -------------------- Perfect line SVG icons (uniform) -------------------- */
const IconWrap = ({ children }) => (
  <div className="flex items-center justify-center">
    <div className="h-[78px] w-[78px] flex items-center justify-center">{children}</div>
  </div>
);

const Line = ({ children }) => (
  <svg
    viewBox="0 0 64 64"
    width="56"
    height="56"
    fill="none"
    stroke="#2B2B2B"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const IconShirt = () => (
  <IconWrap>
    <Line>
      <path d="M22 18l-8 6 6 7v23h24V31l6-7-8-6-7 6h-6l-7-6z" />
      <path d="M29 24c1.1 1.9 2.2 2.8 3 2.8s1.9-.9 3-2.8" />
      <path d="M30 34h4" />
      <path d="M32 28v18" opacity="0.35" />
    </Line>
  </IconWrap>
);

const IconDress = () => (
  <IconWrap>
    <Line>
      <path d="M32 14c-4 0-6 3-6 7v4l-6 6 6 4-4 17h20l-4-17 6-4-6-6v-4c0-4-2-7-6-7z" />
      <path d="M26 28h12" />
    </Line>
  </IconWrap>
);

const IconDryClean = () => (
  <IconWrap>
    <Line>
      <path d="M32 14c3.5 0 5.7 2 5.7 4.4 0 1.7-1.1 3-2.7 4.2l-3 2.2" />
      <path d="M12 32l20-12 20 12" />
      <path d="M18 32v18h28V32" />
      <path d="M28 30h8" />
    </Line>
  </IconWrap>
);

const IconBed = () => (
  <IconWrap>
    <Line>
      <rect x="16" y="24" width="32" height="18" rx="3" />
      <path d="M16 32h32" />
      <path d="M22 30h10" />
      <path d="M18 50v-8M46 50v-8" />
    </Line>
  </IconWrap>
);

/* slide-2 icons (your screenshot) */
const IconBlanket = () => (
  <IconWrap>
    <Line>
      <path d="M20 30c0-6 6-10 12-10s12 4 12 10v10c0 6-6 10-12 10s-12-4-12-10V30z" />
      <path d="M24 34h16" />
      <path d="M24 40h10" />
    </Line>
  </IconWrap>
);

const IconCurtain = () => (
  <IconWrap>
    <Line>
      <path d="M18 18h28" />
      <path d="M22 18v32" />
      <path d="M42 18v32" />
      <path d="M22 24c4 3 8 3 12 0s8-3 8-3" />
      <path d="M22 30c4 3 8 3 12 0s8-3 8-3" />
      <path d="M22 50h20" />
      <circle cx="22" cy="18" r="1.4" />
      <circle cx="30" cy="18" r="1.4" />
      <circle cx="38" cy="18" r="1.4" />
      <circle cx="46" cy="18" r="1.4" />
    </Line>
  </IconWrap>
);

const IconIron = () => (
  <IconWrap>
    <Line>
      <path d="M18 36h28c0 9-6 14-14 14H18V36z" />
      <path d="M20 36l10-13h13c4 0 6 2 6 6v7" />
      <path d="M31 28h8" />
      <path d="M22 44h8" />
    </Line>
  </IconWrap>
);

const IconNeedle = () => (
  <IconWrap>
    <Line>
      <path d="M44 18c-6 6-14 14-20 20l6 6c6-6 14-14 20-20" />
      <path d="M24 44l-8 8" />
      <path d="M18 46c-3-3-4-6-4-10 0-8 4-14 10-18" />
      <path d="M38 26l-6 6" />
    </Line>
  </IconWrap>
);

/* -------------------- Card (smaller) -------------------- */
const PriceCard = ({ item }) => {
  return (
    <div className="relative">
      <div
        className="bg-white text-center px-6 pt-9 pb-11"
        style={{ boxShadow: "0 18px 45px rgba(15, 23, 42, 0.07)" }}
      >
        {item.icon}

        <h3 className="mt-6 text-[20px] font-extrabold text-slate-800">
          {item.title}
        </h3>

        <p className="mt-1 text-[15px] text-slate-400">{item.sub}</p>

        <div className="mt-7 text-[16px] font-semibold text-slate-700">
          <span className="mr-2">From</span>
          <span className="text-[32px] font-extrabold" style={{ color: BRAND }}>
            Rs.{item.price}
          </span>
        </div>
      </div>

      {/* bottom + circle */}
      <button
        type="button"
        className="absolute left-1/2 -bottom-7 -translate-x-1/2 h-[56px] w-[56px] rounded-full bg-white flex items-center justify-center text-[22px] text-slate-500"
        style={{ boxShadow: "0 16px 34px rgba(15, 23, 42, 0.10)" }}
        aria-label="Open"
      >
        +
      </button>
    </div>
  );
};

/* -------------------- Main -------------------- */
export default function Prices() {
  const items = useMemo(
    () => [
      { title: "Shirts Service", sub: "Washed and Pressed", price: "20", icon: <IconShirt /> },
      { title: "Day Dress Service", sub: "Dry Clean", price: "30", icon: <IconDress /> },
      { title: "Dry Cleaning", sub: "Wash, Dry and Fold", price: "100", icon: <IconDryClean /> },
      { title: "Bedding", sub: "Bed Set (Wash and Press)", price: "200", icon: <IconBed /> },

      { title: "Blanket Service", sub: "Washed and Pressed", price: "100", icon: <IconBlanket /> },
      { title: "Curtains Service", sub: "Washed and Pressed", price: "200", icon: <IconCurtain /> },
      { title: "Ironing Service", sub: "Iron and Fold", price: "50", icon: <IconIron /> },
      { title: "Repairs & Alterations", sub: "Simple Sewing", price: "40", icon: <IconNeedle /> },
    ],
    []
  );

  const perView = usePerView();
  const pages = useMemo(() => chunk(items, perView), [items, perView]);
  const pageCount = pages.length;

  const [page, setPage] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => setPage(0), [perView]);

  // auto slide
  useEffect(() => {
    if (pause) return;
    const t = setInterval(() => setPage((p) => (p + 1) % pageCount), 6500);
    return () => clearInterval(t);
  }, [pause, pageCount]);

  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-[#F4F8F5]">
      {/* soft background curves */}
      <div className="pointer-events-none absolute -left-[360px] top-[120px] h-[820px] w-[820px] rounded-full bg-[#EAF1EC] opacity-70" />
      <div className="pointer-events-none absolute -right-[320px] -top-[260px] h-[760px] w-[760px] rounded-full bg-[#EAF1EC] opacity-70" />
      <div className="pointer-events-none absolute -right-[260px] bottom-[-340px] h-[740px] w-[740px] rounded-full bg-[#EAF1EC] opacity-55" />

      {/* heading */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
        <div className="text-[16px] font-semibold tracking-[0.16em]" style={{ color: BRAND }}>
          [Affordable Prices]
        </div>

        <h2 className="mt-4 text-[36px] sm:text-[46px] lg:text-[54px] font-extrabold text-slate-800 leading-[1.1]">
          Our Dry Cleaning &amp; Laundry Prices
        </h2>

        <p className="mx-auto mt-6 max-w-[720px] text-[16px] sm:text-[17px] leading-[1.9] text-slate-500">
          Our prices are simple and affordable which are easy on pocket
          <br className="hidden sm:block" />
          in comparison with the high street prices
        </p>
      </div>

      {/* carousel */}
      <div
        className="relative mx-auto mt-14 max-w-[1500px] px-4 sm:px-4 lg:px-10 pb-10"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        <div className="relative overflow-hidden">
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
                    <PriceCard key={`${idx}-${i}-${it.title}`} item={it} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* dots */}
        <div className="mt-14 flex items-center justify-center gap-4">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`h-3 w-3 rounded-full transition ${page === i ? "" : "opacity-25"}`}
              style={{ backgroundColor: BRAND }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
