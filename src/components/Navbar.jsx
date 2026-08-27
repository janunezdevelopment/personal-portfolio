import { useEffect, useRef, useState } from "react";
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
  const [isDesktopNavigation, setIsDesktopNavigation] = useState(
    () =>
      window.matchMedia("(orientation: landscape) and (min-width: 640px)")
        .matches,
  );
  const [focusedLink, setFocusedLink] = useState(null);
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const wasMenuOpen = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(orientation: landscape) and (min-width: 640px)",
    );
    const handleMediaQueryChange = (event) => {
      setIsDesktopNavigation(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      firstMenuLinkRef.current?.focus();
    } else if (wasMenuOpen.current) {
      menuButtonRef.current?.focus();
    }

    wasMenuOpen.current = isMenuOpen;
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

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
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <nav className={`navbar font-sora ${isMenuOpen ? "open" : ""}`}>
        <Link className="avatar-link" to="/">
          <img
            src={avatar}
            alt="Portrait of Javier A. Núñez"
            className="avatar-image"
          />
          <span className="avatar-name">Javier A. Núñez</span>
        </Link>
        <button
          ref={menuButtonRef}
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
        >
          <span className="bars" aria-hidden="true"></span>
          <span className="bars" aria-hidden="true"></span>
          <span className="bars" aria-hidden="true"></span>
        </button>
        <ul
          id="primary-navigation"
          className={`navlinks-container ${isMenuOpen ? "open" : ""}`}
          hidden={!isDesktopNavigation && !isMenuOpen}
          inert={!isDesktopNavigation && !isMenuOpen}
        >
          {navItems.map((item) => (
            <li
              key={item.path}
              id={`navlink-${item.label.toLowerCase()}`}
              className="navlink-container"
            >
              <NavLink
                ref={item.path === "/" ? firstMenuLinkRef : undefined}
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
