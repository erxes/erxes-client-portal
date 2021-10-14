import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { queries } from '../graphql';
import List from '../components/NotificationList';

function NotificationList() {
  const { loading, data = {}, error } = useQuery(gql(queries.notifications));

  const updatedProps = {
    loading,
    notifications: data.notifications || []
  };

  return <List {...updatedProps} />;
}

export default NotificationList;
