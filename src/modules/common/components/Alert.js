import React from "react";
import { Modal, Button } from "react-bootstrap";
const Alert = props => {
  const { showAlert, hideAlert } = props;
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showAlert}
      onHide={hideAlert}
      className="alert-modal"
    >
      <Modal.Body>
        <i className="icon-checked-1"></i>
        <h5>Are you sure?</h5>
        <Button variant="secondary" onClick={hideAlert}>
          No
        </Button>
        <Button variant="primary" onClick={hideAlert}>
          Yes
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default Alert;
