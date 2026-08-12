import ContentPage from "../components/ContentPage";

function About() {
  return (
    <ContentPage
      title="About me"
      description={
        <>
          <p>
            I'm a frontend developer based out of Miami, FL, USA. I enjoy
            building webpages and applications that solve real-world problems
            and that are fun to use. My specialties include Javascript, React
            JS, Tailwind CSS, and Styled Components.
          </p>
          <br />
          <p>
            My interests and hobbies include cooking and exploring cuisines from
            around the world. I am indeed a "foodie". I also enjoy traveling
            with my wife and meeting people from different cultures and
            backgrounds. I'm a strong believer in having an open mind and
            embracing new experiences or ways of thinking. My biggest passion
            outside of programming is following my football/soccer team, which I
            adore. I'll keep its identity a secret just in case you're not a fan
            (😂).
          </p>
        </>
      }
      className="about-page"
    />
  );
}

export default About;
