import React from 'react';
import Modal, { closeStyle } from 'simple-react-modal';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const ModalWrapper = styledTS<{ show?: boolean }>(styled.div)`
  position: fixed;
  overflow: auto;
  z-index: 9;
  background: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: none;
  ${props => props.show && 'display: block;'}

  .client-modal {
    position: absolute;
    z-index: 99;
    width: 60%;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    left: 20%;
    top: 60px;
    padding: 10px;
  }
`;

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
      <ModalWrapper show={this.state.show}>
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
