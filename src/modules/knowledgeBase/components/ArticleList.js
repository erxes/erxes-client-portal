import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../../../src/assets/images/avatar.svg";
import { ReactComponent as Emptybox } from "../../../../src/assets/images/empty-box.svg";

class Lists extends React.Component {
  
  renderSearchResult = () => {
    const { searchValue, articles } = this.props;

    if (!searchValue) {
      return null;
    }

    if (articles.length === 0) {
      return;
    }

    return (
      <span className="search-result">
      Search result for: <b>{searchValue}</b>
    </span>
    );
  };
  
  renderArticles = () =>{
    const { articles, catId ,searchValue} = this.props;

    if (!articles) {
      return null;
    }

    if( articles.length === 0){
      return(
         <div className="empty-box">
          <Emptybox />
          <span className="search-result">
          We couldn't find any articles for: <b>{searchValue}</b>
          </span>
         </div>
      )
    }

    return (
     articles.reverse().map( article => (
      <Link
      to={`/knowledge-base/article/detail?catId=${catId}&_id=${article._id}`}
      key={article._id}
    >
      <div className="kbase-lists card tab-content">
        <h5>{article.title}</h5>
        <p>{article.summary}</p>
        <div className="article-desc ">
          <img
            className="round-img"
            alt="#"
            src={
              (article.createdUser.details.avatar || []).length === 0
                ? Avatar
                : article.createdUser.details.avatar
            }
          />
          <div>
            <p>
            Written by:{" "}
              <strong>
                {article.createdUser.details.fullName}
              </strong>
            </p>
            <p>
            Modified:{" "}
              <strong>{article.modifiedDate.slice(0, 10)}</strong>
            </p>
          </div>
        </div>
      </div>
    </Link>
     ))
    )
  }

  render() {
    return (
      <Container className="knowledge-base">
        <Row>
          <Col>
            {this.renderSearchResult()}
            {this.renderArticles()}
          </Col>
        </Row>
      </Container>
    );
  }
}

Lists.propTypes = {
  articles: PropTypes.array
};

export default Lists;