import React from "react";

const CreateButton = props => {
  return (
    <div className="create-bar">
      <button onClick={props.onClick} className="btn btn-create">
        <i className="icon-plus-1"></i> {props.value}
      </button>
    </div>
  );
};

export default CreateButton;
