import React from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import SectionHeader from '../../common/components/SectionHeader';
import ActionRow from '../../common/components/ActionRow';
import Search from '../../common/components/Search';
// import EmptyState from "../../common/components/EmptyState";
import Form from '../../forum/components/Form';
class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      updateTicket: false,
    };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  formShow = () => {
    this.setState({ updateTicket: true });
  };

  formClose = () => {
    this.setState({ updateTicket: false });
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
    const { showModal, updateTicket } = this.state;
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="copy" title="Ticket" />
        <ActionRow value="Create Ticket" onClick={this.formShow} />
        <Search />
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
        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ticket title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Гэрээний дугаар 28/19 Ажил эхлэх хугацаа 2020/03/23 2 сарын 3-ны байдлаар: 2 сарын 5-ны байдлаар дизайнаа
            батлана. 2 сарын 7-нд явцын мөнгөө төлчихвөл 2 сарын 8-наас хөгжүүлэлтийн ажлыг эхлүүлэх шаардлагатай: -
            Хөгжүүлэлт 18 өдөр - Агуулга 2 өдөр - Алдаагаа засах - 7 өдөр - Сургах, хүлээлцэх - 1 өдөр Ууганаа хийнэ
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
        <Form showModal={updateTicket} hideModal={this.formClose} />
      </Container>
    );
  }
}

export default Lists;
