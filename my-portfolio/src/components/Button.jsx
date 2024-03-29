import "./Button.css"

export const Button = ({ section, iconUrl, iconAlt, text }) => {
  return (
      <button className={`${section}`}>
        <img src={iconUrl} alt={iconAlt} />
        {text}
      </button>
  );
};
