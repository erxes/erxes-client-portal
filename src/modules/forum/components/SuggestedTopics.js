import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Form from "./Form";
class SuggestedTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  handleClick = () => {
    console.log("forum");
  };
  renderItem(title, excerpt) {
    return (
      <li className="forum-item">
        <Link to="/forums/forum">
          <h5>{title}</h5>
        </Link>
        <p>{excerpt}</p>

        <Row className="detail-row">
          <Col md="auto" className="counts">
            <span>
              <i className="icon-heart-1"></i> 5
            </span>
            <span>
              <i className="icon-comment-1"></i> 3
            </span>
          </Col>
          <Col md="auto">
            <div className="reply">
              <Link to="/#" className="forum-author">
                <img
                  alt="avatar"
                  src="https://avatars.discourse.org/v4/letter/j/d9b06d/45.png"
                />
                Uuganbayar
              </Link>
              replied 15 mins ago
              <span className="reply-count">&#8226; 5 replies</span>
            </div>
          </Col>
          <Col className="categories">
            <Link to="/#">General</Link>
            <Link to="/#">Jquery</Link>
            <Link to="/#">PHP</Link>
          </Col>
        </Row>
      </li>
    );
  }
  render() {
    const { showModal } = this.state;
    return (
      <div className="forum-page">
        <Row>
          <Col md={9}>
            <ul className="forum-list">
              {this.renderItem(
                "Reasonable Visual Designer and Inventor",
                "In the topic list, I see a list of anywhere from one to five avatar images next to each topic."
              )}
              {this.renderItem(
                "Reasonable Visual Designer and Inventor",
                "In the topic list, I see a list of anywhere from one to five avatar images next to each topic."
              )}
              {this.renderItem(
                "Reasonable Visual Designer and Inventor",
                "In the topic list, I see a list of anywhere from one to five avatar images next to each topic."
              )}
            </ul>
          </Col>
        </Row>

        <Form showModal={showModal} hideModal={this.hideModal} />
      </div>
    );
  }
}

export default SuggestedTopics;
