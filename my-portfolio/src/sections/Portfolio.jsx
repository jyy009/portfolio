import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Projects } from "./Projects/Projects";
import { Words } from "./Words/Words";
import { Skills } from "./Skills/Skills";
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
