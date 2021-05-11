import React from "react";
import Modal from "../../common/Modal";

type Props = {
  item?: any;
  onClose: () => void;
};

export default class TaskDetail extends React.Component<Props> {
  render() {
    const { item, onClose } = this.props;

    if (!item) {
      return null;
    }

    const content = () => (
      <>
        <h4> {item.name}</h4>
        <br />
        {item.description}
      </>
    );

    return (
      <Modal content={content} onClose={onClose} isOpen={item ? true : false} />
    );
  }
}
