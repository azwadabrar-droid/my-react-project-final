import { Link } from "react-router-dom";
import { Chevron, Play } from "./Icons.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__title">
          <div className="hero__heading">
            <div className="hero__showreel">
              <Play size={52} />
              <span>Digital Agency Promo</span>
            </div>
            <h1>
              We <span className="gradient-text">Transform</span> Your Ideas into Reality
            </h1>
          </div>
          <div className="hero__cta">
            <Link to="/contact" className="btn btn--primary btn--brand-shadow">Work with us</Link>
            <p>
              Silicon is a leading full-service digital agency based in New York. We make mobile
              apps,websites &amp; brands, that people appreciate all around the world.
            </p>
          </div>
        </div>

        <img className="hero__sphere" src="/assets/hero-gfx.svg" alt="" />

        <a href="#features" className="hero__more">
          <span className="round-btn round-btn--lg"><Chevron dir="down" size={24} style={{ color: "#0b0f19" }} /></span>
          <span>Discover more</span>
        </a>
      </div>
    </section>
  );
}
