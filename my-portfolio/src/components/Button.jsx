import "./Button.css";

export const Button = ({
  webUrl,
  linkName,
  section,
  iconUrl,
  iconAlt,
  text,
}) => {
  return (
    <a className={`${linkName}`} href={webUrl} target="_blank">
      <button className={`${section}`}>
        <img src={iconUrl} alt={iconAlt} />
        {text}
      </button>
    </a>
  );
};
