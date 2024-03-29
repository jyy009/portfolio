import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { Image } from "../components/Image";
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
        <Text text={"+46 73 655 7156"} elementClassName={"phonenumber"} />
        <Text text={"yoo.ji.yg@gmail.com"} elementClassName={"email"} />
      </div>
    </div>
  );
};
