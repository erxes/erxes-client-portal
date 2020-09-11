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
    isComplete
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
    attachments{
      url
      name
      type
      size
    }
    labels{
      _id
      name
      colorCode
      pipelineId
      createdBy
      createdAt 
    }
    isComplete
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
