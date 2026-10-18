import { asset } from "../assets.js";

const awards = [
  { label: "4x mobile of the day", layers: [["award-webby.png", "0"]] },
  { label: "1x Kudos", layers: [["award-cssda.png", "0"]] },
  { label: "3x website of the day", layers: [["award-awwwards.svg", "0"]] },
  { label: "2x best website", layers: [["award-fwa.svg", "25% 8.71% 24.06% 9%"]] },
];

export default function Awards() {
  return (
    <section className="section awards">
      <div className="container awards__row">
        <h2 className="awards__title">Award-winning designs featured by</h2>
        <div className="awards__logos">
          {awards.map((a) => (
            <div key={a.label} className="award">
              <div className="award__mark">
                {a.layers.map(([src, inset]) => (
                  <img key={src} src={asset(src)} alt="" style={{ inset }} />
                ))}
              </div>
              <p>{a.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
