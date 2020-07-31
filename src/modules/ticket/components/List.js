import React from "react";
import { Container, Row, Col, Card, Modal, Form } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";
import Search from "../../common/components/Search";
import { Link } from "react-router-dom";
// import EmptyState from "../../common/components/EmptyState";
// import { Form as FormModal } from "../../forum/components/Form";
class Lists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      updateTicket: false
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
      <Col lg={6}>
        <Card onClick={this.handleShow}>
          <div className="ticket-card-sidebar">
            <img
              src="https://avatars2.githubusercontent.com/u/26920801?s=400&u=bf32fd45a94fa6d1eaf74535dd374c96921af423&v=4"
              alt="avatar"
            />
            <span className="due-date"> Aug 20</span>
          </div>
          <div className="ticket-card">
            <h5>[Extra Development] Mera.mn MEPA XXK</h5>
            <p>
              In the topic list, I see a list of anywhere from one to five
              avatar images next to each topic.
            </p>
            <time>Last updated: 2020.07.27</time>
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
        {/* <ActionRow value='Create Ticket' onClick={this.formShow} /> */}

        {/* <EmptyState
          title="No tickets assigned to you"
          description="There are no tickets "
        /> */}
        <Row>
          <Col md={9}>
            <div className="ticket-lists">
              <Row>
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
                {this.renderCard()}
              </Row>
            </div>
          </Col>
          <Col md={3}>
            <Search sidebar={true} />
            <div className="tags sidebar-list">
              <h6>Labels</h6>
              <ul>
                <li className="active">All</li>
                <li>Finished</li>
                <li>High Priority</li>
                <li>Medium priority</li>
                <li>Low priority</li>
                <li>Bug</li>
                <li>Enhancement</li>
                <li>New Feature</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={showModal}
          onHide={this.handleClose}
          size="lg"
          className="ticket-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h5>
                <i className="icon-atm-card"></i> [Extra Development] Mera.mn
                MEPA XXK
              </h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={8}>
                <div className="due-date">
                  <span>Aug 20</span>
                </div>
                <div className="label ticket-items">
                  <label>
                    <i className="icon-label-alt"></i> Labels
                  </label>
                  <Col className="categories">
                    <Link to="/#">General</Link>
                    <Link to="/#">Jquery</Link>
                    <Link to="/#">PHP</Link>
                  </Col>
                </div>
                <div className="attachments ticket-items">
                  <label>
                    <i className="icon-paperclip"></i> Attachments
                  </label>
                </div>
                <div className="description ticket-items">
                  <label>
                    <i className="icon-align-left-justify"></i> Description
                  </label>
                  <p>
                    Гэрээний дугаар 28/19 Ажил эхлэх хугацаа 2020/03/23 2 сарын
                    3-ны байдлаар: 2 сарын 5-ны байдлаар дизайнаа батлана. 2
                    сарын 7-нд явцын мөнгөө төлчихвөл 2 сарын 8-наас
                    хөгжүүлэлтийн ажлыг эхлүүлэх шаардлагатай: - Хөгжүүлэлт 18
                    өдөр - Агуулга 2 өдөр - Алдаагаа засах - 7 өдөр - Сургах,
                    хүлээлцэх - 1 өдөр Ууганаа хийнэ
                  </p>
                </div>
                <div className="activity ticket-items">
                  <label>
                    <i className="icon-align-left-justify"></i> Activity
                  </label>
                  <div className="create-activity">
                    <img
                      src="https://avatars2.githubusercontent.com/u/26920801?s=400&u=bf32fd45a94fa6d1eaf74535dd374c96921af423&v=4"
                      alt="avatar"
                    />
                    <Form.Group>
                      <Form.Control
                        type="text"
                        placeholder="Leave comment..."
                      />
                    </Form.Group>
                  </div>
                </div>
                {/* <div className="activities">
                  <ul>
                    <li></li>
                  </ul>
                </div> */}
              </Col>
              <Col md={4}></Col>
            </Row>
          </Modal.Body>
        </Modal>
        <Form showModal={updateTicket} hideModal={this.formClose} />
      </Container>
    );
  }
}

export default Lists;
