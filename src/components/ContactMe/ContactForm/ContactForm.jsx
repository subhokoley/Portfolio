import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <div className="contact_form_container">
        <form>
          <div className="name_container">
            <input type="text" placeholder="First Name" name="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" />
          </div>

          <input type="text" name="email" placeholder="Email" />
          <input type="text" name="number" placeholder="Mobile Number" />
          <textarea name="message" rows={3} placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
