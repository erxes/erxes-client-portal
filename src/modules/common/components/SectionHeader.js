import React from "react";
const SectionHeader = props => {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <i className={`icon-${props.icon}`}></i> {props.title}
      </h2>
      {props.description && <p>{props.description}</p>}
    </div>
  );
};

export default SectionHeader;
