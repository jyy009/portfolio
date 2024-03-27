import { Tag } from "../components/Tag";
import { Button } from "../components/Button";
import { Image } from "../components/Image";
import repoImages from "./repoImages.json"

export const ProjectCard = ({ repositories }) => {
  const filteredRepo = repositories
    .filter((repo) => repo.name.includes("project"))

    .sort((a, b) => {
      const repoA = new Date(a.created_at);
      const repoB = new Date(b.created_at);

      return repoB - repoA;
    });

  console.log(filteredRepo);

  return (
    <div>
      {filteredRepo.map((repo) => (
        <div className="proj-info" key={repo.id}>
          const repoImage = repoImages.find((img) => img.repoName === repo.name)
          
          <Image 
          divClassName={"proj-image-section"}
          elementClassName={"proj-image"}

          />
          <p>{repo.name}</p>
          <p>{repo.description}</p>

          {repo.topics.map((topic) => (
            <div key={topic}>
              <Tag tag={topic} />
            </div>
          ))}

          <Button
            iconUrl={"/Icons/globe.svg"}
            iconAlt={"globe"}
            text={"Live demo"}
          />
          <Button 
          iconUrl={"/Icons/github.svg"}
          iconAlt={"octocat"}
          text={"Live demo"}
          />
        </div>
      ))}
    </div>
  );
};
