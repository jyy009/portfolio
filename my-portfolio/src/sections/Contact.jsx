import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { Image } from "../components/Image";
import { Socials } from "../components/Socials";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <Title text={"Let's talk"} elementClassName={"contact-title"} />
      <Image
        section={"contact-img"}
        link={"/Icons/headshot.svg"}
        imgAltText={"headshot"}
      />
      <div className="contact-details">
        <Text text={"Ji Yoo"} elementClassName={"name"} />
        <Text text={"+46 (0)73 655 7156"} elementClassName={"phonenumber"} />
        <Text text={"yoo.ji.yg@gmail.com"} elementClassName={"email"} />
      </div>
      <div className="socials-wrapper">
        <Socials
          section={"social-link"}
          socialUrl={"https://www.linkedin.com/in/jyy/"}
          imgUrl={"/Icons/linkedin.svg"}
          imgAltText={"linkedin logo"}
        />
        <Socials
          section={"social-link"}
          socialUrl={"https://github.com/jyy009"}
          imgUrl={"/Icons/gitcontact.svg"}
          imgAltText={"linkedin logo"}
        />
      </div>
    </div>
  );
};
