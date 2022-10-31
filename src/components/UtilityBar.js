import "./UtilityBar.scss"

export function SearchBar() {
  return (
    <label htmlFor="search-input" className="util-search">
      <div className="util-search__icon"></div>
      <input
        id="search-input"
        className="util-search__input"
        type="text"
        placeholder="Search..."
      />
    </label>
  );
}

export default function UtilityBar() {
  return (
    <section className="util-panel">
      <SearchBar />
      <div className="util-setting">
        <button className="btn-settings">settings</button>
      </div>
    </section>
  );
}