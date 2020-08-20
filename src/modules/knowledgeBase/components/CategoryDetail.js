import React from 'react';
import * as dayjs from 'dayjs';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SectionHeader from '../../common/components/SectionHeader';
import ActionRow from '../../common/components/ActionRow';
import Search from '../../common/components/Search';
import ArticleList from './ArticleList';

class CategoryDetail extends React.Component {
  handleClick = () => {
    console.log('faq');
  };

  render() {
    return (
      <Container className="knowledge-base">
        <SectionHeader
          icon={this.props.category.icon}
          title={this.props.category.title}
          description={this.props.category.description}
        />

        <Row>
          <Col md={9}>
            <ArticleList
              articles={this.props.category.articles}
              history={this.props.history}
            ></ArticleList>
          </Col>
          <Col md={3}>
            <div className="tags sidebar-list">
              <h6>Categoryies</h6>
              <ul>
                <li className="active">
                  <h6>
                    <i className="icon-flag"></i>Features
                  </h6>
                  <p>
                    Explore the power of erxes features through different use
                    cases
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="icon-diamond"></i>Milestones
                  </h6>
                  <p>
                    Learn about the terms and conditions of the rewards program.
                  </p>
                </li>
                <li>
                  <h6>
                    <i className="icon-book"></i>User guides
                  </h6>
                  <p>
                    Read how-to guides and articles on how to use each erxes
                    feature
                  </p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

CategoryDetail.propTypes = {
  kbTopic: PropTypes.object,
};

export default CategoryDetail;
