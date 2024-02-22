import "./SkillInfoCard.css";
const SkillInfoCard = ({ heading, skills }) => {
  return (
    <>
      <div className="skill_info_card">
        <h6>{heading}</h6>
      </div>

      <div className="skill_info_content">
        {skills.map((item, index) => {
          return <p key={index}>{item.skill}</p>;
        })}
      </div>
    </>
  );
};
export default SkillInfoCard;
