import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/imgs/avatar.jpg";

const navItems = [
  { path: "/", label: "Home", end: true },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [focusedLink, setFocusedLink] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavLinkClassName = (path, isActive) => {
    const classes = ["navlinks"];

    if (isActive) {
      classes.push("active");
    }

    if (focusedLink === path) {
      classes.push("outlined-text");
    }

    return classes.join(" ");
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <Link className="avatar-link" to="/">
          <img src={avatar} alt="Portrait of Javier A. Núñez" />
          <h1>Javier A. Núñez</h1>
        </Link>
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="bars"></span>
          <span className="bars"></span>
          <span className="bars"></span>
        </button>
        <ul className={`navlinks-container ${isMenuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li
              key={item.path}
              id={`navlink-${item.label.toLowerCase()}`}
              className="navlink-container"
            >
              <NavLink
                className={({ isActive }) =>
                  getNavLinkClassName(item.path, isActive)
                }
                to={item.path}
                end={item.end}
                onFocus={() => setFocusedLink(item.path)}
                onBlur={() => setFocusedLink(null)}
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
