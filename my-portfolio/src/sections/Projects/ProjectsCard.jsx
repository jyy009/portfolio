import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import repoImages from "./repoImages.json";

export const ProjectsCard = ({ repositories }) => {
  const filteredRepo = repositories
    .filter((repos) => repos.name.includes("project"))

    .sort((a, b) => {
      const repoA = new Date(a.created_at);
      const repoB = new Date(b.created_at);

      return repoB - repoA;
    });

  console.log(filteredRepo);

  return (
    <div className="project-card-container">
      {filteredRepo.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);

        return (
          <div className="project-card-info" key={repo.id}>
            <Image
              section={"project"}
              link={repoImage?.imageUrl}
              imageAltText={repo.name}
            />
            <p>{repo.name.replace("project", "").replace(/-/g, " ")}</p>
            <p>{repo.description}</p>

            {repo.topics.map((topic) => (
              <div key={topic}>
                <Tag tag={topic} />
              </div>
            ))}
            <Button
              section={"button-project"}
              iconUrl={"/Icons/globe.svg"}
              iconAlt={"globe"}
              text={"Live demo"}
            />
            <Button
              section={"button-project"}
              iconUrl={"/Icons/github.svg"}
              iconAlt={"octocat"}
              text={"Live demo"}
            />
          </div>
        );
      })}
    </div>
  );
};
