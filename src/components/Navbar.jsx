import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../assets/imgs/avatar.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="brand-block">
          <Link className="avatar-link" to="/" end>
            <img src={avatar} alt="Portrait of Javier A. Núñez" />
          </Link>
          <h1>Javier A. Núñez</h1>
        </div>
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
            <NavLink className={"navlinks"} to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={"navlinks"} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={"navlinks"} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={"navlinks"} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
