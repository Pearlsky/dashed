import { Routes, Route} from "react-router-dom";
import "./RepoPage.scss";


export default function IndividualRepoPage() {
    return (
        <section className="tab-main">
            <Routes>
                <Route path=":name" element={<IndividualRepo/>}/>
            </Routes>
        </section>
    )
}
export function IndividualRepo() {
  return (
    <section className="repo-main tab-main">
      <header>
        <div></div>
        <h2>hello-world</h2>
      </header>
      <div className="repo-ph"></div>
      <section className="repo-about">
        <h4>about</h4>
        <p className="repo-about__desc"></p>
        <div className="repo-stats"></div>
      </section>
      <section className="repo-ors">
        <div className="repo-ors__releases">
          <h4>packages</h4>
          <p><span>No releases published</span><button>Create a new release</button></p>
        </div>
        <div className="repo-ors__packages">
          <h4>packages</h4>
          <p><span>No packages published</span><button>Publish your first package</button></p>
        </div>
      </section>
    </section>
  );
}
