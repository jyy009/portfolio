import { Profile } from "./Profile";
import { Tech } from "./Tech";
import { Projects } from "./Projects";

export const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <Profile />
      <Tech />
    </div>
  );
};
