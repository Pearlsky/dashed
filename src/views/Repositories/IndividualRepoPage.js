import { Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./RepoPage.scss";

export default function IndividualRepoPage({ owner }) {
  return (
    <section className="tab-main">
      <Routes>
        <Route path=":name" element={<IndividualRepo owner={owner} />} />
      </Routes>
    </section>
  );
}
export function IndividualRepo({ owner }) {
  const [repo, setRepo] = useState("");
  const { name } = useParams();

  useEffect(() => {
    const fetchRepo = () => {
      fetch(`https://api.github.com/repos/${owner}/${name}`)
        .then((response) => response.json())
        .then((data) => {
          setRepo(data);
        })
        .catch(() => {
          throw new Error();
        });
    };
    fetchRepo();
  }, [owner, name]);

  return (
    <main className="repo-main tab-main">
      <header className="repo-header">
        <div className="repo-header__icon"></div>
        <h2>{repo.full_name}</h2>
      </header>
      <div className="repo-bg"></div>
      <section className="repo-about">
        <h4 className="repo-about__heading">about</h4>
        <p className="repo-about__desc">
          {repo.description
            ? repo.description
            : "This repository currently has no viewable description"}
        </p>
        {repo.topics ? (
          repo.topics.length !== 0 ? (
            <ul className="repo-about__tags">
              {repo.topics.map((topic, index) => (
                <li key={`topic-${index}`} className="repo-about__tag">
                  {topic}
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
        <div className="repo-stats">
          <div className="repo-stat">
            <span className="repo-stars__icon"></span>
            <span>{repo.stargazers_count} stars</span>
          </div>
          <div className="repo-stat">
            <span className="repo-forks__icon"></span>
            <span>{repo.forks_count} forks</span>
          </div>
        </div>
      </section>
      <section className="repo-addons">
        <div className="repo-addon">
          <h4>releases</h4>
          <p>
            <span>No releases published</span>
            <button className="repo-addon__link">Create a new release</button>
          </p>
        </div>
        <div className="repo-addon">
          <h4>packages</h4>
          <p>
            <span>No packages published</span>
            <button className="repo-addon__link">
              Publish your first package
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}
