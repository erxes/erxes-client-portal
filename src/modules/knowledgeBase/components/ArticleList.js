import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Emptybox} from '../../../../src/assets/images/empty-box.svg';

class Lists extends React.Component {
  renderSearchResult = () => {
    const { searchValue, articles } = this.props;

    if (!searchValue) {
      return null;
    }

    if (articles.length === 0) {
      return (
        <span className="search-result">
          We couldn't find any articles for: <b>{searchValue}</b>
        </span>
      );
    }

    return (
      <span className="search-result">
        Search result for: <b>{searchValue}</b>
      </span>
    );
  };

  render() {
    const { articles, catId } = this.props;
    return (
      <Container className="knowledge-base">
        <Row>
          <Col>
            {this.renderSearchResult()}
            {articles.length >0 ? articles.map(article => (
              <Link
                to={`/knowledge-base/article/detail?catId=${catId}&_id=${article._id}`}
                key={article._id}
              >
                <div className="kbase-lists card tab-content">
                  <h5>{article.title}</h5>
                  <p>{article.summary}</p>
                  <div className="article-desc ">
                    <img src={article.createdUser.details.avatar} alt="#"  />
                    <div>
                    <p>Нийтлэсэн: <strong>{article.createdUser.details.fullName}</strong></p>
                    <p>Огноо:  <strong>{(article.modifiedDate).slice(0,10)}</strong></p>
                    </div>   
                  </div>
                  
                </div>
              </Link>
            ))
            : <div className="empty-box"> <Emptybox/><span>Одоогоор энэ ангилалд нийтлэл байхгүй байна</span></div>}
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
