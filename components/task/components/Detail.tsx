import React from 'react';
import Modal, { closeStyle } from 'simple-react-modal';
import { ModalWrapper } from '../../styles/main';

type Props = {
  item?: any;
  onClose: () => void;
};

export default class App extends React.Component<Props, { show: boolean }> {
  constructor(props) {
    super(props);

    this.state = { show: false };
  }

  componentDidUpdate(prevProps: Props) {
    const item = this.props.item;

    if (item && prevProps.item !== item) {
      this.setState({ show: true });
    }
  }

  show() {
    this.setState({ show: true });
  }

  close() {
    this.setState({ show: false });
    this.props.onClose();
  }

  render() {
    const item = this.props.item || {};

    return (
      <ModalWrapper show={this.state.show} onClick={this.close.bind(this)}>
        <Modal
          className="client-modal"
          closeOnOuterClick={true}
          show={this.state.show}
          onClose={this.close.bind(this)}
        >
          <a style={closeStyle} onClick={this.close.bind(this)}>
            X
          </a>

          <h4> {item.name}</h4>
          <br />
          {item.description}
        </Modal>
      </ModalWrapper>
    );
  }
}
