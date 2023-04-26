export default function SearchBar() {
  return (
    <div className="search-bar">
      <div id="menu-toggle" className="search-bar__menu-toggle"></div>
      <div className="search-bar__search">
        <input className="text" type="text" placeholder="Search ..." />
      </div>
  </div>
  );
}
