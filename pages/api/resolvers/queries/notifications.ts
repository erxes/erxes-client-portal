import Notifications from '../../db/models/Notifications';

const notificationQueries = {
  notifications(_root) {
    return Notifications.find().sort({ date: -1 });
  }
};

export default notificationQueries;
