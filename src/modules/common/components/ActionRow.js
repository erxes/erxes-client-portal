import React, { useState } from "react";
import Alert from "./Alert";

const ActionRow = props => {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className="action-bar">
      <button onClick={props.onClick} className="btn btn-create">
        <i className="icon-plus-1"></i> {props.value}
      </button>
      {/* <button onClick={props.onClick} className="btn btn-edit">
        <i className="icon-edit"></i>
      </button>
      <button onClick={() => setShowAlert(true)} className="btn btn-delete">
        <i className="icon-trash"></i>
      </button> */}
      <Alert showAlert={showAlert} hideAlert={() => setShowAlert(false)} />
    </div>
  );
};

export default ActionRow;
