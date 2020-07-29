import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
const FormComponent = props => {
  const { showModal, hideModal } = props;
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={hideModal}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>Create / Edit </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Type title here" />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" placeholder="Optional tags" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="8" placeholder="Type here" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="primary">Create / Edit forum</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormComponent;
