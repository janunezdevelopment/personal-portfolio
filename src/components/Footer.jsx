import { useState, useEffect } from "react";
import github from "../assets/imgs/github.png";
import linkedin from "../assets/imgs/linkedin.png";

function Footer() {
  const socialLinks = [
    {
      href: "https://github.com/username",
      label: "GitHub",
      src: github,
    },
    {
      href: "https://linkedin.com/in/username",
      label: "LinkedIn",
      src: linkedin,
    },
  ];

  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

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
        <h3>Socials</h3>
        <nav>
          <ul className="social-links-container">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <img src={link.src} alt={link.label} />
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
