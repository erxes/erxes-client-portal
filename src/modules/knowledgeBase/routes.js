import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Categories from './containers/CategoryList';
import queryString from 'query-string';
import Details from './containers/ArticleDetail';
import ArticleList from './containers/ArticleList';
import CategoryDetail from './containers/CategoryDetail';

const { REACT_APP_TOPIC_ID } = process.env;

const articleDetails = ({ history, location }) => {
  const queryParams = queryString.parse(location.search);

  return <Details queryParams={queryParams} history={history} />;
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
  <Route exact={true} path="/" key="root" render={index} />,
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
    path="/knowledge-base-detail"
    exact
    key="knowledge-base-detail"
    render={articleDetails}
  />,
];

export default routes;
