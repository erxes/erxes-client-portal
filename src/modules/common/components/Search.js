import React from "react";

const Search = props => {
  return (
    <div className="search-container">
      <div className={`search ${props.sidebar && `sidebar-search`}`}>
        <input placeholder="Search" />
        <i className="icon-search"></i>
      </div>
    </div>
  );
};

export default Search;
