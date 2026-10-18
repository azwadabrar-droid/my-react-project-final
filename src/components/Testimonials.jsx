import { useState } from "react";
import { asset } from "../assets.js";
import { Chevron, Quote, Star } from "./Icons.jsx";

export default function Testimonials() {
  const [page, setPage] = useState(3);
  const pages = [1, 2, 3, 4];

  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title section-title--center">What They Say About Us</h2>

        <div className="testimonials__row">
          <div className="testimonials__left">
            <div className="testimonial">
              <span className="testimonial__quote">
                <Quote size={24} />
              </span>
              <div className="review">
                <p>
                  Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius
                  mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.
                  Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam
                  integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at
                  mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor
                  ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor
                  habitant.
                </p>
                <div className="rating">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
              </div>
            </div>

            <div className="pagination">
              <button type="button" className="pagination__arrow" aria-label="Previous"
                onClick={() => setPage((p) => Math.max(1, p - 1))}>
                <Chevron dir="left" size={18} style={{ color: "#33354d" }} />
              </button>
              <div className="pagination__pages">
                {pages.map((n) => (
                  <button key={n} type="button"
                    className={`pagination__page${page === n ? " is-active" : ""}`}
                    onClick={() => setPage(n)}>
                    {n}
                  </button>
                ))}
              </div>
              <button type="button" className="pagination__arrow" aria-label="Next"
                onClick={() => setPage((p) => Math.min(4, p + 1))}>
                <Chevron dir="right" size={18} style={{ color: "#33354d" }} />
              </button>
            </div>
          </div>

          <div className="author">
            <img className="author__photo" src={asset("testimonial-author.jpg")} alt="Ralph Edwards" />
            <div className="author__info">
              <div className="author__logo">
                <img src={asset("client-1.png")} alt="" width="160" height="64" />
              </div>
              <span className="author__divider" />
              <div>
                <p className="author__name">Ralph Edwards</p>
                <p className="author__role">Head of Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
