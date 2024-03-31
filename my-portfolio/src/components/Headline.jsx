import "./Headline.css";

export const Headline = ({ text, elementClassName }) => {
  return <h2 className={elementClassName}>{text}</h2>;
};
