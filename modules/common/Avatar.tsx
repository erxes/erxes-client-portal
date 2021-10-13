import React from "react";
import { IUser, IUserDetails } from "../types";
import dayjs from "dayjs";
import { Avatars } from "../knowledgeBase/components/styles";

type Props = {
  user: IUser;
  date: Date;
};

export default function Avatar({ user = {} as IUser, date }: Props) {
  const { details = {} as IUserDetails } = user;
  const { fullName, avatar } = details;

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
        <div> Нийтлэсэн: &nbsp;{fullName}</div>
        <div>
          Огноо: &nbsp;
          <span>{dayjs(date).format("MMM D YYYY")}</span>
        </div>
      </div>
    </Avatars>
  );
}
