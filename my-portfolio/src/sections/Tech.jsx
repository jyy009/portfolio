import { Text } from "../components/Text";
import { Title } from "../components/Title";
import "./Tech.css";

export const Tech = () => {
  return (
    <div className="tech-container">
      <Title elementClassName={"tech-title"} text={"Tech"} />
      <Text
        elementClassName={"tech-info"}
        text={
          "HTML, CSS, Javascript ES6, JSX, React, React Hooks, Node.js, Mongo DB, Express.js Web Accessibility, APIs, mob/pair programming, GitHub"
        }
      />
    </div>
  );
};
