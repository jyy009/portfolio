import "./Headline.css"

export const Headline = ({ text, elementClassName }) => {
  return <h1 className={elementClassName}>{text}</h1>;
};
