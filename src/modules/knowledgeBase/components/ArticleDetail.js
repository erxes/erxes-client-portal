import React from "react";
import classNames from "classnames";
import * as dayjs from "dayjs";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import SectionHeader from "../../common/components/SectionHeader";

class Detail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReaction: "",
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

    const reactionClassess = classNames("reactions", {
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
                    ? "active"
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

  avatarDetail = () => {
    return (
      <div className="avatarDetails avatars">
        <div className="detail avatar-info">
          <img
            className="round-img"
            alt={this.getUserDetails().fullName}
            src={this.getUserDetails().avatar}
            width="42px"
            height="42px"
          />

          <Col>
            <div> Нийтэлсэн: {this.getUserDetails().fullName}</div>

            <div>
              Өөрчилсөн:
              <span>
                {dayjs(this.props.articleDetail.modifiedDate).format(
                  " MMM D YYYY"
                )}
              </span>
            </div>
          </Col>
        </div>
      </div>
    );
  };

  render() {
    const { articleDetail, category } = this.props;

    return (
      <Container className="knowledge-base" fluid="sm">
        <SectionHeader
          title={articleDetail.title}
          catTitle={category.title}
          catId={category._id}
        />

        <div className="card article-detail">
          <Row>
            <Col md={12}>
              <div className="kbase-detail kbase-lists">
                <Row>
                  <Col md="9">
                    <h4>{articleDetail.title}</h4>
                  </Col>
                </Row>
                {this.avatarDetail()}

                <hr />
                <div className="content">
                  <p>{articleDetail.summary}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: articleDetail.content,
                    }}
                  />
                </div>
              </div>
              {this.renderReactions()}
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

Detail.propTypes = {
  kbTopic: PropTypes.object,
};

export default Detail;
