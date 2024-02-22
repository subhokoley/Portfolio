import ContactForm from "./ContactForm/ContactForm";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";
const ContactMe = () => {
  return (
    <>
      <section id="contact-me" className="contact_container">
        <h5>Contact Me</h5>

        <div className="contact_content">
          <div style={{ flex: 1 }}>
            <ContactInfoCard
              icon="./images/email-icon.png"
              text="subhankarkoley239@gmail.com"
            />

            <ContactInfoCard
              icon="./images/github-icon.png"
              text="https://github.com/subhokoley"
            />
            <ContactInfoCard
              icon="./images/linkedin-icon.gif"
              text="www.linkedin.com/in/subhankar-koley-318308a3"
            />
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactMe;
