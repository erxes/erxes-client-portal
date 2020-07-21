import React from "react";

const ActionRow = props => {
  return (
    <div className="action-bar">
      <button onClick={props.onClick} className="btn btn-create">
        <i className="icon-plus-1"></i> {props.value}
      </button>
      <button onClick={props.onClick} className="btn btn-edit">
        <i className="icon-edit"></i>
      </button>
      <button onClick={props.onClick} className="btn btn-delete">
        <i className="icon-trash"></i>
      </button>
    </div>
  );
};

export default ActionRow;
