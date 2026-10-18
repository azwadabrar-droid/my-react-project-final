import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { asset } from "../assets.js";
import { Chevron } from "./Icons.jsx";
import { useTheme } from "../theme.jsx";

const links = [
  { label: "Services", to: "/services", dropdown: true },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function ThemeSwitch() {
  const { dark, toggle } = useTheme();
  return (
    <button type="button" className="theme-switch" onClick={toggle} role="switch" aria-checked={dark} aria-label="Toggle dark mode">
      <span>Light</span>
      <span className={`theme-switch__track${dark ? " is-dark" : ""}`}>
        <span className="theme-switch__thumb" />
      </span>
      <span>Dark</span>
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`navbar${open ? " is-open" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__logo">
          <img src={asset("logo.svg")} alt="Silicon" width="122" height="44" />
        </Link>

        <nav className="navbar__menu">
          {links.map((l) => (
            <NavLink key={l.label} to={l.to} className="navbar__link">
              {l.label}
              {l.dropdown && <Chevron dir="down" size={16} />}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__right">
          <ThemeSwitch />
          <Link to="/contact" className="btn btn--primary btn--sm">Contact us</Link>
        </div>

        <button type="button" className="navbar__burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </div>

      <div className="navbar__panel">
        {links.map((l) => (
          <NavLink key={l.label} to={l.to} className="navbar__panel-link">{l.label}</NavLink>
        ))}
        <div className="navbar__panel-row">
          <ThemeSwitch />
          <Link to="/contact" className="btn btn--primary btn--sm">Contact us</Link>
        </div>
      </div>
    </header>
  );
}
