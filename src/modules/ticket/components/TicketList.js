import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import * as dayjs from 'dayjs';
import SectionHeader from '../../common/components/SectionHeader';
import { Link } from 'react-router-dom';
import ModalTrigger from '../../common/components/ModalTrigger';
import TicketDetail from '../containers/TicketDetail';
import { DueDate } from '../styles';
// import { Form as FormModal } from "../../forum/components/Form";
class Lists extends React.Component {
  isActive = (labelId) => {
    if (labelId === this.props.labelId) {
      return 'active';
    }

    if (!this.props.labelId && !labelId) {
      return 'active';
    }

    return;
  };

  renderLable() {
    const { labels } = this.props;
    if (labels) {
      return labels.map((lab) => {
        return (
          <Link key={lab._id} to={`/tickets?labelId=${lab._id}`}>
            <li className={this.isActive(lab._id)}>{lab.name}</li>
          </Link>
        );
      });
    }
  }
  generateDueDateColor = (closeDate, isComplete) => {
    let colorCode = '';

    if (isComplete) {
      colorCode = '#50d14d';
    } else if (closeDate) {
      const now = new Date();
      const oneDay = 24 * 60 * 60 * 1000;

      if (new Date(closeDate).getTime() - now.getTime() < oneDay) {
        colorCode = '#f8d773';
      }
    }

    return colorCode;
  };

  renderCard() {
    const { tickets } = this.props;
    if (tickets) {
      return tickets.map((ticket) => {
        const { createdUser } = ticket;
        const ticketId = ticket._id;
        const companyForm = () => {
          return <TicketDetail _id={ticketId} />;
        };

        return (
          <ModalTrigger
            key={ticket._id}
            title={ticket.name}
            trigger={
              <Col lg={6}>
                <Card>
                  <div className='ticket-card-sidebar'>
                    <img src={createdUser.details.avatar} alt='avatar' />
                    {ticket.closeDate && (
                      <DueDate
                        color={this.generateDueDateColor(
                          ticket.closeDate,
                          ticket.isComplete
                        )}
                      >
                        {dayjs(ticket.closeDate).format('MMM DD')}
                      </DueDate>
                    )}
                  </div>
                  <div className='ticket-card'>
                    <h5>{ticket.name}</h5>
                    <p>{ticket.description}</p>
                    <time>{dayjs(ticket.modifiedAt).format('MMM D YYYY')}</time>
                  </div>
                </Card>
              </Col>
            }
            size='lg'
            content={companyForm}
            className='ticket-modal'
          />
        );
      });
    }
  }

  render() {
    return (
      <Container className='knowledge-base'>
        <SectionHeader icon='copy' title='Ticket' />

        <Row>
          <Col md={9}>
            <div className='ticket-lists'>
              <Row>{this.renderCard()}</Row>
            </div>
          </Col>
          <Col md={3}>
            <div className='tags sidebar-list'>
              <h6>Labels</h6>
              <ul>
                <Link to='/tickets'>
                  <li className={this.isActive()}>All</li>
                </Link>
                {this.renderLable()}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lists;
