import React from 'react';
import classNames from 'classnames';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import SectionHeader from '../../common/components/SectionHeader';

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReaction: '',
    };
  }

  onReactionClick = (reactionChoice) => {
    this.setState({ activeReaction: reactionChoice });
  };

  getUserDetails = () => {
    const { articleDetail } = this.props;
    const { createdUser } = articleDetail;
    const { details } = createdUser;
    const authorDetails = details;
    return authorDetails;
  };

  renderReactions() {
    const { articleDetail } = this.props;

    if (
      !articleDetail ||
      (articleDetail.reactionChoices &&
        articleDetail.reactionChoices.length === 0)
    ) {
      return null;
    }

    const reactionClassess = classNames('reactions', {
      clicked: this.state.activeReaction,
    });

    return (
      <div className="feedback">
        <div className={reactionClassess}>
          {(articleDetail.reactionChoices || []).map(
            (reactionChoice, index) => (
              <span
                key={index}
                className={
                  reactionChoice === this.state.activeReaction
                    ? 'active'
                    : undefined
                }
                onClick={this.onReactionClick.bind(this, reactionChoice)}
              >
                <img alt={index} src={reactionChoice} />
              </span>
            )
          )}
        </div>
      </div>
    );
  }

  leftSide = () => {
    return (
      <div className="avatarDetails">
        <div className="detail">
          <img
            className="round-img"
            alt={this.getUserDetails().fullName}
            src={this.getUserDetails().avatar}
            width="42px"
            height="42px"
          />

          <Col>
            <div> Written by: {this.getUserDetails().fullName}</div>

            <div>
              Modified:
              <span>
                {dayjs(this.props.articleDetail.modifiedDate).format(
                  ' MMM D YYYY'
                )}
              </span>
            </div>
          </Col>
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
            {this.renderReactions()}
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
