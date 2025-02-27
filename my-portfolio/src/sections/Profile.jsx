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
          "I'm a Frontend Developer with a positive mindset, solid communication skills, and the ability to collaborate with anyone I get the chance to work with. I transitioned into frontend because I enjoy the adaptability that comes with the process of building a product and collaborating with others to achieve set goals. I thrive in environments where I can be a pivotal part of a team and continue to learn along the way."}
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
