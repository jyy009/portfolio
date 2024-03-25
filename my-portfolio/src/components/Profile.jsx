export const Profile = ({ name, title, about, image }) => {
  return (
    <div className="bio-container">
      <img src={image} alt="profile image" />
      <p>Hi, I'm {name}</p>
      <h1>{title}</h1>
      <p>{about}</p>
    </div>
  )

}

