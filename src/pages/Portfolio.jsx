import { useState } from "react";
import { Link } from "react-router-dom";
import { Abs, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import { Chevron } from "../components/Icons.jsx";

const tabs = ["All Works", "Web Design", "Graphic Design", "Branding", "UI / UX", "Motion Design"];

const rows = [
  [
    { w: 526, img: "portfolio-1.jpg", title: "Astronaut & Flashing Neon Lights" },
    { w: 746, img: "portfolio-2.jpg", title: "Scene of Sunglasses & Headphone on Human Head", tags: "NFT / Graphic Design / Art / Identity / Motion Design" },
  ],
  [
    { w: 746, img: "portfolio-3.jpg", title: "Plaster Antique Sculpture in a Pop Art Style" },
    { w: 526, img: "portfolio-4.jpg", title: "Big Blue Whale Shape" },
  ],
  [
    { w: 526, img: "portfolio-5.jpg", title: "3D Shape Illustration" },
    { w: 746, img: "portfolio-6.jpg", title: "Mannequin Hands Holding Phone" },
  ],
];

export default function Portfolio() {
  const [tab, setTab] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <Stage height={2532}>
      <Breadcrumb trail={[{ label: "Grid View" }]} />

      <Abs x={312} y={170} w={1296} h={52}>
        <h1 className="h-40" style={{ position: "absolute", left: 0, top: 0 }}>Grid View</h1>
        <div className="pf-tabs">
          <div className="pf-tabs__row">
            {tabs.map((t, i) => (
              <button key={t} type="button" className={`pf-tab${tab === i ? " is-active" : ""}`} onClick={() => setTab(i)}>{t}</button>
            ))}
          </div>
          <div className="pf-tabs__line"><span style={{ width: 102 }} /></div>
        </div>
      </Abs>

      <Abs x={312} y={262} className="pf-cards">
        {rows.map((row, r) => (
          <div key={r} className="pf-line">
            {row.map((c) => (
              <Link to="/blog/details" key={c.title} className="pf-card" style={{ width: c.w }}>
                <img src={`/assets/${c.img}`} alt="" style={{ width: c.w, height: 420 }} />
                <div className="pf-card__title">
                  <h3>{c.title}</h3>
                  {c.tags && <p>{c.tags}</p>}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </Abs>

      <Abs x={312} y={1926} className="pagination">
        <div className="pagination__pages">
          {[1, 2, 3, 4].map((n) => (
            <button key={n} type="button" className={`pagination__page${page === n ? " is-active" : ""}`} onClick={() => setPage(n)}>{n}</button>
          ))}
        </div>
        <button type="button" className="pagination__arrow" aria-label="Next" onClick={() => setPage((p) => Math.min(4, p + 1))}>
          <Chevron dir="right" size={18} style={{ color: "#33354d" }} />
        </button>
      </Abs>

      <Abs x={312} y={2058} w={1296} h={442} className="cta-banner">
        <span className="cta-banner__shape" />
        <img className="cta-banner__img" src="/assets/banner-image.png" alt="" />
        <div className="cta-banner__text">
          <p className="cta-banner__lead">Ready to get started?</p>
          <h2>Take Your <span>Business</span> to the Next Level</h2>
          <Link to="/contact" className="btn btn--primary btn--brand-shadow">Work with us</Link>
        </div>
      </Abs>
    </Stage>
  );
}
