import ContentPage from "../components/ContentPage";
import avatar from "../assets/imgs/avatar.jpg";

function About() {
  return (
    <ContentPage
      photo={avatar}
      title="About me"
      description={
        <>
          <p>
            I'm a frontend developer based out of Miami, FL, USA. I enjoy
            building webpages and applications that solve real-world problems
            and are easy to use. My specialties include JavaScript and React JS.
          </p>
          <br />
          <p>
            My interests and hobbies include cooking and exploring cuisines from
            around the world; I am indeed a "foodie". I also enjoy traveling
            with my wife and meeting people from different cultures and
            backgrounds. I'm a strong believer in kindness toward others and
            having an open mind in order to embrace new experiences or ways of
            thinking. My biggest passion outside of programming is supporting my
            football/soccer team, which I adore. I'll keep its identity a secret
            just in case you're not a fan (😂).
          </p>
        </>
      }
      className="about-page"
    />
  );
}

export default About;
