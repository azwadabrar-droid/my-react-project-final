import { asset } from "../assets.js";

export default function Picture() {
  return (
    <section className="section picture">
      <div className="container">
        <div className="picture__head">
          <h2 className="section-title">Our Creative Atmosphere</h2>
          <img className="picture__arrow" src={asset("arrow-doodle.svg")} alt="" />
        </div>
        <img className="picture__img" src={asset("atmosphere.jpg")} alt="Our creative atmosphere" />
      </div>
    </section>
  );
}
