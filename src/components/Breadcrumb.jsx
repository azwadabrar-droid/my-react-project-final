import { Link } from "react-router-dom";
import { Abs } from "./Stage.jsx";
import { ChevronsRight, HomeIcon } from "./Icons.jsx";

export default function Breadcrumb({ trail, y = 116 }) {
  return (
    <Abs x={312} y={y} className="breadcrumb">
      <Link to="/" className="breadcrumb__home"><HomeIcon size={18} /> Homepage</Link>
      {trail.map((t, i) => (
        <span key={t.label} className="breadcrumb__item">
          <ChevronsRight size={16} />
          {t.to && i < trail.length - 1 ? <Link to={t.to}>{t.label}</Link> : <span className="breadcrumb__current">{t.label}</span>}
        </span>
      ))}
    </Abs>
  );
}
