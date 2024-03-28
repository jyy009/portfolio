import "./Text.css"

export const Text = ({ text, elementClassName }) => {
  return <p className={elementClassName}>{text}</p>;
};
