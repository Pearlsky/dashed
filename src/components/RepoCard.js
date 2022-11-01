import "./RepoCard.scss";

import gitLogoSmall from "../assets/github-inverted.svg";
import { Link } from "react-router-dom";

export default function RepoCard({ name, desc, created }) {
  return (
    <article className="repo-card-content">
      <div>
        <div className="repo-card-heading">
          <div className="repo-card__icon"></div>
          <h3>{name}</h3>
        </div>

        <div className="repo-card-desc">
          <p>
            {desc
              ? desc
              : "This repository currently has no veiwable description"}
          </p>
        </div>
      </div>

      <div className="repo-card-footer">
        <p className="repo-card__date">{`Created ${new Date(
          created
        ).toLocaleDateString("en-us", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}`}</p>
        <Link
          to={{ pathname: `/repo/${name}` }}
          className="repo-card__link"
        >
          <img alt="" src={gitLogoSmall} />
        </Link>
      </div>
    </article>
  );
}
