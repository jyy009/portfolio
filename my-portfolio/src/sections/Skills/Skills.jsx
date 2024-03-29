import { Title } from "../../components/Title";
import { Headline } from "../../components/Headline";
import { Text } from "../../components/Text";
import SkillsList from "./SkillsList.json";
import "./Skills.css";

export const Skills = () => {
  return (
    <div className="skills-container">
      <Title text={"Skills"} elementClassName={"skills-title"} />

      {SkillsList.map((skill, index) => (
        <div className="skills-wrapper">
          <Headline
            key={index}
            elementClassName={"skills-topic"}
            text={skill.skillName}
          />

          {skill.skillSet.map((item, index) => (
            <Text key={index} elementClassName={"skills-list"} text={item} />
          ))}
        </div>
      ))}
    </div>
  );
};
