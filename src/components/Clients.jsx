import { asset } from "../assets.js";
import { Chevron } from "./Icons.jsx";

const logos = [
  { src: "client-1.png", w: 160, h: 64 },
  { src: "client-2.svg", w: 140, h: 30 },
  { src: "client-3.svg", w: 152, h: 19 },
  { src: "client-4.svg", w: 134, h: 34 },
  { src: "client-5.svg", w: 124, h: 32 },
  { src: "client-6.svg", w: 132, h: 35 },
];

export default function Clients() {
  return (
    <section className="section clients">
      <div className="container">
        <div className="clients__head">
          <h2 className="section-title section-title--sm">Trusted by Awesome Clients</h2>
          <div className="clients__btns">
            <button type="button" className="round-btn" aria-label="Previous">
              <Chevron dir="left" size={20} style={{ color: "#33354d" }} />
            </button>
            <button type="button" className="round-btn" aria-label="Next">
              <Chevron dir="right" size={20} style={{ color: "#33354d" }} />
            </button>
          </div>
        </div>

        <div className="clients__logos">
          {logos.map((l) => (
            <div key={l.src} className="clients__logo">
              <img src={asset(l.src)} alt="" style={{ width: l.w, height: l.h }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
