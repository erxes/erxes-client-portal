import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Categories from './containers/CategoryList';
import queryString from 'query-string';
import Details from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';
import CategoryDetail from './containers/CategoryDetail';
import { getEnv } from '../../apolloClient';

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
      <Categories
        queryParams={queryParams}
        history={history}
        topicId={REACT_APP_TOPIC_ID}
      />
  );
};

const categoryDetail = ({ location, history, match }) => {
  const queryParams = queryString.parse(location.search);
  const { searchValue } = queryParams;
  const categoryId = match.params.id;

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
      <CategoryDetail
        queryParams={queryParams}
        history={history}
        categoryId={categoryId}
        topicId={REACT_APP_TOPIC_ID}
      />
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