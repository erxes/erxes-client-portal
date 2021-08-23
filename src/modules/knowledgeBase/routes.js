import React from 'react';
import queryString from 'query-string';
import { getEnv } from '../../apolloClient';
import { Redirect, Route } from 'react-router-dom';
import Categories from './containers/CategoryList';
import Details from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';
import CategoryDetail from './containers/CategoryDetail';
import Layout from '../layouts/components/Layout';

const { REACT_APP_TOPIC_ID } = getEnv();


const articleDetails = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);
  const { searchValue } = queryParams;
  if (searchValue) {
    return (
        <ArticleList
          topicId={REACT_APP_TOPIC_ID}
          history={history}
          searchValue={searchValue}
        />
    );
  }

  return (
      <Details
        queryParams={queryParams}
        history={history}
        location={location}
      />
  );
};

const categories = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);
  const { searchValue } = queryParams;

  if (searchValue) {
    return (
        <ArticleList
          topicId={REACT_APP_TOPIC_ID}
          history={history}
          searchValue={searchValue}
        />
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
