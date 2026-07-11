import ContentPage from "../components/ContentPage";

function About() {
  return (
    <ContentPage
      title="About me"
      description={
        <>
          I'm a frontend developer based out of Miami, FL, USA. I enjoy building
          webpages and applications that solve real-world problems and that are
          fun to use. My specialties include Javascript, React JS, Tailwind CSS,
          and Styled Components.
        </>
      }
    />
  );
}

export default About;
