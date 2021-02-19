import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import { ApiApolloClientContext } from '../../ApiContext';
import ArticleDetail from '../components/ArticleDetail';
import { articleDetailQuery } from '../graphql/queries';

type Props = {
  queryParams: any;
};

function ArticleDetailContainer({ queryParams: { id }, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

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
