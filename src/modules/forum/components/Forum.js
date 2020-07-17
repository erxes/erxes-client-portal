import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
class Forum extends React.Component {
  renderReply() {
    return (
      <div className="topic-post topic-reply">
        <div className="author-avatar">
          <img alt="avatar" src="https://avatars.discourse.org/v4/letter/j/d9b06d/45.png" />
        </div>
        <div className="topic-content">
          <Row>
            <Col>
              <h5 className="author-name">JohnSmith</h5>
            </Col>
            <Col>
              <div className="date">Feb 13, 2020</div>
            </Col>
          </Row>

          <div className="content">
            In the topic list, I see a list of anywhere from one to five avatar images next to each
            topic. Why are these 5 folks selected to appear here? Is it just the avatars of the last
            5 people to post in the topic?
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="forum-page topic">
        <Row>
          <Col md={9} sm={12}>
            <div className="topic-header">
              <h2 className="page-title"> Single Forum example</h2>
              <Row className="detail-row">
                <Col className="categories">
                  <Link to="/#">General</Link>
                  <Link to="/#">Jquery</Link>
                  <Link to="/#">PHP</Link>
                </Col>
                <Col className="counts">
                  <span>10.5k views</span>
                  <span>1.5k comments</span>
                </Col>
              </Row>
            </div>
            <div className="topic-post">
              <div className="author-avatar">
                <img alt="avatar" src="https://avatars.discourse.org/v4/letter/j/d9b06d/45.png" />
              </div>
              <div className="topic-content">
                <Row>
                  <Col>
                    <h5 className="author-name">JohnSmith</h5>
                  </Col>
                  <Col>
                    <div className="date">Feb 13, 2020</div>
                  </Col>
                </Row>

                <div className="content">
                  In the topic list, I see a list of anywhere from one to five avatar images next to
                  each topic. Why are these 5 folks selected to appear here? Is it just the avatars
                  of the last 5 people to post in the topic?
                </div>
                <div className="topic-details">
                  <Row>
                    <Col className="detail-item">
                      <h6>created</h6>
                      <span>Feb '13</span>
                    </Col>
                    <Col className="detail-item">
                      <h6>last reply</h6>
                      <span>Aug '13</span>
                    </Col>
                    <Col className="detail-item">
                      <h6>replies</h6>
                      <span>13</span>
                    </Col>
                    <Col className="detail-item">
                      <h6>views</h6>
                      <span>123</span>
                    </Col>
                    <Col className="detail-item">
                      <h6>users</h6>
                      <span>3</span>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            {this.renderReply()}
            {this.renderReply()}
            {this.renderReply()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forum;
