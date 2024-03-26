export const Image = ({ divClassName, elementClassName, link, imgAltText }) => {
  return (
    <div className={divClassName}>
      <img className={elementClassName} src={link} alt={imgAltText} />
    </div>
  );
};
