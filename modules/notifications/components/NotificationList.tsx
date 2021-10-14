import React from 'react';
import NotificationRow from './NotificationRow';
import { NotifList } from './styles';

type Props = {
  notifications: any[];
  loading: boolean;
};

type State = {
  filterByUnread: boolean;
};

class NotificationList extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = { filterByUnread: true };
  }

  render() {
    const { notifications } = this.props;

    return (
      <NotifList>
        {notifications.map((notif, key) => (
          <NotificationRow notification={notif} key={key} isList={true} />
        ))}
      </NotifList>
    );
  }
}

export default NotificationList;
