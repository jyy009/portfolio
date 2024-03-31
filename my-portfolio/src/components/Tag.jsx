import "./Tag.css";

export const Tag = ({ elementClassName, index, tag }) => {
  return (
    <span className={elementClassName} key={index}>
      {tag}
    </span>
  );
};
