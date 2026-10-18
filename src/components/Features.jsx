import { asset } from "../assets.js";

const features = [
  { icon: "icon-idea.png", title: "Creative Solutions", text: "Sed morbi nulla pulvinar lectus tempor vel euismod accumsan." },
  { icon: "icon-award.png", title: "Award Winning", text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet." },
  { icon: "icon-team.png", title: "Team of Professionals", text: "Nam venenatis urna aenean quis feugiat et senectus turpis." },
];

export default function Features() {
  return (
    <section className="section features" id="features">
      <div className="container features__row">
        {features.map((f, i) => (
          <div key={f.title} className="features__item-wrap">
            {i > 0 && <span className="features__divider" />}
            <div className="feature">
              <img src={asset(f.icon)} alt="" width="48" height="48" />
              <div className="feature__text">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
