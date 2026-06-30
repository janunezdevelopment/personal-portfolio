import { useEffect, useRef, useState } from "react";

function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    if (showProjects && projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showProjects]);

  const loadProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    setShowProjects(true);
  };

  return (
    <main>
      <div className="hero-div">
        <h2>
          Hello! <br />
          Thank you for visiting my portfolio!
        </h2>
        <p>
          I am a frontend developer based in Miami, FL, USA. My specialties are
          JavaScript and React JS, and I enjoy building websites and web
          applications.
        </p>
        <button className="projects-btn" onClick={loadProjects}>
          See my projects
        </button>
      </div>
      {showProjects && (
        <div className="projects-div" ref={projectsRef}>
          Projects
        </div>
      )}
    </main>
  );
}

export default Home;
