import { Link } from "react-router-dom";
import { Abs, Band, Stage } from "../components/Stage.jsx";
import { HomeIcon } from "../components/Icons.jsx";

export default function NotFound() {
  return (
    <div className="page">
      <Stage height={1004}>
        <Band top={0} height={1004} color="var(--white)" style={{ background: "radial-gradient(circle 2800px at 71% 94%, rgba(99,102,241,0.12) 0, rgba(218,70,239,0.06) 32%, rgba(140,150,255,0.05) 82%, rgba(140,150,255,0) 100%), var(--white)" }} />

        <Abs x={972} y={112} w={526} h={780} style={{ order: 2 }}>
          <img src="/assets/robot-404.svg" alt="" width="526" height="780" />
        </Abs>

        <Abs x={422} y={244} className="nf-title">
          <h1>Error 404</h1>
          <p>The page you are looking for was moved, removed or might never existed.</p>
          <Link to="/" className="btn btn--primary btn--brand-shadow nf-btn"><HomeIcon size={24} /> Go to homepage</Link>
        </Abs>

        <Abs x={312} y={934} className="nf-copy" style={{ order: 3 }}>2021. All rights reserved. Silicon Template</Abs>
      </Stage>
    </div>
  );
}
