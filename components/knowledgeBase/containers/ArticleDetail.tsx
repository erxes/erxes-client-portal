import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { apiClient } from '../../apolloClient';
import ArticleDetail from '../components/ArticleDetail';
import { articleDetailQuery } from '../graphql/queries';

type Props = {
  queryParams: any;
};

function ArticleDetailContainer({ queryParams, ...props }: Props) {
  const { id } = queryParams;

  const { loading, data = {} } = id
    ? useQuery(gql(articleDetailQuery), {
        variables: { _id: id },
        client: apiClient,
        skip: !id
      })
    : { loading: true };


  const article = data.knowledgeBaseArticleDetail || {};

  const updatedProps = {
    ...props,
    loading,
    article
  };

  return <ArticleDetail {...updatedProps} />;
}

export default ArticleDetailContainer;
