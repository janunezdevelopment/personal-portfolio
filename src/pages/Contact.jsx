import ContentPage from "../components/ContentPage";

function Contact() {
  return (
    <ContentPage
      title="Contact info"
      description={
        <>
          Please feel free to reach out to me! I'm happy to jump on a video call
          to brainstorm projects and ideas. Send me an email at
          janunezdevelopment@gmail.com or call me directly at +1 (305) 794-7389.
        </>
      }
      className="contact-page"
    />
  );
}

export default Contact;
