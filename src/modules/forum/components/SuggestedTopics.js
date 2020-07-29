import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Form from './Form';
class SuggestedTopics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  handleClick = () => {
    console.log('forum');
  };
  renderItem(title) {
    return (
      <li className="forum-item">
        <Link to="/forums/forum">
          <h4>{title}</h4>
        </Link>
        <div className="reply">
          <Link to="/#" className="forum-author">
            Uuganbayar
          </Link>
          replied 15 mins ago
          <span className="reply-count">&#8226; 5 replies</span>
        </div>
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
      </li>
    );
  }
  render() {
    const { showModal } = this.state;
    return (
      <div className="forum-page">
        <ul className="forum-list">
          {this.renderItem('Reasonable Visual Designer and Inventor')}
          {this.renderItem('Former Planner of AR Massacres')}
          {this.renderItem('Idiot of Design Reclusivity')}
        </ul>
        <Form showModal={showModal} hideModal={this.hideModal} />
      </div>
    );
  }
}

export default SuggestedTopics;
