import { useState, useEffect } from "react";
import github from "../assets/imgs/github.svg";
import linkedin from "../assets/imgs/linkedin.svg";

function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/username",
      label: "GitHub",
      src: github,
      className: "github-icon",
    },
    {
      href: "https://linkedin.com/in/username",
      label: "LinkedIn",
      src: linkedin,
      className: "linkedin-icon",
    },
  ];

  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 667px)");

    // Set initial state
    setIsWide(mediaQuery.matches);

    // Listener for changes
    const handler = (e) => setIsWide(e.matches);
    mediaQuery.addEventListener("change", handler);

    // Clean up
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <footer>
      <div className="social-section-container">
        <h2>Socials</h2>
        <nav>
          <ul className="social-links-container">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links"
                >
                  <img
                    src={link.src}
                    alt={link.label}
                    className={link.className}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="copyright">
        &copy; 2026 Javier A. Núñez.
        {isWide ? " " : <br />}
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
