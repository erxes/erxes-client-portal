import React from 'react';
import { Modal } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as RTG from 'react-transition-group';

class ModalTrigger extends React.Component {
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
    const { title, ignoreTrans } = this.props;

    return (
      <Modal.Header closeButton={true}>
        <Modal.Title>{ignoreTrans ? title : title}</Modal.Title>
      </Modal.Header>
    );
  };

  render() {
    const {
      trigger,
      size,
      dialogClassName,
      content,
      backDrop,
      enforceFocus,
      onExit,
      paddingContent,
      centered
    } = this.props;

    const { isOpen } = this.state;

    // add onclick event to the trigger component
    const triggerComponent = trigger
      ? React.cloneElement(trigger, {
          onClick: this.openModal
        })
      : null;

    return (
      <>
        {triggerComponent}

        <Modal
          dialogClassName={dialogClassName}
          size={size}
          show={isOpen}
          onHide={this.closeModal}
          backdrop={backDrop}
          enforceFocus={enforceFocus}
          onExit={onExit}
          animation={false}
          centered={centered}
        >
          {this.renderHeader()}
          <Modal.Body className={paddingContent}>
            <RTG.Transition in={isOpen} timeout={300} unmountOnExit={true}>
              {content({ closeModal: this.closeModal })}
            </RTG.Transition>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default withRouter(ModalTrigger);
