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
        <Text elementClassName={"my-name"} text={"Hi, I'm Ji Yoo"} />
        <Headline elementClassName={"my-job"} text={"Frontend Developer"} />
      </div>
      <Text
        elementClassName={"about-me"}
        text={
          "I'm originally from the U.S. and I've embarked on a fascinating journey spanning 10 years in project management roles to now a Frontend Developer. I enjoy being a developer because it is never static. As a self-motivated person with a strong mind-set, I thrive on the challenges of problem solving and the continuous learning that comes with it. In a short amount of time, I've built applications such as a live weather app and a Twitter inspired app using a custom API."}
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
