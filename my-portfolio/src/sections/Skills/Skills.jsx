import { Headline } from "../../components/Headline";
import SkillsList from "./SkillsList.json";

export const Skills = () => {
  return (
    <div className="skills-section">
      <Headline text={"Skills"} elementClassName={"skills-header"} />

      {SkillsList.map((skill, index) => (
        <div key={index}>
          <h2>{skill.skillName}</h2>
          {skill.skillSet.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      ))}
    </div>
  );
};
