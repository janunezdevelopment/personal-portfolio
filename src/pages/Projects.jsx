import quizzicalScreenshot1 from "../assets/imgs/quizzical-screenshot-1.png";
import quizzicalScreenshot2 from "../assets/imgs/quizzical-screenshot-2.png";
import conversionScreenshot1 from "../assets/imgs/conversion-screenshot-1.png";
import conversionScreenshot2 from "../assets/imgs/conversion-screenshot-2.png";
import passwordGenScreenshot1 from "../assets/imgs/password-gen-screenshot-1.png";
import passwordGenScreenshot2 from "../assets/imgs/password-gen-screenshot-2.png";

const projects = [
  {
    title: "Quizzical",
    screenshots: [quizzicalScreenshot1, quizzicalScreenshot2],
    links: [
      {
        href: "https://quiz3000.netlify.app/",
        label: "View Live Project",
      },
      {
        href: "https://github.com/janunezdevelopment/quiz-project",
        label: "View Project Code",
      },
    ],
    description:
      "Quizzical is a fun quiz application that allows users to test their technological knowledge. It features multiple-choice questions and a scoring system to track progress. The user can also choose between three difficulty levels to customize their experience.",
  },
  {
    title: "Unit Conversion",
    screenshots: [conversionScreenshot1, conversionScreenshot2],
    links: [
      {
        href: "https://unit-conversion-app-1.netlify.app/",
        label: "View Live Project",
      },
      {
        href: "https://github.com/janunezdevelopment/unit-conversion-react-app",
        label: "View Project Code",
      },
    ],
    description:
      "This is a utility application that allows users to convert between different units of measurement. It supports various unit types and provides accurate conversion results. Users can save and filter their conversions for future reference.",
  },
  {
    title: "Password Generator",
    screenshots: [passwordGenScreenshot1, passwordGenScreenshot2],
    links: [
      {
        href: "https://password-generator-jn.netlify.app/",
        label: "View Live Project",
      },
      {
        href: "https://github.com/janunezdevelopment/Password-Generator",
        label: "View Project Code",
      },
    ],
    description:
      "This is a utility application that allows users to generate passwords. It provides options for password length to ensure strong passwords.",
  },
];

function Projects() {
  const projectItems = projects.map((project) => (
    <div className="project-container" key={project.title}>
      <div className="project-screenshots-container">
        {project.screenshots.map((screenshot, index) => (
          <img
            src={screenshot}
            alt={`Project screenshot ${index + 1}`}
            key={screenshot}
            className="project-screenshot"
          />
        ))}
      </div>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.links.map((link) => (
          <a className="project-link-btn" href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  ));

  return (
    <main className="projects-page">
      <hr className="divider" />
      {projectItems}
    </main>
  );
}

export default Projects;
