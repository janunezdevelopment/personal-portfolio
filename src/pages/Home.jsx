import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef(null);

  const loadProjects = (event) => {
    event.preventDefault();
    setShowProjects(true);
    window.requestAnimationFrame(() => {
      projectsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <main>
      <h2 className="heading">
        Hello! <br />
        Thank you for visiting my portfolio!
      </h2>
      <hr className="divider" />
      <p>
        I am a frontend developer based in Miami, FL, USA. My specialties are
        JavaScript and React JS, and I enjoy building websites and web
        applications.
      </p>
      <Link className="projects-btn" to="#projects" onClick={loadProjects}>
        See my projects
      </Link>
      {showProjects && (
        <div className="projects-div" id="projects" ref={projectsRef}>
          <h1>Projects</h1>
        </div>
      )}
    </main>
  );
}

export default Home;
