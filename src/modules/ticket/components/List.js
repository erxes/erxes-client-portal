import React from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";
import ActionRow from "../../common/components/ActionRow";
// import EmptyState from "../../common/components/EmptyState";
class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  renderCard() {
    return (
      <Col md={4}>
        <Card onClick={this.handleShow}>
          <div className="ticket-card">
            <h5>Your ticket</h5>
            <p>description here</p>
          </div>
        </Card>
      </Col>
    );
  }
  render() {
    const { showModal } = this.state;
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="copy" title="Ticket" />
        <ActionRow value="Create Ticket" onClick={this.handleClick} />
        {/* <EmptyState
          title="No tickets assigned to you"
          description="There are no tickets "
        /> */}
        <div className="ticket-lists">
          <Row>
            {this.renderCard()}
            {this.renderCard()}
            {this.renderCard()}
            {this.renderCard()}
          </Row>
        </div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={this.handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Lists;
