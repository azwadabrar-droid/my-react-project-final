import { useState } from "react";
import { Link } from "react-router-dom";
import { Abs, Band, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import {
  ArrowCircle, CheckSquare, Chevron, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Quote, Twitter,
} from "../components/Icons.jsx";

const services = [
  { x: 312, y: 262, title: "Custom Software Development", icon: "service-cms.svg", text: "Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas." },
  { x: 980, y: 262, title: "Software Integration", icon: "launch.png", text: "Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam." },
  { x: 312, y: 562, title: "Mobile App Development", icon: "service-mobile.svg", text: "Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi." },
  { x: 980, y: 562, title: "Business Analytics", icon: "service-analytics.svg", text: "Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed." },
  { x: 312, y: 862, title: "Software Testing", icon: "service-testing.svg", text: "Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies." },
  { x: 980, y: 862, title: "Project Management", icon: "service-pm.svg", text: "Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo." },
];

const why = [
  { icon: "why-1.svg", text: "Build a functional prototype in 24 hrs" },
  { icon: "why-2.svg", text: "Create an MVP within two weeks" },
  { icon: "why-3.svg", text: "Kickstart software development" },
  { icon: "why-4.svg", text: "Get 24/7 tech & business support" },
];

export function ServiceCard({ x, y, title, icon, text }) {
  return (
    <Abs x={x} y={y} w={628} h={260}>
      <div className="svc-card">
        <div className="svc-card__title">
          <Link to="/services/details" className="svc-card__link"><h3>{title}</h3><ArrowCircle size={28} /></Link>
        </div>
        <p>{text}</p>
      </div>
      <div className="svc-card__icon">
        <img src={`/assets/${icon}`} alt="" />
      </div>
    </Abs>
  );
}

export default function Services() {
  const [agree, setAgree] = useState(true);

  return (
    <Stage height={3558 - 497}>
      <Band top={0} height={1460} color="var(--g100)" />
      <Breadcrumb trail={[{ label: "Services Page" }]} />
      <Abs x={312} y={170} className="h-40">Services Page</Abs>

      {services.map((s) => <ServiceCard key={s.title} {...s} />)}

      {/* Testimonial */}
      <Abs x={312} y={1234} className="h-40">What Our Clients Say</Abs>
      <img className="abs" style={{ left: 312, top: 1326, width: 416, height: 360, objectFit: "cover", borderRadius: 0, transform: "scaleX(-1)" }} src="/assets/testimonial-author.jpg" alt="Ralph Edwards" />
      <Abs x={800} y={1326} w={808} h={352}>
        <div className="review review--services">
          <p>Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.</p>
          <div className="review__client">
            <div>
              <p className="author__name">Ralph Edwards</p>
              <p className="author__role">Head of Marketing</p>
            </div>
            <span className="author__divider" />
            <img src="/assets/client-1.png" alt="" width="160" height="64" />
          </div>
        </div>
        <span className="testimonial__quote"><Quote size={24} /></span>
      </Abs>
      <Abs x={312} y={1726} className="slider-btns">
        <button type="button" className="round-btn" aria-label="Previous"><Chevron dir="left" size={20} style={{ color: "#33354d" }} /></button>
        <button type="button" className="round-btn" aria-label="Next"><Chevron dir="right" size={20} style={{ color: "#33354d" }} /></button>
      </Abs>

      {/* Why choose us */}
      <Abs x={532} y={1834} w={856} className="h-40 center-text">Why Choose Us?</Abs>
      <Abs x={532} y={1910} w={856} className="lead center-text">We personalize how we work to fit your project needs. Our approach helps augment innovation.</Abs>
      <Abs x={324} y={1979} className="why">
        {why.map((w, i) => (
          <div key={w.text} className="why__group">
            {i > 0 && <span className="why__divider" />}
            <div className="why__item">
              <span className="why__icon"><img src={`/assets/${w.icon}`} alt="" /></span>
              <p>{w.text}</p>
            </div>
          </div>
        ))}
      </Abs>

      {/* Contact form */}
      <Abs x={312} y={2235} w={1296} h={802} className="get-in-touch">
        <div className="git__title">
          <h2>Get in Touch</h2>
          <p>Have a project in mind? To request a quote contact us directly or fill out the form and let us know how we can help.</p>
        </div>
        <div className="git__info">
          <h3>Contact Info</h3>
          <ul>
            <li><Phone size={20} /> (406) 555-0120</li>
            <li><Mail size={20} /> example@gmail.com</li>
            <li className="git__loc"><MapPin size={20} /> 2464 Royal Ln. Mesa,New Jersey 45463</li>
          </ul>
        </div>
        <div className="git__socials">
          <a href="#" aria-label="Facebook"><Facebook /></a>
          <a href="#" aria-label="Twitter" className="is-twitter"><Twitter /></a>
          <a href="#" aria-label="Linkedin"><Linkedin /></a>
          <a href="#" aria-label="Instagram"><Instagram /></a>
        </div>

        <form className="request" onSubmit={(e) => e.preventDefault()}>
          <div className="request__fields">
            <div className="field">
              <label htmlFor="s-service">Sevice</label>
              <div className="select">
                <select id="s-service" defaultValue="">
                  <option value="" disabled>Choose the service you are interested in</option>
                  {services.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
                <Chevron dir="down" size={24} style={{ color: "#565973" }} />
              </div>
            </div>
            <div className="field"><label htmlFor="s-name">Full name</label><input id="s-name" type="text" /></div>
            <div className="field"><label htmlFor="s-email">Email address</label><input id="s-email" type="email" /></div>
            <div className="field"><label htmlFor="s-msg">Message</label><textarea id="s-msg" placeholder="Tell us about your project" style={{ height: 104 }} /></div>
          </div>
          <label className="check">
            <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span className="check__box"><CheckSquare size={24} /></span>
            <span>I agree to the <a href="#">Terms</a> &amp; <a href="#">Conditions</a>.</span>
          </label>
          <button type="submit" className="btn btn--primary btn--brand-shadow">Send request</button>
        </form>
      </Abs>
    </Stage>
  );
}
