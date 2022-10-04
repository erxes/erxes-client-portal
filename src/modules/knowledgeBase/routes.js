import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Categories from './containers/CategoryList';
import queryString from 'query-string';
import Details from './containers/ArticleDetail';
import Layout from '../layouts/components/Layout';
import ArticleList from './containers/ArticleList';
import CategoryDetail from './containers/CategoryDetail';
import { getEnv } from '../../apolloClient';

const { REACT_APP_TOPIC_ID } = getEnv();

const articleDetails = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);
  const { searchValue } = queryParams;
  if (searchValue) {
    return (
      <Layout headingSpacing={false}>
        <ArticleList
          topicId={REACT_APP_TOPIC_ID}
          history={history}
          searchValue={searchValue}
        />
      </Layout>
    );
  }

  return (
    <Layout headingSpacing={false} forms={[
      {
        brand_id: "mwNwqL",
        form_id: "SRsHPN",
      },
      {
        brand_id: "ASJrzQ",
        form_id: "vQyp4C",
      },
    ]}>
      <Details
        queryParams={queryParams}
        history={history}
        location={location}
      />
    </Layout>
  );
};

const categories = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);
  const { searchValue } = queryParams;

  if (searchValue) {
    return (
      <Layout headingSpacing={true}>
        <ArticleList
          topicId={REACT_APP_TOPIC_ID}
          history={history}
          searchValue={searchValue}
        />
      </Layout>
    );
  }
  return (
    <Layout headingSpacing={true}>
      <Categories
        queryParams={queryParams}
        history={history}
        topicId={REACT_APP_TOPIC_ID}
      />
    </Layout>
  );
};

const categoryDetail = ({ location, history, match }) => {
  const queryParams = queryString.parse(location.search);
  const { searchValue } = queryParams;
  const categoryId = match.params.id;

  if (searchValue) {
    return (
      <Layout headingSpacing={false}>
        <ArticleList
          topicId={REACT_APP_TOPIC_ID}
          history={history}
          searchValue={searchValue}
        />
      </Layout>
    );
  }

  return (
    <Layout headingSpacing={false}>
      <CategoryDetail
        queryParams={queryParams}
        history={history}
        categoryId={categoryId}
        topicId={REACT_APP_TOPIC_ID}
      />
    </Layout>
  );
};

const index = () => {
  return <Redirect to={`/knowledge-base`} />;
};

const routes = () => [
  <Route exact path="/" key="root" render={index} />,
  <Route
    path="/knowledge-base"
    exact
    key="knowledge-base"
    render={categories}
  />,
  <Route
    path="/knowledge-base/category/details/:id"
    exact
    key="knowledge-base-category-details/:id"
    render={categoryDetail}
  />,
  <Route
    path="/knowledge-base/article/detail"
    exact
    key="knowledge-base/article/detail"
    render={articleDetails}
  />
];

export default routes;