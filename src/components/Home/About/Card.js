import React from "react";

const BRAND = "#51B56C";

const items = [
  {
    title: "Save Time & Money",
    desc: `No more wasted time driving to
the laundromats, we pickup and
deliver for free!`,
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        {/* clock outer */}
        <circle cx="24" cy="24" r="16" stroke={BRAND} strokeWidth="2.6" />
        {/* clock hands */}
        <path
          d="M24 16v9l6 3"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* little bells */}
        <path
          d="M16 10c-2 1-3 2-4 4"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M32 10c2 1 3 2 4 4"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* dollar coin */}
        <circle cx="15.5" cy="28.5" r="5" stroke={BRAND} strokeWidth="2.6" />
        <path
          d="M15.5 25.8v5.4M13.9 27.2c.5-.8 3.2-.8 3.2.2 0 1.1-3.2.8-3.2 2 0 1.1 2.7 1.2 3.2.3"
          stroke={BRAND}
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Pay Online in Seconds",
    desc: `Manage your Press account and
billing online from your
smartphone or computer.`,
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        {/* card */}
        <rect
          x="12"
          y="14"
          width="24"
          height="18"
          rx="3"
          stroke={BRAND}
          strokeWidth="2.6"
        />
        <path
          d="M12 20h24"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M16 27h10"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* phone */}
        <rect
          x="18"
          y="9"
          width="12"
          height="24"
          rx="3"
          stroke={BRAND}
          strokeWidth="2.6"
          opacity="0.25"
        />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly",
    desc: `We use safe and clean perc-free
solvents, so you, and the Earth,
can look good.`,
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none">
        <path
          d="M35 13c-10 2-17 9-18 21 12-1 19-8 21-18 0-1.6-1.4-3-3-3Z"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M17 33c3-7 9-13 18-18"
          stroke={BRAND}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Feature = ({ item }) => {
  return (
    <div className="flex gap-6 px-10 py-10">
      <div className="mt-1">{item.icon}</div>
      <div>
        <h3 className="text-[22px] font-extrabold text-slate-900">
          {item.title}
        </h3>
        <p className="mt-4 whitespace-pre-line text-[16px] leading-[1.95] text-slate-500">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

export default function Card() {
  return (
    <section className="relative overflow-hidden bg-white py-10">
      {/* soft background shapes like screenshot */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-64 top-10 h-[520px] w-[520px] rounded-full bg-emerald-50/50" />
        <div className="absolute -right-72 -top-40 h-[620px] w-[620px] rotate-[18deg] bg-slate-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* main white panel */}
        <div className="bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:border-r md:border-slate-200">
              <Feature item={items[0]} />
            </div>

            <div className="md:border-r md:border-slate-200">
              <Feature item={items[1]} />
            </div>

            <div>
              <Feature item={items[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
