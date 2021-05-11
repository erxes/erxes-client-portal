import React from "react";
import Modal from "../../common/Modal";
import { DetailContent } from "../../styles/tasks";

type Props = {
  item?: any;
  renderDate: (date: Date) => React.ReactNode;
  onClose: () => void;
};

export default class TaskDetail extends React.Component<Props> {
  render() {
    const { item, onClose, renderDate } = this.props;
    console.log(item);
    if (!item) {
      return null;
    }

    const content = () => (
      <DetailContent>
        <h4> {item.name}</h4>
        <div>Posted on {renderDate(item.createdAt)}</div>
        <p>{item.description}</p>
      </DetailContent>
    );

    return (
      <Modal content={content} onClose={onClose} isOpen={item ? true : false} />
    );
  }
}
