import { useState } from "react";
import { Link } from "react-router-dom";
import { Abs, Band, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import { Chevron, Dribbble, Facebook, Instagram, Linkedin, Play, Quote, Star, Twitter, Youtube } from "../components/Icons.jsx";

const features = [
  { icon: "icon-idea.png", title: "Creative Solutions", text: "Sed morbi nulla pulvinar lectus tempor vel euismod accumsan." },
  { icon: "icon-award.png", title: "Award Winning", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet." },
  { icon: "icon-team.png", title: "Team of Professionals", text: "Nam venenatis urna aenean quis feugiat et senectus turpis." },
];

const awards = [
  { x: 868, label: "4x mobile of the day", src: "award-webby.png" },
  { x: 1064, label: "1x Kudos", src: "award-cssda.png" },
  { x: 1260, label: "3x website of the day", src: "award-awwwards.svg" },
  { x: 1456, label: "2x best website", src: "award-fwa.svg" },
];

const team = [
  ["Jenny Wilson", "Founder & CEO", "team-1.jpg"], ["Ralph Edwards", "Co-Founder", "team-2.jpg"],
  ["Cameron Williamson", "Strategic Advisor", "team-3.jpg"], ["Jerome Bell", "Marketing Specialist", "team-4.jpg"],
  ["Marvin McKinney", "Product Manager"], ["Esther Howard", "VP of Strategy"],
  ["Darrell Steward", "Senior Project Manager"], ["Jane Cooper", "Principal Consultant"],
];

const socials = [
  { name: "Facebook", handle: "silicon", Icon: Facebook, hover: "#1877f2" },
  { name: "Instagram", handle: "@silicon", Icon: Instagram, hover: "#e1306c" },
  { name: "Twitter", handle: "@silicon", Icon: Twitter, hover: "#1ca1f2" },
  { name: "Linkedin", handle: "Silicon Inc.", Icon: Linkedin, hover: "#0a66c2" },
  { name: "YouTube", handle: "Silicon", Icon: Youtube, hover: "#ff0000" },
  { name: "Dribbble", handle: "Silicon", Icon: Dribbble, hover: "#ea4c89" },
];

export default function About() {
  const [slide, setSlide] = useState(0);

  return (
    <Stage height={5202 - 497}>
      <Band top={0} height={841} color="#f8f5fe" image="/assets/about-hero-bg.jpg" />
      <Breadcrumb trail={[{ label: "About v.1" }]} />

      <Abs x={312} y={210} w={526} className="about-title">
        <h1>About Silicon</h1>
        <p>We are a dedicated team of passionate product managers, full stack developers, UX/UI designers, QA engineers and marketing experts helping businesses of every size — from new startups to public companies — launch their projects using our software.</p>
      </Abs>
      <Abs x={315} y={486} className="reviewed">
        <span>REVIEWED ON</span>
        <b>Clutch</b>
      </Abs>
      <Abs x={417} y={488} className="rating-box">
        <div className="rating">{[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} />)}</div>
        <p>49 reviews</p>
      </Abs>
      <Abs x={312} y={597} w={526} className="facts">
        <div><strong>2,480</strong><p><b>Remote</b> Sales Experts</p></div>
        <div><strong>1,200</strong><p><b>Requests</b><br />per Week</p></div>
        <div><strong>760</strong><p><b>New Clients</b><br />per Month</p></div>
      </Abs>

      {/* Features */}
      <Abs x={312} y={1020} className="about-features">
        {features.map((f, i) => (
          <div key={f.title} className="about-features__group">
            {i > 0 && <span className="about-features__divider" />}
            <div className="feature">
              <img src={`/assets/${f.icon}`} alt="" width="48" height="48" />
              <div className="feature__text"><h3>{f.title}</h3><p>{f.text}</p></div>
            </div>
          </div>
        ))}
      </Abs>

      {/* Video */}
      <Abs x={312} y={1302} w={1296} h={600} className="about-video">
        <img src="/assets/about-video.jpg" alt="" />
        <span className="about-video__overlay" />
        <button type="button" className="about-video__play" aria-label="Play video"><Play size={72} /></button>
      </Abs>

      {/* Awards */}
      <Abs x={324} y={2014} w={410} className="h-32">Award-winning designs featured by</Abs>
      <Abs x={868} y={2014} className="about-awards">
        {awards.map((a) => (
          <div key={a.label} className="award">
            <div className="award__mark"><img src={`/assets/${a.src}`} alt="" width="100" height="48" /></div>
            <p>{a.label}</p>
          </div>
        ))}
      </Abs>

      {/* Testimonials */}
      <Abs x={312} y={2212} w={526} h={441} className="about-testi__title"><h2>What Our Clients Say About Silicon Studio</h2></Abs>
      <Abs x={862} y={2212} w={746} h={441} className="about-testi__card">
        <span className="testimonial__quote" style={{ left: 48, top: 48 }}><Quote size={24} /></span>
        <div className="slider-btns" style={{ position: "absolute", right: 48, top: 48 }}>
          <button type="button" className="round-btn" aria-label="Previous" onClick={() => setSlide((s) => Math.max(0, s - 1))}><Chevron dir="left" size={20} style={{ color: "#33354d" }} /></button>
          <button type="button" className="round-btn" aria-label="Next" onClick={() => setSlide((s) => Math.min(2, s + 1))}><Chevron dir="right" size={20} style={{ color: "#33354d" }} /></button>
        </div>
        <p className="about-testi__text">Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
        <div className="about-testi__author">
          <img src="/assets/avatar-annette.png" alt="" width="60" height="60" />
          <div><p className="author__name" style={{ fontSize: 16, fontWeight: 700 }}>Annette Black</p><p className="author__role" style={{ marginTop: 4 }}>QA Engineer in Company Name</p></div>
          <div className="about-testi__socials"><a href="#"><Facebook size={18} /></a><a href="#"><Twitter size={18} /></a><a href="#"><Instagram size={18} /></a></div>
        </div>
        <div className="dots">{[0, 1, 2].map((i) => <span key={i} className={slide === i ? "is-on" : ""} />)}</div>
      </Abs>

      {/* Team */}
      <Abs x={560} y={2765} w={800} className="h-40 center-text">Our Leadership</Abs>
      <Abs x={312} y={2857} className="team-grid">
        {team.map(([name, role, img]) => (
          <div key={name} className="team-card">
            <div className="team-card__img">{img && <img src={`/assets/${img}`} alt="" />}</div>
            <p className="team-card__name">{name}</p>
            <p className="team-card__role">{role}</p>
          </div>
        ))}
      </Abs>

      {/* Contact banner */}
      <Abs x={312} y={3799} w={1296}>
        <div className="contact">
          <div className="contact__content">
            <p className="contact__lead">Want to work with us? Let’s talk</p>
            <a href="mailto:example@gmail.com" className="contact__email">example@gmail.com</a>
            <Link to="/contact" className="btn btn--white btn--shadow">Contact us</Link>
          </div>
        </div>
      </Abs>

      {/* Socials */}
      <Abs x={560} y={4317} w={800} className="h-32 center-text">We Have Social Networks</Abs>
      <Abs x={560} y={4383} w={800} className="lead center-text">Follow us and keep up to date with the freshest news!</Abs>
      <Abs x={312} y={4468} className="social-row">
        {socials.map(({ name, handle, Icon, hover }, i) => (
          <div key={name} className="social-row__group">
            {i > 0 && <span className="social-row__divider" />}
            <a href="#" className="social-item" style={{ "--hover": hover }}>
              <span className="social-item__btn"><Icon size={24} /></span>
              <span className="social-item__text"><b>{name}</b><small>{handle}</small></span>
            </a>
          </div>
        ))}
      </Abs>
    </Stage>
  );
}
