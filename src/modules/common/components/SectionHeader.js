import React from "react";
import { Link } from "react-router-dom";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <Link to={`/knowledge-base`}>
        <div className="item">All categories</div>
      </Link>
      <i class="icon-chevron"> </i>
      <div className="item">{props.title}</div>
    </div>
  );
};

export default SectionHeader;
