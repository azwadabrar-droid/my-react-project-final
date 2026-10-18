import { Link } from "react-router-dom";
import { Abs, Band, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import { Check, Clock, Rocket, ThumbsUp, Users } from "../components/Icons.jsx";

const offers = [
  { x: 314, y: 777, Icon: Rocket, title: "Innovative Solutions", text: "Massa enim libero dictum consectetur convallis lobortis cursus mi a magna ullamcorper consectetur." },
  { x: 666, y: 777, Icon: ThumbsUp, title: "Success Guarantee", text: "At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam." },
  { x: 314, y: 983, Icon: Users, title: "Professional Team", text: "Pellentesque rhoncus viverra vestibu, purus purus quisque qui vestibulum facilisis dictumst consequat." },
  { x: 666, y: 983, Icon: Clock, title: "On Time Service", text: "Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing." },
];

const steps = [
  { x: 312, title: "Identifying the problem", text: "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur." },
  { x: 664, title: "Conducting a research", text: "At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam." },
  { x: 1016, title: "Creating low-fidelity prototypes", text: "Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque vestibulum facilisis dictumst consequat." },
  { x: 1368, title: "Building an MVP version", text: "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur." },
];

const logos = [
  { src: "client-1.png", w: 160, h: 64 }, { src: "client-2.svg", w: 140, h: 30 }, { src: "client-3.svg", w: 152, h: 19 },
  { src: "client-4.svg", w: 134, h: 34 }, { src: "client-5.svg", w: 124, h: 32 }, { src: "client-6.svg", w: 132, h: 35 },
];

export default function ServiceDetails() {
  return (
    <Stage height={4175 - 497}>
      <Breadcrumb trail={[{ label: "Services Page", to: "/services" }, { label: "Single Service" }]} />
      <Abs x={314} y={218} w={634} className="h-display72">Custom Software Development</Abs>
      <Abs x={1082} y={234} w={526} className="sd-lead">Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.</Abs>
      <Abs x={1082} y={402}><Link to="/contact" className="btn btn--primary btn--brand-shadow">Start your project</Link></Abs>
      <Abs x={312} y={550} w={1296} h={1} style={{ background: "var(--g300)" }} />

      {/* What we offer */}
      <Abs x={312} y={677} className="h-40">What We Offer</Abs>
      {offers.map(({ x, y, Icon, title, text }) => (
        <Abs key={title} x={x} y={y} w={304} className="offer">
          <Icon size={32} />
          <h3>{title}</h3>
          <p>{text}</p>
        </Abs>
      ))}
      <Abs x={1082} y={662} w={838} h={613} style={{ overflow: "hidden" }}>
        <img src="/assets/service-dashboard.png" alt="" style={{ width: 840, height: 613, objectFit: "cover" }} />
      </Abs>

      {/* How we work */}
      <Abs x={312} y={1371} className="h-40">How We Work?</Abs>
      <Abs x={392} y={1511} w={976} h={0} className="steps-line" />
      {steps.map((s, i) => (
        <div key={s.title}>
          <Abs x={s.x} y={1471} className="step">{i + 1}</Abs>
          <Abs x={s.x} y={1579} w={240} className="step-text"><h3>{s.title}</h3><p>{s.text}</p></Abs>
        </div>
      ))}

      {/* Clients */}
      <Abs x={560} y={1879} w={800} className="h-32 center-text">Trusted by Leading Companies</Abs>
      <Abs x={312} y={1953} className="sd-logos">
        {logos.map((l) => (
          <div key={l.src} className="clients__logo" style={{ width: 196, flex: "none" }}>
            <img src={`/assets/${l.src}`} alt="" style={{ width: l.w, height: l.h }} />
          </div>
        ))}
      </Abs>

      {/* Personalize */}
      <Abs x={312} y={2165} w={636} h={430} className="sd-panel">
        <img src="/assets/service-taskmaster.png" alt="" />
      </Abs>
      <Abs x={1044} y={2240} w={564} className="sd-block">
        <h2>We personalize how we work to fit your project needs</h2>
        <p>Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur purus quisque.</p>
      </Abs>
      <Abs x={1044} y={2468}><Link to="/contact" className="btn btn--primary btn--brand-shadow">Start your project</Link></Abs>

      {/* Product development */}
      <Abs x={312} y={2760} w={564} className="sd-block">
        <h2>Product development with the best experience </h2>
        <p>We create diverse, complex, web and mobile solutions for any business need. With us you get quality software and perfect service every time. Quisque integer eget velit facilisis enim malesuada metus, risus amet ultricies.</p>
        <ul className="sd-list">
          {["Quis euismod lacus, at consectetur porta", "Dictumst enim lectus dis eget non metus cras", "Risus volutpat tellus hendrerit nibh"].map((t) => (
            <li key={t}><Check size={20} /> {t}</li>
          ))}
        </ul>
      </Abs>
      <Abs x={972} y={2707} w={636} h={430} className="sd-panel">
        <img src="/assets/service-phone.png" alt="" />
      </Abs>

      {/* CTA */}
      <Band top={3249} height={430} color="#0b0f19" />
      <Abs x={0} y={3249} w={1920} h={430} className="sd-cta">
        <p className="sd-cta__lead">Ready to get started?</p>
        <h2>Launch Your Project with Us</h2>
        <Link to="/contact" className="btn btn--primary btn--brand-shadow">Work with us</Link>
      </Abs>
    </Stage>
  );
}
