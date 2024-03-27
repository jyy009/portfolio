import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Projects } from "./Projects";
import { Words } from "./Words";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

export const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <Profile />
      <Tech />
      <Projects />
      <Words />
      <Skills />
      <Contact />
    </div>
  );
};
