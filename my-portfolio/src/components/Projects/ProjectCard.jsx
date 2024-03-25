import { useState, useEffect } from 'react'

export const ProjectCard = () => {
  const [repos, setRepos] = useState([])
  
  const url = "https://api.github.com/users/jyy009/repos"

  const fetchProjects = () => {
    fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error ("Error fetching projects");
      }
      return res.json()
      })
    .then ((data) => {
      setRepos(data)
    })
    .catch((error) => {
      console.log(error.message)
    })
    }
  
  
  
  return(

  )
}