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
          "I am passionate about evolving into a versatile developer by drawing from my extensive experience in project management and client relations. My goal is to enhance my coding and problem-solving knowledge with a unique blend of skills that not only address technical challenges but also foster effective communication and collaboration."
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
