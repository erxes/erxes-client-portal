import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import * as dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Label } from '../styles';
import urlParser from '../../common/utils/urlParser';
import { CloseDate } from '../styles';
// import EmptyState from "../../common/components/EmptyState";
// import { Form as FormModal } from "../../forum/components/Form";
class Lists extends React.Component {
  readFile = (value) => {
    if (!value || urlParser.isValidURL(value) || value.includes('/')) {
      return value;
    }

    const { REACT_APP_API_URL } = process.env;

    return `${REACT_APP_API_URL}/read-file?key=${value}`;
  };

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

  render() {
    const { ticketDetail } = this.props;
    const { labels, createdUser, attachments } = ticketDetail;

    return (
      <Container className='knowledge-base'>
        <Row>
          <Col md={10}>
            <div className='due-date'>
              {ticketDetail.closeDate && (
                <CloseDate
                  color={this.generateDueDateColor(
                    ticketDetail.closeDate,
                    ticketDetail.isComplete
                  )}
                >
                  {dayjs(ticketDetail.closeDate).format('MMM DD')}
                </CloseDate>
              )}
            </div>

            <div className='label ticket-items'>
              <label>
                <i className='icon-label-alt'></i> Labels
              </label>

              {labels.map((label) => {
                return (
                  <Col className='categories' key={label._id}>
                    <Label color={label.colorCode}>
                      <Link to='' type='button'>
                        {label.name}
                      </Link>
                    </Label>
                  </Col>
                );
              })}
            </div>
            <div className='attachments ticket-items'>
              <div>
                <label>
                  <i className='icon-paperclip'></i> Attachments
                </label>
              </div>

              {attachments.map((el) => (
                <div key={el.size} className='attachment'>
                  <div className='attachment-pic'>
                    <img alt='picture' src={this.readFile(el.url)}></img>
                  </div>
                  <div className='attachment-text'>
                    <h5>
                      <span>{el.name}</span>
                    </h5>
                    <div>
                      <span className='attachment-description'>
                        {' '}
                        size: {Math.floor(el.size / 1000)}kB
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
                  src={createdUser.details.avatar}
                  alt={createdUser.details.fullName}
                />
                <Form.Group>
                  <Form.Control
                    type='textcol-md-9'
                    placeholder='Leave comment...'
                  />
                </Form.Group>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Lists;
