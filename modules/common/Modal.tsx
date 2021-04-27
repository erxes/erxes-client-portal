import React from 'react';
import Modal from 'simple-react-modal';
import Icon from './Icon';
import { ModalWrapper, ModalClose } from '../styles/main';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  content: ({ closeModal }: { closeModal: () => void }) => React.ReactNode;
};

export default class TikcetDetail extends React.Component<
  Props,
  { show: boolean }
> {
  constructor(props) {
    super(props);

    this.state = { show: props.isOpen || false };
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    const { onClose } = this.props;

    this.setState({ show: false });

    if (onClose) {
      onClose();
    }
  }

  render() {
    const { content } = this.props;

    return (
      <ModalWrapper>
        <Modal
          className="client-modal"
          show={this.state.show}
          closeOnOuterClick={true}
          onClose={() => this.close.bind(this)}
        >
          <div className="modal-content">
            <ModalClose onClick={() => this.close.bind(this)}>
              <Icon icon="times" />
            </ModalClose>

            {content({ closeModal: this.close })}
          </div>
        </Modal>
      </ModalWrapper>
    );
  }
}
