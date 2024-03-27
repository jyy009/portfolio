import { Headline } from "../components/Headline";
import { Paragraph } from "../components/Paragraph";
import { Image } from "../components/Image";

export const Contact = () => {
  return (
    <>
      <Headline text={"Let's talk"} elementClassName={"contact-header"} />
      <Image
        section={"contact"}
        link={"/Icons/headshot.png"}
        imgAltText={"headshot"}
      />
      <Paragraph text={"Ji Yoo"} elementClassName={"name"} />
      <Paragraph text={"+46 73 655 7156"} elementClassName={"phonenumber"} />
      <Paragraph text={"yoo.ji.yg@gmail.com"} elementClassName={"email"} />
    </>
  );
};
