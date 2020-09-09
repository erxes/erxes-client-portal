const getTicketQuery = `
query widgetsTickets($labelId: String, $searchString: String!) {
  widgetsTickets(labelId: $labelId, searchString: $searchString) {
    _id
    name
    modifiedBy
    modifiedAt
    closeDate
    description
    createdUser{
      _id
      username
      details{
        avatar
        fullName
        shortName
      }
    }
  }
}`;

const getTicketDetailQuery = `
query widgetsTicketDetails($_id: String) {
  widgetsTicketDetails(_id: $_id) {
    _id
    name
    modifiedBy
    modifiedAt
    closeDate
    description
    createdUser{
      _id
      username
      details{
        avatar
        fullName
        shortName
      }
    }
    labels{
      _id
      name
      colorCode
      pipelineId
      createdBy
      createdAt 
    }
  }
}`;

const getLabelsQuery = `
query widgetsPipelineLabels {
  widgetsPipelineLabels {
  _id
    name
    colorCode
    pipelineId
    createdBy
    createdAt
  }
}`;

export default { getTicketQuery, getLabelsQuery, getTicketDetailQuery };
