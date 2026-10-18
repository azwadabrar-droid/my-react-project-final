import { Link } from "react-router-dom";
import { Bookmark } from "./Icons.jsx";

export default function BlogCard({ post, to = "/blog/details" }) {
  return (
    <Link to={to} className="bcard">
      <div className="bcard__image">
        <img src={`/assets/${post.img}`} alt="" />
        <span className="bcard__save"><Bookmark size={18} /></span>
      </div>
      <span className="bcard__badge">{post.tag}</span>
      <span className="bcard__date">{post.date}</span>
      <h3>{post.title}</h3>
      <span className="bcard__line" />
      <div className="bcard__author">
        <img src={`/assets/${post.avatar}`} alt="" width="48" height="48" />
        <span>{post.author}</span>
      </div>
    </Link>
  );
}

export const posts = [
  { img: "post-1.jpg", tag: "Business", date: "May 19, 2021", title: "5 Bad Landing Page Examples & How We Would Fix Them", author: "Jerome Bell", avatar: "avatar-3.png" },
  { img: "post-2.jpg", tag: "Digital", date: "Sep 28, 2021", title: "Why UX Design Matters and How it Affects Ranking", author: "Jerome Bell", avatar: "avatar-3.png" },
  { img: "post-3.jpg", tag: "Business", date: "Sep 16, 2021", title: "This Week in Search: New Limits and Exciting Features", author: "Ralph Edwards", avatar: "avatar-ralph.png" },
  { img: "post-4.jpg", tag: "Processes & Tools", date: "12 hours ago", title: "Five Effective Lead Generation Techniques For Your Business", author: "Esther Howard", avatar: "avatar-esther.png" },
  { img: "post-5.jpg", tag: "Digital", date: "Oct 9, 2021", title: "Inclusive Marketing: Why and How Does it Work?", author: "Jane Cooper", avatar: "avatar-jane.png" },
  { img: "post-6.jpg", tag: "Marketing", date: "Apr 2, 2021", title: "How Agile is Your Forecasting Process?", author: "Albert Flores", avatar: "avatar-albert.png" },
  { img: "post-7.jpg", tag: "Processes & Tools", date: "Sep 3, 2021", title: "Your Guide to Optimising A JavaScript-enabled Website", author: "Ralph Edwards", avatar: "avatar-ralph.png" },
  { img: "post-8.jpg", tag: "Startups", date: "Sep 10, 2021", title: "A Study on Smartwatch Design Qualities and People’s Preferences", author: "Esther Howard", avatar: "avatar-esther.png" },
  { img: "post-9.jpg", tag: "Strategy", date: "Sep 16, 2021", title: "This Long-Awaited Technology May Finally Change the World", author: "Ralph Edwards", avatar: "avatar-ralph.png" },
];
