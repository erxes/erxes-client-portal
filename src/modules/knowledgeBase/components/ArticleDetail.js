import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../common/components/SectionHeader';
import Vote from '../../common/components/Vote';

class Detail extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  getUserDetails = () => {
    const { articleDetail } = this.props;
    const { createdUser } = articleDetail;
    const { details } = createdUser;
    const authorDetails = details;
    return authorDetails;
  };

  leftSide = () => {
    return (
      <div className="post-details">
        <div>
          <div>
            <img
              className="round-img"
              alt={this.getUserDetails().fullName}
              src={this.getUserDetails().avatar}
              width="40"
              height="40"
            />
          </div>
          authored by <p>{this.getUserDetails().fullName}</p>
        </div>
        <div>
          created at{' '}
          <p>
            {dayjs(this.props.articleDetail.createdDate).format('MMM D YYYY')}
          </p>
        </div>
        <div>
          Modified
          <p>
            <time>
              {dayjs(this.props.articleDetail.modifiedDate).format(
                'MMM D YYYY'
              )}
            </time>
          </p>
        </div>
        <div className="vote-bar">
          votes
          <p>
            <span>
              <i className="icon-like"></i>16
            </span>
            <span>
              <i className="icon-dislike"></i>2
            </span>
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader icon="flag" title="Creating your first workspace" />

        <Row>
          <Col md={12}>
            <div className="kbase-detail kbase-lists">
              <Row>
                <Col md="9">
                  <h4>{this.props.articleDetail.title}</h4>
                </Col>
              </Row>
              {this.leftSide()}

              <hr />
              <div className="content">
                <p>{this.props.articleDetail.summary}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: this.props.articleDetail.content,
                  }}
                />
              </div>
            </div>
            <Vote />
          </Col>
        </Row>
      </Container>
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object,
};

export default Detail;
