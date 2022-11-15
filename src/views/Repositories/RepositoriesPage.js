import { useState, useEffect } from "react";

import { InfinitySpin } from "react-loader-spinner";

import Pagination from "../../components/Pagination";
import RepoCard from "../../components/RepoCard";
import StatusBar from "../../components/StatusBar";

import "./RepoPage.scss";

export default function RepositoriesPage({ owner }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(6);

  useEffect(() => {
    const fetchRepos = () => {
      fetch(`https://api.github.com/users/${owner}/repos`)
        .then((response) => response.json())
        .then((data) => {
          setRepos(data);
          setLoading(false);
        })
        .catch(() => {
          throw new Error();
        });
    };
    fetchRepos();
  }, [owner]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  return (
    <>
      <main className="repos-main tab-main">
        <StatusBar totalRepos={repos.length} />
        <RepoList data={currentRepos} loading={loading} />
        <Pagination
          repos={repos}
          reposPerPage={reposPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </>
  );
}

export function RepoList({ data, loading }) {
  if (loading) {
    return (
      <section className="repos-loader">
        <InfinitySpin color="rgb(2, 126, 197)" width="200" />
      </section>
    );
  }

  return (
    <section>
      <ul className="repos">
        {data.map((repo) => {
          return (
            <li className="repo-card" key={repo.id}>
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
