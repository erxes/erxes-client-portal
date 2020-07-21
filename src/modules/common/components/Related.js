import React from "react";
import { Link } from "react-router-dom";
const Related = () => {
  return (
    <div className="vote-container">
      <span>
        {" "}
        <i className="icon-file"></i> Related Articles
      </span>
      <ul className="related-articles">
        <li>
          <Link to="/knowledge-base-detail">Creating your First Workspace</Link>
        </li>
        <li>
          <Link to="/knowledge-base-detail">
            {" "}
            Creating your Creating your Creating your Workspace
          </Link>
        </li>
        <li>
          <Link to="/knowledge-base-detail">Creating your First Workspace</Link>
        </li>
        <li>
          <Link to="/knowledge-base-detail">Creating your First Workspace</Link>
        </li>
      </ul>
    </div>
  );
};

export default Related;
