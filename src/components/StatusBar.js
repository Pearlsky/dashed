export default function StatusBar() {
  return (
    <section className="stats-panel">
      <div className="stats-intro">
        <h3>Repositories in a glance</h3>
        <p>Get a quick grasp of how your repositories are performing</p>
      </div>

      <div className="stats-details">
        <article className="stats__detail">
            <span className="stats-detail__icon"></span>
            <span className="stats-detail__title">Total</span>
            <span className="stats-detail__figure"></span>
        </article>
        <article className="stats__detail">
            <span className="stats-detail__icon"></span>
            <span className="stats-detail__title">Public</span>
            <span className="stats-detail__figure"></span>
        </article>
        <article className="stats__detail">
            <span className="stats-detail__icon"></span>
            <span className="stats-detail__title">Private</span>
            <span className="stats-detail__figure"></span>
        </article>
      </div>
    </section>
  );
}
