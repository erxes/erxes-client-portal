import React from 'react';
import { Modal } from 'react-bootstrap';
import Icon from './Icon';

type Props = {
  title: string;
  trigger?: React.ReactNode;
  autoOpenKey?: string;
  content: ({ closeModal }: { closeModal: () => void }) => React.ReactNode;
  size?: 'sm' | 'lg' | 'xl';
  backDrop?: 'static' | boolean;
  enforceFocus?: boolean;
  hideHeader?: boolean;
  isOpen?: boolean;
  centered?: boolean;
  onExit?: () => void;
  isAnimate?: boolean;
};

type State = {
  isOpen?: boolean;
  autoOpenKey?: string;
};

class ModalTrigger extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen || false,
      autoOpenKey: ''
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  renderHeader = () => {
    if (this.props.hideHeader) {
      return (
        <div onClick={this.closeModal}>
          <Icon icon="times" />
        </div>
      );
    }

    const { title } = this.props;

    return (
      <Modal.Header closeButton={true}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
    );
  };

  render() {
    const {
      trigger,
      size,
      content,
      backDrop,
      enforceFocus,
      onExit,
      centered,
      isAnimate = false
    } = this.props;

    const { isOpen } = this.state;

    // add onclick event to the trigger component
    const triggerComponent = trigger
      ? React.cloneElement(trigger as React.ReactElement<any>, {
          onClick: this.openModal
        })
      : null;

    return (
      <>
        {triggerComponent}

        <Modal
          size={size}
          show={isOpen}
          onHide={this.closeModal}
          backdrop={backDrop}
          enforceFocus={enforceFocus}
          onExit={onExit}
          animation={isAnimate}
          centered={centered}
        >
          {this.renderHeader()}
          <Modal.Body>{content({ closeModal: this.closeModal })}</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default ModalTrigger;
