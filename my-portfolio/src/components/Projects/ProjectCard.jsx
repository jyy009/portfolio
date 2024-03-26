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
        <div className="proj-card-container" key={repo.id}>
          <p>{repo.name}</p>
          <p>Description of repo goes here</p>
        </div>
      ))}
    </div>
  );
};
