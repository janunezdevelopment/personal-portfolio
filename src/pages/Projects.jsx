import quizzicalScreenshot1 from "../assets/imgs/quizzical-screenshot-1.png";
import quizzicalScreenshot2 from "../assets/imgs/quizzical-screenshot-2.png";
import conversionScreenshot1 from "../assets/imgs/conversion-screenshot-1.png";
import conversionScreenshot2 from "../assets/imgs/conversion-screenshot-2.png";
import passwordGenScreenshot1 from "../assets/imgs/password-gen-screenshot-1.png";
import passwordGenScreenshot2 from "../assets/imgs/password-gen-screenshot-2.png";

function Projects() {
  const projects = [
    {
      title: "Quizzical",
      screenshots: [quizzicalScreenshot1, quizzicalScreenshot2],
      description:
        "Quizzical is a fun quiz application that allows users to test their technological knowledge. It features multiple-choice questions and a scoring system to track progress.",
    },
    {
      title: "Unit Conversion",
      screenshots: [conversionScreenshot1, conversionScreenshot2],
      description:
        "Conversion is a utility application that allows users to convert between different units of measurement. It supports various unit types and provides accurate conversion results.",
    },
    {
      title: "Password Generator",
      screenshots: [passwordGenScreenshot1, passwordGenScreenshot2],
      description:
        "Password Generator is a utility application that allows users to generate passwords. It provides options for password length to ensure strong passwords.",
    },
  ];

  const projectElements = projects.map((project, index) => (
    <div className="project-container" key={index}>
      <h2 className="project-title">{project.title}</h2>
      <div className="project-screenshots-container">
        {project.screenshots.map((screenshot, i) => (
          <img src={screenshot} alt={`Project screenshot ${i + 1}`} key={i} />
        ))}
      </div>
      <p className="project-description">{project.description}</p>
    </div>
  ));
  return (
    <main className="projects-page">
      <hr className="divider" />
      {projectElements}
    </main>
  );
}

export default Projects;
