import React from "react";

const BRAND = "#51B56C";

const Icon = ({ children }) => (
  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/0 text-[18px]" style={{ color: BRAND }}>
    {children}
  </span>
);

const Social = ({ label, children }) => (
  <a
    href="#"
    aria-label={label}
    className="h-[44px] w-[44px] rounded-full bg-white flex items-center justify-center text-slate-900 transition hover:opacity-90"
  >
    {children}
  </a>
);

const Bubble = ({ className }) => (
  <div
    className={`pointer-events-none absolute rounded-full bg-white/10 blur-[0.2px] ${className}`}
    style={{
      boxShadow: "inset 0 10px 16px rgba(255,255,255,.18), inset 0 -10px 16px rgba(0,0,0,.25)",
    }}
  />
);

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#3b3b3b]">
      {/* subtle bubbles like screenshot */}
      <Bubble className="left-[120px] top-[90px] h-[90px] w-[90px] opacity-70" />
      <Bubble className="left-[60px] bottom-[70px] h-[46px] w-[46px] opacity-60" />
      <Bubble className="left-[380px] top-[180px] h-[38px] w-[38px] opacity-50" />
      <Bubble className="right-[520px] bottom-[40px] h-[54px] w-[54px] opacity-50" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* 1) About */}
          <div>
            <div className="flex items-center gap-3">
              {/* simple logo mark */}
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/0"
                style={{ color: BRAND }}
              >
                <svg width="34" height="34" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 6c6 0 11 5 11 11 0 9-11 25-11 25S13 26 13 17c0-6 5-11 11-11Z"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.9"
                  />
                  <path
                    d="M28 17c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2.8"
                  />
                  <path
                    d="M36 26c3 1 5 3 5 5 0 3-7.6 6-17 6S7 34 7 31c0-2 2-4 5-5"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    opacity="0.9"
                  />
                </svg>
              </span>

              <div className="text-[34px] font-extrabold leading-none">
                <span style={{ color: BRAND }}>Pro</span>
                <span className="text-white">Laundry</span>
              </div>
            </div>

            <p className="mt-5 text-[18px] leading-[1.9] text-white/70 max-w-[430px]">
              We are professionals in the laundry and dry cleaning business, which means we
              always stay up to date on the latest technologies and cleaning methods.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Social label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 7.2c-.6.3-1.3.4-2 .5.7-.4 1.2-1.1 1.5-1.9-.7.4-1.4.7-2.2.8A3.5 3.5 0 0 0 12.4 8c0 .3 0 .6.1.9-3-.2-5.7-1.7-7.5-4.1-.3.6-.5 1.2-.5 2 0 1.2.6 2.3 1.6 2.9-.5 0-1-.2-1.5-.4v.1c0 1.7 1.2 3.2 2.9 3.5-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.7 2.8A7 7 0 0 1 3 18.7 9.9 9.9 0 0 0 8.4 20c6.6 0 10.2-5.6 10.2-10.4v-.5c.7-.5 1.3-1.1 1.8-1.9Z"
                    fill="currentColor"
                  />
                </svg>
              </Social>

              <Social label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.5 21v-7h2.3l.4-2.7h-2.7V9.6c0-.8.2-1.3 1.3-1.3h1.5V6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v1.2H7.4V14h2.2v7h3.9Z"
                    fill="currentColor"
                  />
                </svg>
              </Social>

              <Social label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.5 6.8A2.1 2.1 0 1 1 6.5 2.6a2.1 2.1 0 0 1 0 4.2ZM4.6 21h3.8V9H4.6v12ZM10 9h3.6v1.6h.1c.5-1 1.8-2 3.6-2 3.8 0 4.5 2.5 4.5 5.7V21H18v-5.2c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H10V9Z"
                    fill="currentColor"
                  />
                </svg>
              </Social>

              <Social label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2ZM17.7 6.3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </Social>
            </div>
          </div>

          {/* 2) Contacts */}
          <div>
            <h3 className="text-white text-[26px] font-extrabold">Contacts</h3>

            <ul className="mt-6 space-y-4 text-[18px] text-white/80">
              <li className="flex items-start gap-3">
                <Icon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    />
                  </svg>
                </Icon>
                <span>56/7 north street, Surandai, Tenkasi Dt</span>
              </li>

              <li className="flex items-start gap-3">
                <Icon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    />
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                <span>Mon-Fri: 7:00am-7:00pm</span>
              </li>

              <li className="flex items-start gap-3">
                <Icon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 6h16v12H4V6Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                <span>prolaundry@gmail.com</span>
              </li>

              <li className="flex items-start gap-3">
                <Icon>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 16.8v3a2 2 0 0 1-2.2 2A17.8 17.8 0 0 1 3.2 6.2 2 2 0 0 1 5.2 4h3a2 2 0 0 1 2 1.7l.6 2.6a2 2 0 0 1-.6 2l-1.2 1.2a14.5 14.5 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2-.6l2.6.6a2 2 0 0 1 1.7 2Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Icon>
                <span className="text-white font-bold"> +91 9054678965</span>
              </li>
            </ul>
          </div>

          {/* 3) Services (replaces Newsletter) */}
          <div>
            <h3 className="text-white text-[26px] font-extrabold">Services</h3>

            <ul className="mt-6 space-y-3 text-[18px] text-white/80">
              {[
                "Laundry Services",
                "Dry Cleaning",
                "Ironing Service",
                "Curtains Service",
                "Blanket Service",
                "Repairs & Alterations",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND }} />
                  <a href="#" className="hover:text-white transition">
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
