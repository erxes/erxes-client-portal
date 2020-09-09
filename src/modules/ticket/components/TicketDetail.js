import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import * as dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Label } from '../styles';
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

  closeModal = () => {
    this.setState({ showModal: false });
  };

  formShow = () => {
    this.setState({ updateTicket: true });
  };

  formClose = () => {
    this.setState({ updateTicket: false });
  };

  render() {
    const { updateTicket } = this.state;

    const { ticketDetail } = this.props;

    const { labels } = ticketDetail;

    return (
      <Container className='knowledge-base'>
        <Row>
          <Col md={8}>
            <div className='due-date'>
              <span>{dayjs(ticketDetail.closeDate).format('MMM DD')}</span>
            </div>
            <div className='label ticket-items'>
              <label>
                <i className='icon-label-alt'></i> Labels
              </label>

              {labels.map((label) => {
                return (
                  <Col className='categories'>
                    <Label color={label.colorCode}>
                      {' '}
                      <Link>{label.name}</Link>
                    </Label>
                  </Col>
                );
              })}
            </div>
            <div className='attachments ticket-items'>
              <label>
                <i className='icon-paperclip'></i> Attachments
              </label>
            </div>
            <div className='description ticket-items'>
              <label>
                <i className='icon-align-left-justify'></i> Description
              </label>
              <p>{ticketDetail.description}</p>
            </div>
            <div className='activity ticket-items'>
              <label>
                <i className='icon-align-left-justify'></i> Activity
              </label>
              <div className='create-activity'>
                <img
                  src={ticketDetail.createdUser.details.avatar}
                  alt={ticketDetail.createdUser.details.fullName}
                />
                <Form.Group>
                  <Form.Control type='text' placeholder='Leave comment...' />
                </Form.Group>
              </div>
            </div>
          </Col>
        </Row>

        <Form showModal={updateTicket} hideModal={this.formClose} />
      </Container>
    );
  }
}

export default Lists;
