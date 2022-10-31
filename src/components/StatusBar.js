import "./StatusBar.scss";

export default function StatusBar() {
  return (
    <section className="stats-panel">
      <div className="stats-intro">
        <h3 className="stats-intro__head">Repositories at a glance</h3>
        <p className="stats-intro__subhead">Get a quick overview of how your repositories are performing</p>
      </div>

      <div className="stats-details">
        <article className="stats-detail">
            <span className="stats-detail__icon total"></span>
            <span className="stats-detail__title">Total</span>
            <span className="stats-detail__figure">0</span>
        </article>
        <article className="stats-detail">
            <span className="stats-detail__icon public"></span>
            <span className="stats-detail__title">Public</span>
            <span className="stats-detail__figure">0</span>
        </article>
        <article className="stats-detail">
            <span className="stats-detail__icon private"></span>
            <span className="stats-detail__title">Private</span>
            <span className="stats-detail__figure">0</span>
        </article>
      </div>
    </section>
  );
}
