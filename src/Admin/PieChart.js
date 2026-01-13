import React from "react";

function polarToCartesian(cx, cy, r, angleDeg) {
  const a = ((angleDeg - 90) * Math.PI) / 180.0;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}
function describeArc(cx, cy, r, startAngle, endAngle) {
  const s = polarToCartesian(cx, cy, r, endAngle);
  const e = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return ["M", s.x, s.y, "A", r, r, 0, largeArcFlag, 0, e.x, e.y].join(" ");
}

export default function PieChart({ data, size = 260, donut = false }) {
  const radius = size / 2;
  const cx = radius;
  const cy = radius;
  const ring = 18;

  // screenshot style-ish colors
  const colors = ["#ff5f7a", "#2aa3ff", "#b05cff", "#ff9a3d", "#50c7c7", "#8d6bff"];

  const total = data.reduce((a, b) => a + b.value, 0) || 1;
  let start = 0;

  const slices = data.map((d, i) => {
    const ang = (d.value / total) * 360;
    const end = start + ang;
    const path = describeArc(cx, cy, radius - ring, start, end);
    const stroke = colors[i % colors.length];
    start = end;
    return { ...d, path, stroke };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={radius - ring} fill="none" stroke="#e5e7eb" strokeWidth={ring} />
      {slices.map((s, idx) => (
        <path key={idx} d={s.path} fill="none" stroke={s.stroke} strokeWidth={ring} />
      ))}
      {donut && <circle cx={cx} cy={cy} r={radius - ring - 40} fill="white" />}
    </svg>
  );
}
