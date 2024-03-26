export const Button = ({ iconUrl, iconAlt, text }) => {
  return(
    <button>
    <img
    src={iconUrl} alt={iconAlt} />
    {text}
    </button>
  )
}