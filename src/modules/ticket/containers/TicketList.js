import React from 'react';
import TicketList from '../components/TicketList';
import PropTypes from 'prop-types';
import * as compose from 'lodash.flowright';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { queries } from '../graphql/index';

class ListContainer extends React.Component {
  render() {
    const { getTicketQuery, getLabelsQuery, labelId, searchValue } = this.props;

    if (getTicketQuery.loading || getLabelsQuery.loading) {
      return <div>loading</div>;
    }

    const tickets = getTicketQuery.widgetsTickets || [];

    const labels = getLabelsQuery.widgetsPipelineLabels || [];

    return (
      <TicketList
        tickets={tickets}
        labels={labels}
        labelId={labelId}
        searchValue={searchValue}
      />
    );
  }
}

ListContainer.propTypes = {
  getTicketQuery: PropTypes.object,
  getLabelsQuery: PropTypes.object
};

export default compose(
  graphql(gql(queries.getTicketQuery), {
    name: 'getTicketQuery',
    options: ({ searchValue, labelId }) => {
      return {
        variables: { labelId, searchString: searchValue || '' }
      };
    }
  }),
  graphql(gql(queries.getLabelsQuery), {
    name: 'getLabelsQuery'
  })
)(ListContainer);
