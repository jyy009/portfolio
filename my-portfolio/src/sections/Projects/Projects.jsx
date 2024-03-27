import { useState, useEffect } from "react";
import { Headline } from "../../components/Headline";
import { ProjectsCard } from "./ProjectsCard";

export const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState();

  const url = "https://api.github.com/users/jyy009/repos";

  const fetchProjects = async () => {
    await fetch(url)
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
      <Headline text={"Featured Projects"} />

      {error ? (
        <p>Error: {error.message} </p>
      ) : (
        <ProjectsCard repositories={projectData} />
      )}
    </div>
  );
};
