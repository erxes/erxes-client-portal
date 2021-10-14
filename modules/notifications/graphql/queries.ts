const notificationFields = `
  _id
  notifType
  title
  link
  content
  action
  receiver
  date
  isRead
`;

const listParamsDef = `
  $limit: Int,
  $page: Int,
  $perPage: Int,
  $requireRead: Boolean,
  $title: String,
`;

const listParamsValue = `
  limit: $limit,
  page: $page,
  perPage: $perPage,
  requireRead: $requireRead,
  title: $title,
`;

const notifications = `
  query notifications {
    notifications {
      ${notificationFields}
    }
  }
`;

const notificationCounts = `
  query notificationCounts($requireRead: Boolean) {
    notificationCounts(requireRead: $requireRead)
  }
`;

export default {
  notifications,
  notificationCounts
};
