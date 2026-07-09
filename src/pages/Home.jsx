import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="content-container">
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
      <Link className="projects-btn" to="/projects">
        See my projects
      </Link>
    </main>
  );
}

export default Home;
