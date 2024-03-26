import { Paragraph } from "../components/Paragraph";
import { Headline } from "../components/Headline";

export const Tech = () => {
  return (
    <div className="tech-container">
      <Headline elementClassName={""} text={"Tech"} />
      <Paragraph elementClassName={""} text={"List tech here"} />
    </div>
  );
};
