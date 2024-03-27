export const Button = ({ iconUrl, iconAlt, text }) => {
  return(
    <div>
    <button>
    <img
    src={iconUrl} alt={iconAlt} />
    {text}
    </button>
    </div>
  )
}