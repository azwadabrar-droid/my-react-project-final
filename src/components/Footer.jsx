import { Link } from "react-router-dom";
import { asset } from "../assets.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/"><img src={asset("logo.svg")} alt="Silicon" width="122" height="44" /></Link>
          <p>
            Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus,
            eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec.
            Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.
          </p>
          <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter">Subscribe to our newsletter</label>
            <div className="subscribe__row">
              <div className="subscribe__input">
                <img src={asset("icon-envelope.png")} alt="" width="20" height="20" />
                <input id="newsletter" type="email" placeholder="Your Email" />
              </div>
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <small>2021. All rights reserved. Silicon Template</small>
        </div>

        <div className="footer__col footer__col--pages">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div className="footer__col footer__col--legal">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer__col footer__col--social">
          <a href="#">Facebook</a>
          <a href="#">Linkedin</a>
          <a href="#">Twitter</a>
          <a href="#">Instragram</a>
        </div>
        <div className="footer__col footer__col--contact">
          <span>Contact Us</span>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
