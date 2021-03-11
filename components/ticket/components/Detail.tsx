import React from 'react';
import Modal, { closeStyle } from 'simple-react-modal';
import { TextArea } from '../../common/form/styles';
import { ModalWrapper } from '../../styles/main';
import { TicketRow, TicketLabel, TicketContent } from '../../styles/tickets';
import { IUser } from '../../types';
import Button from '../../common/Button';

type Props = {
  item?: any;
  currentUser: IUser;
  onClose: () => void;
};

export default class TaskDetail extends React.Component<
  Props,
  { show: boolean }
> {
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

  renderRow = (label: string, text: string) => {
    return (
      <TicketRow>
        <TicketLabel>{label}</TicketLabel>
        <TicketContent>{text}</TicketContent>
      </TicketRow>
    );
  };

  render() {
    const item = this.props.item || {};
    const currentUser = this.props.currentUser || ({} as IUser);

    return (
      <ModalWrapper show={this.state.show}>
        <Modal
          className="client-modal"
          closeOnOuterClick={true}
          show={this.state.show}
        >
          <a style={closeStyle} onClick={this.close.bind(this)}>
            X
          </a>

          {this.renderRow('Ticket name:', item.name)}
          {this.renderRow('Requestor:', currentUser.email)}
          {this.renderRow('Priority:', item.priority)}
          {this.renderRow('Description:', item.description)}

          <TicketRow>
            <TicketLabel>Activity:</TicketLabel>
            <TicketContent>
              <TextArea
                placeholde="comment ..."
                onEnter={e => console.log(e)}
              ></TextArea>
              <br />
              <Button btnStyle="success" size="small">
                Reply
              </Button>
            </TicketContent>
          </TicketRow>
        </Modal>
      </ModalWrapper>
    );
  }
}
