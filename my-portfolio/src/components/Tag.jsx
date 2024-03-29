import "./Tag.css";

export const Tag = ({ elementClassName, key, tag }) => {
  return (
      <span className={elementClassName} key={key}>
        {tag}</span>
  )
};
