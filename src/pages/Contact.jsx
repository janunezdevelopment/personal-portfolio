import ContentPage from "../components/ContentPage";

function Contact() {
  return (
    <ContentPage
      title="Contact info"
      description={
        <>
          Please feel free to reach out to me! I'm happy to jump on an audio or
          video call to brainstorm projects and ideas. Send me an email at{" "}
          <a href="mailto:janunezdevelopment@gmail.com">
            janunezdevelopment@gmail.com
          </a>{" "}
          or call me directly at{" "}
          <a href="tel:+13057947389">+1 (305) 794-7389</a>.
        </>
      }
      className="contact-page"
    />
  );
}

export default Contact;
