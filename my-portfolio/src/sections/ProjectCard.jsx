import { Tag } from "../components/Tag";
import { Button } from "../components/Button";


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
          <Button />
        </div>
      ))}
    </div>
  );
};
