import quizzicalScreenshot1 from "../assets/imgs/quizzical-screenshot-1.png";
import quizzicalScreenshot2 from "../assets/imgs/quizzical-screenshot-2.png";
import conversionScreenshot1 from "../assets/imgs/conversion-screenshot-1.png";
import conversionScreenshot2 from "../assets/imgs/conversion-screenshot-2.png";
import passwordGenScreenshot1 from "../assets/imgs/password-gen-screenshot-1.png";
import passwordGenScreenshot2 from "../assets/imgs/password-gen-screenshot-2.png";

const projects = [
  {
    title: "Quiztopia 3000",
    screenshots: [quizzicalScreenshot1, quizzicalScreenshot2],
    screenshotAlts: [
      "Quiztopia 3000 start screen with a difficulty selector and Start Quiz button",
      "Quiztopia 3000 question screen showing a multiple-choice technology question",
    ],
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
      "Quiztopia 3000 is a fun quiz application that allows users to test their technological knowledge. It features difficulty selection, multiple-choice questions, and a scoring system to track progress.",
  },
  {
    title: "Unit Conversion",
    screenshots: [conversionScreenshot1, conversionScreenshot2],
    screenshotAlts: [
      "Unit Conversion main screen with an area conversion form",
      "Unit Conversion saved history screen with filters and saved conversion entries",
    ],
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
    screenshotAlts: [
      "Password Generator screen with a password length control and Generate passwords button",
      "Password Generator screen showing two generated passwords and a copied-to-clipboard status",
    ],
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
    <section className="project-container" key={project.title}>
      <div className="project-screenshots-container flex-center">
        {project.screenshots.map((screenshot, index) => (
          <img
            src={screenshot}
            alt={project.screenshotAlts[index]}
            key={screenshot}
            className="project-screenshot"
          />
        ))}
      </div>
      <h2 className="project-title font-inter">{project.title}</h2>
      <p className="project-description flex-center">{project.description}</p>
      <div className="project-links flex-center">
        {project.links.map((link) => (
          <a className="button project-link-btn" href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </div>
    </section>
  ));

  return (
    <main id="main-content" tabIndex="-1" className="projects-page font-inter">
      <h1 className="heading">Projects</h1>
      <hr className="divider" />
      {projectItems}
    </main>
  );
}

export default Projects;
