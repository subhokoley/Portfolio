import "./ContactInfoCard.css";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <>
      <div className="contact_details_card">
        <div className="icon">
          <img src={icon} alt={1} />
        </div>

        <p>{text}</p>
      </div>
    </>
  );
};

export default ContactInfoCard;
