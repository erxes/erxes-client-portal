import React from 'react';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Details from '../components/TicketDetail';
import { queries } from '../graphql/index';

class DetailContainer extends React.Component {
  render() {
    const { getTicketDetailQuery, getLabelsQuery } = this.props;

    if (getTicketDetailQuery.loading || getLabelsQuery.loading) {
      return <div></div>;
    }

    const labels = getLabelsQuery.widgetsPipelineLabels || {};
    const ticketDetail = getTicketDetailQuery.widgetsTicketDetails || {};
    return <Details ticketDetail={ticketDetail} labels={labels} />;
  }
}

DetailContainer.propTypes = {
  getTicketDetailQuery: PropTypes.object
};

export default compose(
  graphql(gql(queries.getTicketDetailQuery), {
    name: 'getTicketDetailQuery',
    options: ({ _id }) => ({
      variables: { _id }
    })
  }),
  graphql(gql(queries.getLabelsQuery), {
    name: 'getLabelsQuery'
  })
)(DetailContainer);
