import { Image } from "../components/Image";
import { Paragraph } from "../components/Paragraph";
import { Headline } from "../components/Headline";

export const Profile = () => {
  return (
    <div className="profile-container">
      <Image
        section={"profile"}
        link={"/Icons/headshot.png"}
        imgAltText={"headshot"}
      />
      <Paragraph elementClassName={"name"} text={"Hi, I'm Ji Yoo "} />
      <Headline elementClassName={""} text={"Frontend Developer"} />
      <Paragraph elementClassName={""} text={"Add about me info here"} />
    </div>
  );
};
