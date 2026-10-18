import { createContext, useContext, useEffect, useState } from "react";

const ScaleCtx = createContext({ s: 1, flow: false });
const FLOW_BELOW = 1024;

/**
 * Pages are the exact 1920px Figma canvas on large screens (scaled to fit above 1024px).
 * Below 1024px the same content reflows into a single readable column.
 */
export function Stage({ height, children }) {
  const read = () => {
    const w = document.documentElement.clientWidth;
    return { flow: w < FLOW_BELOW, s: Math.min(1, w / 1920) };
  };
  const [m, setM] = useState(read);
  useEffect(() => {
    const fit = () => setM(read());
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <ScaleCtx.Provider value={m}>
      <main className={`stage-wrap${m.flow ? " stage-wrap--flow" : ""}`} style={m.flow ? undefined : { height: height * m.s }}>
        <div className={`stage${m.flow ? " stage--flow" : ""}`} style={m.flow ? undefined : { height, "--s": m.s, transform: `scale(${m.s})` }}>
          {children}
        </div>
      </main>
    </ScaleCtx.Provider>
  );
}

/** Full-width coloured band behind the canvas (keeps going past 1920px). */
export function Band({ top, height, color, image, style }) {
  const { s, flow } = useContext(ScaleCtx);
  if (flow) return null;
  return (
    <div
      className={`band${image ? " band--img" : ""}`}
      style={{
        top: top * s, height: height * s, backgroundColor: color,
        ...(image ? { backgroundImage: `url(${image})`, backgroundSize: `${1920 * s}px ${height * s}px`, backgroundPosition: "center top", backgroundRepeat: "no-repeat" } : {}),
        ...style,
      }}
    />
  );
}

/** Absolutely positioned child using Figma page coordinates (x, y from the 1920px canvas). */
export function Abs({ x, y, w, h, className = "", style, children, ...rest }) {
  return (
    <div className={`abs ${className}`} style={{ left: x, top: y, width: w, height: h, ...style }} {...rest}>
      {children}
    </div>
  );
}
