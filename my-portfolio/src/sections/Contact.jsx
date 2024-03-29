import { Title } from "../components/Title";
import { Text } from "../components/Text";
import { Image } from "../components/Image";

export const Contact = () => {
  return (
    <>
      <Title text={"Let's talk"} elementClassName={"contact-header"} />
      <Image
        section={"contact"}
        link={"/Icons/headshot.svg"}
        imgAltText={"headshot"}
      />
      <Text text={"Ji Yoo"} elementClassName={"name"} />
      <Text text={"+46 73 655 7156"} elementClassName={"phonenumber"} />
      <Text text={"yoo.ji.yg@gmail.com"} elementClassName={"email"} />
    </>
  );
};
