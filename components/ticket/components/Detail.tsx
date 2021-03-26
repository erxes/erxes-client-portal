import React from 'react';
import { TextArea } from '../../common/form/styles';
import { TicketRow, TicketLabel, TicketContent } from '../../styles/tickets';
import { IUser } from '../../types';
import Button from '../../common/Button';
import Modal from '../../common/Modal';

type Props = {
  item?: any;
  currentUser: IUser;
  onClose: () => void;
};

export default class TicketDetail extends React.Component<Props> {
  renderRow = (label: string, text: string) => {
    return (
      <TicketRow>
        <TicketLabel>{label}</TicketLabel>
        <TicketContent>{text}</TicketContent>
      </TicketRow>
    );
  };

  render() {
    const currentUser = this.props.currentUser || ({} as IUser);
    const { item, onClose } = this.props;

    if (!item) {
      return null;
    }

    const content = () => (
      <>
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
      </>
    );

    return <Modal content={content} onClose={onClose} isOpen={item} />;
  }
}
