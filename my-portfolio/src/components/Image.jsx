export const Image = ({ section, link, imgAltText }) => {
  return <img className={`${section}`} src={link} alt={imgAltText} />;
};
