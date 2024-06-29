import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Image } from "../../components/Image";
import repoImages from "./repoImages.json";
import { Headline } from "../../components/Headline";
import { Text } from "../../components/Text";

export const ProjectsCard = ({ repositories }) => {
  const excludeWords = ["portfolio", "mongo-api-frontend"];
  const excludeRegex = new RegExp(excludeWords.join("|"), "i");

  const filteredRepo = repositories
    .filter((repos) => repos.name.includes("project"))

    .filter((repo) => !excludeRegex.test(repo.name))
    .sort((a, b) => {
      const repoA = new Date(a.created_at);
      const repoB = new Date(b.created_at);

      return repoB - repoA;
    });

  console.log(filteredRepo);

  const uppercaseTags = ["html5", "css3", "css", "api"];

  const toUppercaseTags = (word) => {
    if (uppercaseTags.includes(word)) {
      return word.toUpperCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div className="project-card-container">
      {filteredRepo.map((repo) => {
        const repoImage = repoImages.find((img) => img.repoName === repo.name);

        return (
          <div className="card-wrapper" key={repo.id}>
            <Image
              section={"image-project"}
              link={repoImage?.imageUrl}
              imgAltText={"photo of project"}
            />
            <div className="proj-content-container">
              <Headline
                elementClassName={"proj-card-name"}
                text={repo.name.replace("project", "").replace(/-/g, " ")}
              />
              <Text
                elementClassName={"proj-card-description"}
                text={repo.description}
              />
              <div className="proj-tags-row">
                {repo.topics.map((topic, index) => (
                  <Tag
                    elementClassName={"proj-tags"}
                    key={index}
                    tag={toUppercaseTags(topic)}
                  />
                ))}
              </div>

              <div className="proj-button-row">
                <Button
                  webUrl={repo.homepage}
                  section={"button-project"}
                  linkName={"link-project"}
                  iconUrl={"/Icons/globe.svg"}
                  iconAlt={"globe"}
                  text={"Live demo"}
                />
                <Button
                  webUrl={repo.html_url}
                  section={"button-project"}
                  linkName={"link-project"}
                  iconUrl={"/Icons/github.svg"}
                  iconAlt={"octocat"}
                  text={"View code"}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
