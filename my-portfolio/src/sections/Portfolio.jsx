import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";
import { Contact } from "./Contact";
import { Ticker } from "./Ticker";
import "./Portfolio.css";

export const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <Profile />
      <Tech />
      <Projects />
      <Skills />
      <Contact />
      <Ticker />
    </div>
  );
};
