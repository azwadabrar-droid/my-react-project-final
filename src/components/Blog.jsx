import { Link } from "react-router-dom";
import { asset } from "../assets.js";
import { Bookmark } from "./Icons.jsx";

const Author = ({ avatar, name, role }) => (
  <div className="post__author">
    <img src={asset(avatar)} alt="" width="48" height="48" />
    <div>
      <p className="post__name">{name}</p>
      <p className="post__role">{role}</p>
    </div>
  </div>
);

const Save = () => (
  <button type="button" className="post__save" aria-label="Save">
    <Bookmark size={18} />
  </button>
);

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <h2 className="section-title section-title--center">Latest From Our Blog</h2>

        <div className="blog__grid">
          <article className="post post--vertical">
            <div className="post__image">
              <img src={asset("blog-3.jpg")} alt="" />
              <Save />
            </div>
            <div className="post__body">
              <div className="post__meta">
                <span className="badge">Digital</span>
                <span className="post__date">12 hours ago</span>
              </div>
              <h3>A study on smartwatch design qualities and people’s preferences</h3>
              <Author avatar="avatar-3.png" name="Jerome Bell" role="Marketing Specialist" />
            </div>
          </article>

          <article className="post post--horizontal post--a">
            <div className="post__image">
              <img src={asset("blog-1.png")} alt="" />
              <Save />
            </div>
            <div className="post__body">
              <div className="post__meta">
                <span className="badge">Tips &amp; Advice</span>
                <span className="post__date">May 24, 2021</span>
              </div>
              <h3>How to check the website before releasing it?</h3>
              <Author avatar="avatar-1.png" name="Marvin McKinney" role="Senior UI/UX Designer" />
            </div>
          </article>

          <article className="post post--horizontal post--b">
            <div className="post__image">
              <img src={asset("blog-2.png")} alt="" />
              <Save />
            </div>
            <div className="post__body">
              <div className="post__meta">
                <span className="badge">Design</span>
                <span className="post__date">1 day ago</span>
              </div>
              <h3>Brand analysis: second step to the brand identity</h3>
              <Author avatar="avatar-2.png" name="Annette Black" role="Product Manager" />
            </div>
          </article>
        </div>

        <div className="center">
          <Link to="/blog" className="btn btn--outline">More blog posts</Link>
        </div>
      </div>
    </section>
  );
}
