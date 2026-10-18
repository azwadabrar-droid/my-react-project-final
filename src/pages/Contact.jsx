import { Abs, Band, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";

export default function Contact() {
  return (
    <Stage height={664}>
      <Band top={0} height={664} color="#f8f5fe" image="/assets/inner-hero-bg.jpg" />
      <Breadcrumb trail={[{ label: "Contact" }]} />

      <Abs x={312} y={218} w={416} className="h-28">Want to work with us?</Abs>
      <Abs x={312} y={262} w={416} className="h-display gradient-text">Let’s talk!</Abs>
      <Abs x={312} y={446} className="contact-link"><a href="mailto:email@example.com">email@example.com</a></Abs>
      <Abs x={312} y={501} className="contact-phone">+1 406 555-0120</Abs>

      <form className="abs" style={{ left: 972, top: 218, width: 636, height: 320 }} onSubmit={(e) => e.preventDefault()}>
        <div className="field abs" style={{ left: 0, top: 0, width: 306 }}>
          <label htmlFor="c-name">Full name</label>
          <input id="c-name" type="text" />
        </div>
        <div className="field abs" style={{ left: 330, top: 0, width: 306 }}>
          <label htmlFor="c-email">Email</label>
          <input id="c-email" type="email" />
        </div>
        <div className="field abs" style={{ left: 0, top: 106, width: 636 }}>
          <label htmlFor="c-msg">Message</label>
          <textarea id="c-msg" style={{ height: 90 }} />
        </div>
        <button type="submit" className="btn btn--primary btn--brand-shadow abs" style={{ left: 0, top: 266 }}>Contact Us</button>
      </form>
    </Stage>
  );
}
