import { useState } from "react";
import { Abs, Band, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import BlogCard, { posts } from "../components/BlogCard.jsx";
import { CheckSquare, Chevron, Mail } from "../components/Icons.jsx";

const lists = [
  ["Daily Newsletter", "Event Updates"],
  ["Advertising Updates", "Startups Weekly"],
  ["Week in Review", "Podcasts"],
];

export default function Blog() {
  const [page, setPage] = useState(3);
  const [checked, setChecked] = useState({ "Advertising Updates": true });

  return (
    <Stage height={3143 - 497}>
      <Breadcrumb trail={[{ label: "Grid View no Sidebar" }]} />
      <Abs x={312} y={170} className="h-40">Grid View no Sidebar</Abs>

      <div className="abs blog-toolbar" style={{ right: 312, top: 174 }}>
        <div className="blog-toolbar__view">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9397ad" strokeWidth="1.8" strokeLinecap="round"><path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" /></svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinejoin="round"><rect x="4" y="4" width="6.5" height="6.5" rx="1" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1" /></svg>
        </div>
        <div className="blog-select">
          <select defaultValue="All categories" aria-label="Category">
            <option>All categories</option><option>Business</option><option>Digital</option><option>Marketing</option><option>Startups</option><option>Strategy</option>
          </select>
          <Chevron dir="down" size={20} style={{ color: "#565973" }} />
        </div>
        <div className="blog-search">
          <input type="search" placeholder="Search the blog..." aria-label="Search the blog" />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#565973" strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        </div>
      </div>

      <Abs x={312} y={262} className="blog-grid">
        {posts.map((p) => <BlogCard key={p.title} post={p} />)}
      </Abs>

      <Abs x={846} y={1996} className="pagination">
        <button type="button" className="pagination__arrow" aria-label="Previous" onClick={() => setPage((p) => Math.max(1, p - 1))}><Chevron dir="left" size={18} style={{ color: "#33354d" }} /></button>
        <div className="pagination__pages">
          {[1, 2, 3, 4].map((n) => (
            <button key={n} type="button" className={`pagination__page${page === n ? " is-active" : ""}`} onClick={() => setPage(n)}>{n}</button>
          ))}
        </div>
        <button type="button" className="pagination__arrow" aria-label="Next" onClick={() => setPage((p) => Math.min(4, p + 1))}><Chevron dir="right" size={18} style={{ color: "#33354d" }} /></button>
      </Abs>

      <Band top={2128} height={518} color="var(--g100)" />
      <Abs x={532} y={2224} className="h-40">Don’t Want to Miss Anything?</Abs>
      <Abs x={1139} y={2229} w={65} h={68}>
        <svg width="65" height="68" viewBox="0 0 65 68" fill="none" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 60c-2-18 4-40 22-48 10-4 20-2 28 6M47 8l9 10 10-6" /></svg>
      </Abs>
      <Abs x={532} y={2324} w={196} className="signup-title">Sign up for Newsletters</Abs>
      <Abs x={752} y={2324} className="signup-cols">
        {lists.map((col, i) => (
          <div key={i} className="signup-col">
            {col.map((label) => (
              <label key={label} className="check check--sm">
                <input type="checkbox" checked={!!checked[label]} onChange={(e) => setChecked((c) => ({ ...c, [label]: e.target.checked }))} />
                <span className="check__box"><CheckSquare size={24} /></span>
                <span>{label}</span>
              </label>
            ))}
          </div>
        ))}
      </Abs>
      <form className="abs signup-form" style={{ left: 532, top: 2444, width: 856 }} onSubmit={(e) => e.preventDefault()}>
        <div className="signup-input">
          <Mail size={20} style={{ color: "#565973" }} />
          <input type="email" placeholder="Your Email" aria-label="Your email" />
        </div>
        <button type="submit" className="btn btn--primary">Subscribe *</button>
      </form>
      <Abs x={532} y={2512} className="signup-note"><span>*</span> Yes, I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>.</Abs>
    </Stage>
  );
}
