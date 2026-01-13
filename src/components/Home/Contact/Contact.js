import React, { useMemo, useState } from "react";

const BRAND = "#51B56C";
const cn = (...s) => s.filter(Boolean).join(" ");

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({});
  const [toast, setToast] = useState("");

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));
  const touch = (k) => () => setTouched((p) => ({ ...p, [k]: true }));

  const errors = useMemo(() => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  const onSubmit = (ev) => {
    ev.preventDefault();
    setTouched({ name: true, email: true, phone: true, subject: true, message: true });

    if (!canSubmit) return;

    // UI only
    setToast("Message sent successfully (UI only).");
    setTimeout(() => setToast(""), 2200);

    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setTouched({});
  };

  return (
    <section className="relative isolate bg-white py-14 lg:py-20 overflow-hidden">
      
     

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[760px]">
            {/* header */}
            <div className="text-center">
              <div
                className="text-[15px] sm:text-[16px] font-semibold tracking-[0.12em]"
                style={{ color: BRAND }}
              >
                [CONTACT US]
              </div>

              <h2 className="mt-3 text-[46px] md:text-[58px] font-extrabold text-slate-900 leading-[1.02]">
                Get in Touch
              </h2>

              <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.9] text-slate-500 max-w-[620px] mx-auto">
                Tell us what you need. We’ll respond quickly and help you schedule pickup or
                answer your questions.
              </p>
            </div>

            {/* form card */}
            <div className="mt-10 relative">
              <div
                className="absolute -inset-3 rounded-[26px] opacity-40"
                style={{
                  background:
                    "radial-gradient(60% 80% at 50% 0%, rgba(81,181,108,0.18) 0%, rgba(81,181,108,0.00) 70%)",
                }}
              />

              <div className="relative rounded-2xl border border-[#E8EEF4] bg-white shadow-[0_26px_70px_rgba(0,0,0,0.10)]">
                <div className="px-6 py-7 sm:px-10 sm:py-9">
                  {toast && (
                    <div
                      className="mb-5 rounded-xl border px-4 py-3 text-[14px] font-semibold"
                      style={{
                        borderColor: `${BRAND}33`,
                        backgroundColor: `${BRAND}12`,
                        color: "#14532d",
                      }}
                    >
                      {toast}
                    </div>
                  )}

                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field
                        label="Your Name"
                        required
                        error={touched.name ? errors.name : ""}
                      >
                        <input
                          value={form.name}
                          onChange={set("name")}
                          onBlur={touch("name")}
                          placeholder="Enter your name"
                          className={inputCls(!!(touched.name && errors.name))}
                        />
                      </Field>

                      <Field
                        label="Email"
                        required
                        error={touched.email ? errors.email : ""}
                      >
                        <input
                          value={form.email}
                          onChange={set("email")}
                          onBlur={touch("email")}
                          placeholder="you@example.com"
                          className={inputCls(!!(touched.email && errors.email))}
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Phone" required={false} error="">
                        <input
                          value={form.phone}
                          onChange={set("phone")}
                          onBlur={touch("phone")}
                          placeholder="Optional"
                          className={inputCls(false)}
                        />
                      </Field>

                      <Field label="Subject" required={false} error="">
                        <div className="relative">
                          <select
                            value={form.subject}
                            onChange={set("subject")}
                            onBlur={touch("subject")}
                            className={cn(inputCls(false), "appearance-none pr-12")}
                          >
                            <option value="">Select subject (optional)</option>
                            <option value="Pricing">Pricing</option>
                            <option value="Pickup & Delivery">Pickup & Delivery</option>
                            <option value="Services">Services</option>
                            <option value="Support">Support</option>
                            <option value="Other">Other</option>
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
                      </Field>
                    </div>

                    <Field
                      label="Message"
                      required
                      error={touched.message ? errors.message : ""}
                    >
                      <textarea
                        value={form.message}
                        onChange={set("message")}
                        onBlur={touch("message")}
                        placeholder="Write your message..."
                        className={cn(
                          inputCls(!!(touched.message && errors.message)),
                          "min-h-[140px] py-3"
                        )}
                      />
                    </Field>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                      <div className="text-[14px] text-slate-500 leading-relaxed">
                        We usually respond within{" "}
                        <span className="font-semibold text-slate-700">2–6 hours</span>.
                      </div>

                      <button
                        type="submit"
                        disabled={!canSubmit}
                        className="inline-flex items-center justify-center h-[50px] px-10 text-[16px] font-semibold text-white"
                        style={{ backgroundColor: BRAND }}
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /form card */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, error, children }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <label className="text-[14px] font-semibold text-slate-800">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {error ? <div className="text-[12px] font-semibold text-red-600">{error}</div> : null}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function inputCls(hasError) {
  return cn(
    "h-[52px] w-full rounded-[2px] border bg-white px-5 text-[16px] text-slate-700 outline-none",
    "placeholder:text-slate-400",
    "focus:border-[#CFE3D8]",
    hasError ? "border-red-300 focus:border-red-300" : "border-[#E2E8F0]"
  );
}
