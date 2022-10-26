import repo from "../assets/repo.svg";
import gitLogoSmall from "../assets/github-inverted-24.svg";
// import { Link } from "react-router-dom";

function RepoCard({ name, desc, created }) {
  return (
    <article>
      <div className="repo-card-heading">
        <img alt="" src={repo} />
        <h3>{name}</h3>
      </div>

      <div className="repo-card-desc">
        <p>{desc === "" ? "This repository currently has no viewable description" : desc}</p>
      </div>

      <div className="repo-card-footer">
        <p className="repo-card__date">{`Created ${new Date(created).toDateString()}`}</p>
          <img alt="" src={gitLogoSmall} />
      </div>
    </article>
  );
}

export default RepoCard;