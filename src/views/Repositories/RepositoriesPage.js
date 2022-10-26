import RepoCard from "../../components/RepoCard";

export function RepoList({ data }) {
  return (
    <section>
      <ul className="repo-card-list">
        {data.map((repo) => {
          return (
            <li className="repo-card-item" key={repo.id}>
              <RepoCard
                name={repo.name}
                desc={repo.description}
                created={repo.created_at}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default function RepositoriesPage() {
    return <main></main>;
}