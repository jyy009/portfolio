import { Profile }  from "./Profile"
import { Tech }  from "./Tech"
import { Projects } from "./Projects/Projects"

export const Portfolio = () => {



  return(
    <div className="portfolio-wrapper">
      <Profile 
      image={"./assets/headshot"}
      name={"Ji Yoo"}
      title={"Frontend Developer"}
      about={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
      />
      <Tech />
      <Projects />

    </div>
  )
}

