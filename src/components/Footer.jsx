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
        <br />
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
