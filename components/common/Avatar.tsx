import React from 'react';
import { IUser } from '../types';
import dayjs from 'dayjs';
import { Avatars } from '../knowledgeBase/components/styles';

type Props = {
  user: IUser;
  date: string;
};

export default class Avatar extends React.Component<Props> {
  render() {
    const { details } = this.props.user;
    const { fullName, avatar } = details || {};

    return (
      <Avatars>
        <img
          className="round-img"
          alt={fullName}
          src={avatar}
          width="42px"
          height="42px"
        />
        <div className="detail avatar-info">
          <>
            <div> Written by: {fullName}</div>

            <div>
              Modified:
              <span>{dayjs(this.props.date).format(' MMM D YYYY')}</span>
            </div>
          </>
        </div>
      </Avatars>
    );
  }
}