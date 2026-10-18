import { Link } from "react-router-dom";
import { asset } from "../assets.js";

export default function Projects() {
  return (
    <section className="section projects">
      <div className="container">
        <h2 className="section-title section-title--center">Featured Projects</h2>
        <p className="section-lead">
          We create websites and mobile apps, marketing materials, branding, web design, UX/UI
          design and illustrations.
        </p>

        <div className="projects__grid">
          <img className="projects__tall" src={asset("project-tall.jpg")} alt="Featured project" />
          <img src={asset("project-top-mid.jpg")} alt="Featured project" />
          <img src={asset("project-top-right.jpg")} alt="Featured project" />
          <img className="projects__wide" src={asset("project-wide.jpg")} alt="Featured project" />
        </div>

        <div className="center">
          <Link to="/portfolio" className="btn btn--primary">Explore all</Link>
        </div>
      </div>
    </section>
  );
}
