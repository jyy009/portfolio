import "./Socials.css";

export const Socials = ({ section, socialUrl, imgUrl, imgAltText }) => {
  return (
    <a className={`${section}`} href={socialUrl} target="_blank">
      <img src={imgUrl} alt={imgAltText} />
    </a>
  );
};
