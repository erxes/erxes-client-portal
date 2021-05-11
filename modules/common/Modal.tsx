import React from "react";
import Modal from "simple-react-modal";
import Icon from "./Icon";
import { ModalWrapper, ModalClose } from "../styles/main";

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  content: ({ closeModal }: { closeModal: () => void }) => React.ReactNode;
};

export default class ModalComponent extends React.Component<
  Props,
  { show: boolean }
> {
  constructor(props) {
    super(props);

    this.state = { show: props.isOpen || false };
  }

  onCancel = () => {
    const { onClose } = this.props;

    this.setState({ show: false });

    if (onClose) {
      onClose();
    }
  };

  render() {
    const { content } = this.props;

    return (
      <ModalWrapper>
        <Modal
          className="client-modal"
          closeOnOuterClick={true}
          show={this.state.show}
          onClose={this.onCancel}
        >
          <div className="modal-content">
            <ModalClose onClick={this.onCancel}>
              <Icon icon="times" />
            </ModalClose>

            {content({ closeModal: this.onCancel })}
          </div>
        </Modal>
      </ModalWrapper>
    );
  }
}
