import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = (props) => {
  const { title, catTitle, catId } = props;

  return (
    <div className="section-header">
      <Link to={`/knowledge-base`}>
        <div className="item">All categories</div>
      </Link>
      {catId && (
        <>
          <i className="icon-chevron"> </i>
          <Link to={`/knowledge-base/category/details/${catId}`}>
            <div className="item">{catTitle}</div>
          </Link>
        </>
      )}
      <i className="icon-chevron"> </i>
      <div className="item">{title}</div>
    </div>
  );
};

export default SectionHeader;
