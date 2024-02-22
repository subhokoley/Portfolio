import "./SkillCard.css";
const SkillCard = ({ title, icon, isActve, onClick }) => {
  return (
    <>
      <div
        className={`skill_card ${isActve ? "active" : ""}`}
        onClick={() => {
          onClick();
        }}
      >
        <div className="skill_icon">
          <img src={icon} alt="" />
        </div>
        <span>{title}</span>
      </div>
    </>
  );
};
export default SkillCard;
