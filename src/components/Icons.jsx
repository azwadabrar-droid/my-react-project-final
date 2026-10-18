// Small UI icons drawn as inline SVG (colour follows `currentColor`).
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export const Chevron = ({ dir = "down", size = 16, style, ...p }) => {
  const rot = { down: 0, up: 180, left: 90, right: -90 }[dir];
  return <img src="/assets/chevron-nav.svg" width={size} height={size} alt="" style={{ ...style, transform: `rotate(${rot}deg)` }} {...p} />;
};

export const Star = ({ size = 16 }) => <img src="/assets/star.svg" width={size} height={size} alt="" />;

export const Bookmark = ({ size = 18 }) => <img src="/assets/bookmark.svg" width={size} height={size} alt="" />;

export const Quote = ({ size = 24 }) => <img src="/assets/icon-quote.svg" width={size} height={size} alt="" />;

export const Play = ({ size = 52 }) => (
  <span className="play-btn" style={{ width: size, height: size }} aria-hidden="true">
    <svg width="10" height="12" viewBox="0 0 10 12"><path d="M1 1l8 5-8 5V1z" fill="#33354d" /></svg>
  </span>
);

/* ---- extra UI icons (feather/lucide-style outlines) ---- */
const S = (children, size = 20, extra = {}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...base} {...extra}>{children}</svg>
);
export const HomeIcon = ({ size = 18 }) => S(<path d="M3 10.5 12 3l9 7.5V21H3z" />, size);
export const ChevronsRight = ({ size = 16 }) => S(<><path d="M6 17l5-5-5-5" /><path d="M13 17l5-5-5-5" /></>, size);
export const Phone = ({ size = 20 }) => S(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />, size);
export const Mail = ({ size = 20 }) => S(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>, size);
export const MapPin = ({ size = 20 }) => S(<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>, size);
export const CheckSquare = ({ size = 24 }) => S(<><rect x="3" y="3" width="18" height="18" rx="3" /><path className="tick" d="M8 12.5l3 3 5-6" /></>, size);
export const Facebook = ({ size = 20 }) => S(<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />, size);
export const Twitter = ({ size = 20 }) => S(<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />, size);
export const Linkedin = ({ size = 20 }) => S(<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>, size);
export const Instagram = ({ size = 20 }) => S(<><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z" /><path d="M17.5 6.5h.01" /></>, size);
export const ArrowCircle = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="9" /><path d="M10.5 14h7M14.5 11l3 3-3 3" />
  </svg>
);

const P = { stroke: "#6366f1" };
export const Rocket = ({ size = 32 }) => S(<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2M12 15l-3-3a22 22 0 0 1 2-3.95A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />, size, P);
export const ThumbsUp = ({ size = 32 }) => S(<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.4-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />, size, P);
export const Users = ({ size = 32 }) => S(<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>, size, P);
export const Clock = ({ size = 32 }) => S(<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>, size, P);
export const Check = ({ size = 20 }) => S(<path d="M5 12.5l4.5 4.5L19 7.5" />, size, P);

export const Youtube = ({ size = 24 }) => S(<><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 11.8a29 29 0 0 0 .4 5.3 2.8 2.8 0 0 0 2 2c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .4-5.3 29 29 0 0 0-.5-5.4z" /><path d="M9.8 15l5.7-3.2L9.8 8.5z" /></>, size);
export const Dribbble = ({ size = 24 }) => S(<><circle cx="12" cy="12" r="10" /><path d="M8.6 2.8c4.4 6 6 9.4 8 17.7M19.1 5.1c-3.7 4.4-8.9 5.7-16.9 5.9M21.7 12.9c-3.5-.9-6.6-.8-8.9 0-2.6.9-5 2.9-7.4 6.3" /></>, size);
