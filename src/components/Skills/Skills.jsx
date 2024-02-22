import "./Skills.css";
import { SKILLS } from "../../utilis/data";
import SkillCard from "./SkillCard/SkillCard";
import { useState } from "react";
import SkillInfoCard from "./SkillInfoCard/SkillInfoCard";
const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState(SKILLS[0]);

  const handelSelect = (data) => {
    setSelectedSkills(data);
  };
  return (
    <>
      <section id="skills" className="skills_container">
        <h5>Technical Proficiency</h5>
        <div className="skills_content">
          <div className="skills">
            {SKILLS.map((item) => {
              return (
                <SkillCard
                  title={item.title}
                  icon={item.icon}
                  key={item.title}
                  isActve={selectedSkills.title === item.title}
                  onClick={() => handelSelect(item)}
                />
              );
            })}
          </div>
          <div className="skills_info">
            <SkillInfoCard
              heading={selectedSkills.title}
              skills={selectedSkills.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
