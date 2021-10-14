import classNames from 'classnames';
import dayjs from 'dayjs';
import React from 'react';
import { AvatarSection, Content, CreatedDate, InfoSection } from './styles';

interface IProps {
  notification: any;
}

class NotificationRow extends React.Component<IProps> {
  render() {
    const { notification } = this.props;
    const { isRead } = notification;
    const classes = classNames({ unread: !isRead });

    return (
      <li className={classes}>
        <InfoSection>
          <Content
            dangerouslySetInnerHTML={{ __html: notification.title }}
            isList={true}
          />
          <CreatedDate isList={false}>
            {dayjs(notification.date).format('DD MMM YYYY, HH:mm')}
          </CreatedDate>
        </InfoSection>
      </li>
    );
  }
}

export default NotificationRow;
