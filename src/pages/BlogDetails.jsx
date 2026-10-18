import { useState } from "react";
import { Link } from "react-router-dom";
import { Abs, Band, Stage } from "../components/Stage.jsx";
import Breadcrumb from "../components/Breadcrumb.jsx";
import BlogCard, { posts } from "../components/BlogCard.jsx";
import { CheckSquare, Chevron, Facebook, Linkedin, Mail, Play, Twitter } from "../components/Icons.jsx";

const ico = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
const Like = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" {...ico}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.4-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>;
const Comment = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" {...ico}><path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" /></svg>;
const Share = ({ s = 18 }) => <svg width={s} height={s} viewBox="0 0 24 24" {...ico}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>;
const Reply = () => <svg width="20" height="20" viewBox="0 0 24 24" {...ico}><path d="M9 14 4 9l5-5M20 20v-7a4 4 0 0 0-4-4H4" /></svg>;
const Plus = () => <svg width="20" height="20" viewBox="0 0 24 24" {...ico} stroke="#6366f1"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></svg>;
const Minus = () => <svg width="20" height="20" viewBox="0 0 24 24" {...ico} stroke="#6366f1"><circle cx="12" cy="12" r="9" /><path d="M8 12h8" /></svg>;
const GPlus = () => <span style={{ width: 20, height: 20, display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>G+</span>;

const Socials = () => (
  <div className="bd-socials">
    <a href="#" aria-label="Linkedin"><Linkedin /></a>
    <a href="#" aria-label="Facebook"><Facebook /></a>
    <a href="#" aria-label="Twitter"><Twitter /></a>
    <a href="#" aria-label="Google plus"><GPlus /></a>
  </div>
);

const pros = [
  "A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.",
  "At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit neque.",
  "Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet ultricies odio fermentum arcu quam.",
  "Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio vel nulla vel.",
  "Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque diam in.",
  "Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.",
];
const cons = [
  "Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus sollicitudin et quam vehicula amet lacus, integer.",
  "Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.",
  "Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.",
  "Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a turpis erat fermentum, rhoncus.",
  "Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum ultricies ac.",
];

function CommentItem({ avatar, name, time, children }) {
  return (
    <div className="cmt">
      <div className="cmt__head">
        <div className="cmt__author">
          <img src={`/assets/${avatar}`} alt="" width="48" height="48" />
          <div><b>{name}</b><small>{time}</small></div>
        </div>
        <button type="button" className="cmt__reply"><Reply /> Reply</button>
      </div>
      <p>{children}</p>
    </div>
  );
}

export default function BlogDetails() {
  const [liked, setLiked] = useState(false);
  const [save, setSave] = useState(false);

  return (
    <Stage height={6399 - 497}>
      <Breadcrumb trail={[{ label: "Blog", to: "/blog" }, { label: "Single Post" }]} />
      <Abs x={312} y={170} w={966} className="h-40" style={{ whiteSpace: "normal", order: 1 }}>This Long-Awaited Technology May Finally Change the World</Abs>

      <Abs x={312} y={306} className="bd-meta" style={{ order: 2 }}>
        <span className="bcard__badge" style={{ position: "static", color: "var(--primary)", background: "rgba(99,102,241,0.12)", fontSize: 16 }}>Technology</span>
        <i />
        <span>12 hours ago</span>
        <i />
        <span className="bd-meta__stat"><Like /> 8</span>
        <span className="bd-meta__stat"><Comment /> 4</span>
        <span className="bd-meta__stat"><Share /> 2</span>
      </Abs>
      <Abs x={1374} y={272} w={234} className="bd-author" style={{ order: 3 }}>
        <img src="/assets/avatar-albert.png" alt="" width="60" height="60" />
        <div><b>Author</b><a href="#">Albert Flores</a></div>
      </Abs>
      <Abs x={0} y={372} w={1920} h={700} style={{ overflow: "hidden", order: 4 }}>
        <img src="/assets/post-cover.jpg" alt="" style={{ width: 1920, height: 700, objectFit: "cover" }} />
      </Abs>

      {/* Article */}
      <Abs x={312} y={1144} w={966} className="bd-post" style={{ order: 7 }}>
        <p className="bd-lead">Est quis sit phasellus proin proin fringilla eu quis. Placerat praesent blandit urna eu pellentesque dictum. Aliquam duis quam interdum quis. Urna, rutrum aenean lacus phasellus. Ipsum, ac porttitor lacus orci, cras lacus, quis leo.</p>
        <div><h3>Paragraph Title</h3><p>Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus. Lacinia pellentesque fermentum tellus orci mauris, velit duis eget. Commodo justo, hac ligula molestie felis, iaculis. Vitae dui at ante orci, dictum fusce. Urna, sed urna fringilla faucibus euismod aliquet nec. Quis libero, fermentum amet eu, condimentum auctor. Sit vel ipsum sem tempus gravida et. Scelerisque blandit orci, est quis. Nisi, tellus amet est nascetur habitant faucibus ornare et vivamus.</p></div>
        <div className="bd-video">
          <img src="/assets/post-video.jpg" alt="" />
          <span className="about-video__overlay" />
          <button type="button" className="about-video__play" aria-label="Play video"><Play size={72} /></button>
        </div>
        <p>Tempor donec aliquam est, a. Sit arcu tellus pharetra, bibendum hendrerit arcu, sed. Scelerisque dui enim libero sit ac sed lacus lectus. Quam in iaculis scelerisque feugiat nibh mi. Maecenas posuere lobortis praesent iaculis sagittis. Egestas vel at praesent ipsum pretium faucibus adipiscing gravida feugiat. Lacus, rhoncus velit at non nunc, quam urna, phasellus facilisis. Cursus elit posuere amet tortor at. Mi tristique congue vulputate eget in pellentesque tincidunt. In viverra est id nibh. Nunc tellus ultrices magna turpis. Viverra est morbi posuere dapibus nisi habitasse. Id tristique cursus vel metus.</p>
        <blockquote className="bd-quote">
          <p className="bd-lead">Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.</p>
          <div className="bd-quote__author"><img src="/assets/avatar-jane.png" alt="" width="48" height="48" /><div><b>Jane Cooper</b><small>CEO of Ipsum Company</small></div></div>
        </blockquote>
        <p>Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor, suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis aliquam. At orci amet facilisi nunc mi vitae iaculis diam a. Mauris venenatis sed purus cursus torte.</p>
        <div><h3>Paragraph Title 2</h3><p>Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum. A eget et, eget quisque egestas netus vel. Velit, aliquet turpis convallis ullamcorper. Scelerisque sagittis condimentum pretium in vitae etiam lacinia quis amet. Porttitor consequat, sollicitudin vivamus pharetra nibh faucibus neque, viverra. Praesent amet sed lacus vitae.</p></div>
        <div className="bd-list"><h4><Plus /> PROS</h4><ul>{pros.map((t) => <li key={t}>{t}</li>)}</ul></div>
        <div className="bd-list"><h4><Minus /> CONS</h4><ul>{cons.map((t) => <li key={t}>{t}</li>)}</ul></div>
        <div><h3>Conclusion</h3><p>Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium dolor eget placerat morbi proin eget. Vestibulum vitae ultrices vel sed sit quis. Ac quis diam at nulla libero. Turpis duis magna tellus condimentum.</p><p style={{ marginTop: 25.6 }}>Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi. Accumsan mauris eget convallis mattis sed etiam scelerisque.</p></div>
        <span className="bd-rule" />
        <div className="bd-tags"><b>Related Tags:</b><a href="#">#lifestyle</a><a href="#">#tech</a><a href="#" className="is-on">#business</a></div>
      </Abs>

      {/* Sidebar */}
      <Abs x={1374} y={1144} w={234} className="bd-side" style={{ order: 5 }}>
        <p>5 min read</p>
        <b>Share this post:</b>
        <Socials />
      </Abs>
      <Abs x={1374} y={1316} style={{ order: 6 }}>
        <button type="button" className={`bd-like${liked ? " is-on" : ""}`} onClick={() => setLiked((l) => !l)}><Like s={24} /> Like it <span className="badge-num">{liked ? 9 : 8}</span></button>
      </Abs>
      <Abs x={1374} y={4456} w={234} className="bd-subscribe" style={{ order: 8 }}>
        <p className="bd-subscribe__t">Enjoy this post? Join our newsletter</p>
        <div className="bd-input"><Mail size={20} style={{ color: "#565973" }} /><input type="email" placeholder="Your Email" aria-label="Your email" /></div>
        <button type="button" className="bd-btn">Subscribe</button>
        <p className="bd-subscribe__t" style={{ marginTop: 32 }}>Don’t forget to share it</p>
        <Socials />
      </Abs>

      {/* Comments */}
      <Abs x={312} y={3614} className="h-40" style={{ order: 9 }}>4 comments</Abs>
      <Abs x={312} y={3706} w={966} className="cmts" style={{ order: 10 }}>
        <CommentItem avatar="avatar-esther.png" name="Esther Howard" time="4 min ago">Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper dolor sit mauris. Hendrerit eu libero, eu tristique sodales ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus.</CommentItem>
        <span className="bd-rule" />
        <CommentItem avatar="avatar-ralph.png" name="Ralph Edwards" time="September 9 at 12:48">Eget amet, ac scelerisque tellus sed. Sapien duis sit neque pulvinar. Est sit aenean nisl etiam donec mattis ut diam. Luctus massa eu nunc aliquam viverra tempus, eu amet, luctus. Ac faucibus vestibulum eu lacus. Ullamcorper sem ultrices tincidunt pharetra?</CommentItem>
        <div className="cmt-reply">
          <CommentItem avatar="avatar-albert.png" name="Albert Flores" time="16 hours ago"><b className="mention">@Ralph Edwards</b> Vulputate malesuada amet, consequat ullamcorper. Orci, cras maecenas in sit purus pellentesque. Ridiculus blandit pellentesque eget arcu morbi nisl. Morbi volutpat adipiscing sapien sed ut tempor.</CommentItem>
        </div>
        <span className="bd-rule" />
        <CommentItem avatar="avatar-cameron.png" name="Cameron Williamson" time="March 24 at 8:20">Mattis id ut sed arcu metus elit faucibus condimentum aliquam. Nam adipiscing diam et suspendisse. Sagittis massa maecenas laoreet nulla amet nunc sagittis, pulvinar neque. Duis imperdiet ipsum suspendisse massa lectus habitasse. Id ante volutpat hendrerit augue parturient eget. Ac vitae posuere leo morbi vitae at hac lectus. Nibh neque quam quis amet mattis sit. Faucibus risus at sit tempus ut.</CommentItem>
      </Abs>

      <Abs x={312} y={4456} w={966} h={592} className="leave" style={{ order: 11 }}>
        <h2>Leave a Comment</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="leave__row">
            <div className="field"><label htmlFor="bd-name">Name</label><input id="bd-name" type="text" /></div>
            <div className="field"><label htmlFor="bd-email">Email</label><input id="bd-email" type="email" /></div>
          </div>
          <div className="field"><label htmlFor="bd-comment">Comment</label><textarea id="bd-comment" placeholder="Type your comment here..." style={{ height: 104 }} /></div>
          <label className="check">
            <input type="checkbox" checked={save} onChange={(e) => setSave(e.target.checked)} />
            <span className="check__box"><CheckSquare size={24} /></span>
            <span>Save my name and emai in this browser for the next time I comment.</span>
          </label>
          <button type="submit" className="btn btn--primary">Post comment</button>
        </form>
      </Abs>

      {/* Related */}
      <Abs x={312} y={5160} className="h-40" style={{ order: 12 }}>Related Articles</Abs>
      <Abs x={1446} y={5160} style={{ order: 13 }}><Link to="/blog" className="btn btn--outline" style={{ padding: "12px 31px" }}>All posts <Chevron dir="right" size={24} /></Link></Abs>
      <Abs x={312} y={5252} className="blog-grid" style={{ order: 14 }}>
        {[posts[8], posts[0], posts[1]].map((p) => <BlogCard key={p.title} post={p} />)}
      </Abs>
    </Stage>
  );
}
