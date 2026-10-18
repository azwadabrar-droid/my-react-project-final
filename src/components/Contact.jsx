import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="section contact-wrap" id="contact">
      <div className="container">
        <div className="contact">
          <div className="contact__content">
            <p className="contact__lead">Want to work with us? Let’s talk</p>
            <a href="mailto:example@gmail.com" className="contact__email">example@gmail.com</a>
            <Link to="/contact" className="btn btn--white btn--shadow">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
