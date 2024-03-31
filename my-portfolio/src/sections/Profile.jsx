import { Image } from "../components/Image";
import { Text } from "../components/Text";
import { Headline } from "../components/Headline";
import "./Profile.css";

export const Profile = () => {
  return (
    <div className="profile-container">
      <Image
        section={"profile-img"}
        link={"/Icons/headshot.svg"}
        imgAltText={"headshot"}
      />
      <div>
        <Text elementClassName={"my-name"} text={"Hi, I'm Ji Yoo "} />
        <Headline elementClassName={"my-job"} text={"Frontend Developer"} />
      </div>
      <Text
        elementClassName={"about-me"}
        text={
          "As a developer, I bring along my background in project management and client relations to strive to become a well-rounded developer with valuable skills to complement my coding and problem solving abilities."
        }
      />
      <div className="arrow-container">
        <Image
          section={"arrow-img"}
          link={"/Icons/Arrow.svg"}
          imgAltText={"downwards arrow"}
        />
      </div>
    </div>
  );
};
