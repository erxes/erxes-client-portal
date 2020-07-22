import React from "react";

const EmptyState = props => {
  return (
    <div className="empty-state">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default EmptyState;
