import { useState } from "react";
import { asset } from "../assets.js";

const items = [
  { title: "Digital Marketing" },
  {
    title: "Web Development",
    text: "Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.",
  },
  { title: "Application Development" },
  { title: "Strategy" },
  { title: "Digital Advertising" },
];

export default function Competencies() {
  const [open, setOpen] = useState(1);

  return (
    <section className="section">
      <div className="container">
        <div className="competencies">
          <h2 className="section-title section-title--center">Our Competencies</h2>
          <p className="section-lead section-lead--wide">
            We fully understand your business. If you need to update something, we are more than
            happy to help you with the services we are providing.
          </p>

          <div className="accordion">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.title} className={`panel${isOpen ? " panel--open" : ""}`}>
                  <button
                    type="button"
                    className="panel__head"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    <span>{item.title}</span>
                    <span className={`panel__arrow${isOpen ? " panel__arrow--open" : ""}`}>
                      <img src={asset(isOpen ? "chevron-up-open.svg" : "chevron-down-sm.svg")} alt="" width={isOpen ? 36 : 20} height={isOpen ? 36 : 20} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="panel__body">
                      <img src={asset("competency.png")} alt="" width="200" height="200" />
                      <p>{item.text || "Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet."}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
