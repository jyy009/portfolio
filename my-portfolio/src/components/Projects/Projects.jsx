import { useState, useEffect } from "react";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState();

  const url = "https://api.github.com/users/jyy009/repos";

  const fetchProjects = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching projects");
        }
        return res.json();
      })
      .then((data) => {
        setProjectData(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="project-container">
      <ProjectHeader text={"Featured Projects"} />

      {error ? <p>Error: {error.message} </p> : <ProjectCard 
        repositories={projectData}
      />}
    </div>
  );
};
