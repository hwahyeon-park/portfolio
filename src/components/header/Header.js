import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import usePortfolio from "../../i18n/usePortfolio";

export default function Header() {
  const {greeting, ui} = usePortfolio();
  const {isDark} = useContext(StyleContext);
  const [expanded, setExpanded] = useState(false);
  const links = [
    ["education", ui.education],
    ["experience", ui.experience],
    ["projects", ui.projects],
    ["achievements", ui.research],
    ["skills", ui.skills],
    // ["scholarships", ui.scholarships],
    ["contact", ui.contact]
  ];
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#greeting" className="logo" onClick={() => setExpanded(false)}>
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <ToggleSwitch />
        <button
          type="button"
          className="navigation-toggle"
          aria-label={ui.menu}
          aria-expanded={expanded}
          aria-controls="site-navigation"
          onClick={() => setExpanded(!expanded)}
        >
          <span aria-hidden="true">☰</span>
        </button>
        <nav
          id="site-navigation"
          className={expanded ? "site-navigation is-open" : "site-navigation"}
        >
          <ul className={isDark ? "dark-menu menu" : "menu"}>
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setExpanded(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
