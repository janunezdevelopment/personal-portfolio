import { Link } from "react-router-dom";
import ContentPage from "../components/ContentPage";

function Home() {
  return (
    <ContentPage
      title={
        <>
          Hello! <br />
          Thank you for visiting my portfolio!
        </>
      }
      description={
        <>
          I am a frontend developer based in Miami, FL, USA. My specialties are
          JavaScript and React JS, and I enjoy building websites and web
          applications.
        </>
      }
      className="home-page"
    >
      <Link className="projects-btn" to="/projects">
        See my projects
      </Link>
    </ContentPage>
  );
}

export default Home;
