import React from 'react';
import Layout from '../../modules/main/containers/Layout';
import List from '../../modules/notifications/containers/NotificationList';

function Ticket() {
  return (
    <Layout>
      {props => {
        return <List {...props} />;
      }}
    </Layout>
  );
}

export default Ticket;
