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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
