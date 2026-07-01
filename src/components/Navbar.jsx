import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/imgs/avatar.jpg";

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

  return (
    <header>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <Link className="avatar-link" to="/" end>
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
          <li>
            <NavLink
              className={({ isActive }) => getNavLinkClassName("/", isActive)}
              to="/"
              end
              onFocus={() => setFocusedLink("/")}
              onBlur={() => setFocusedLink(null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                getNavLinkClassName("/projects", isActive)
              }
              to="/projects"
              onFocus={() => setFocusedLink("/projects")}
              onBlur={() => setFocusedLink(null)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                getNavLinkClassName("/about", isActive)
              }
              to="/about"
              onFocus={() => setFocusedLink("/about")}
              onBlur={() => setFocusedLink(null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                getNavLinkClassName("/contact", isActive)
              }
              to="/contact"
              onFocus={() => setFocusedLink("/contact")}
              onBlur={() => setFocusedLink(null)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
