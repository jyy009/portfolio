import { Title } from "../../components/Title";
import { Headline } from "../../components/Headline";
import { Text } from "../../components/Text";

import SkillsList from "./SkillsList.json";

export const Skills = () => {
  return (
    <div className="skills-section">
      <Title text={"Skills"} elementClassName={"skills-header"} />

      {SkillsList.map((skill, index) => (
        <div key={index}>
          <Headline 
          elementClassName={"skills-topic"}
          text={skill.skillName} />
          {skill.skillSet.map((item, index) => (
            <Text 
            key={index}
            elementClassName={"skills-list"}
            text={item} />
          ))}
        </div>
      ))}
    </div>
  );
};
