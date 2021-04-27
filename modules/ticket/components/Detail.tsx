import React from 'react';
import { TextArea } from '../../common/form/styles';
import {
  TicketRow,
  TicketLabel,
  TicketContent,
  TicketComment,
} from '../../styles/tickets';
import { IUser } from '../../types';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import dayjs from 'dayjs';

type Props = {
  item?: any;
  currentUser: IUser;
  onClose: () => void;
  handleSubmit: ({
    content,
    email,
  }: {
    content: string;
    email: string;
  }) => void;
};

export default class TicketDetail extends React.Component<
  Props,
  { content: string }
> {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  renderRow = (label: string, text: string) => {
    return (
      <TicketRow>
        <TicketLabel>{label}</TicketLabel>
        <TicketContent>{text}</TicketContent>
      </TicketRow>
    );
  };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  createComment = (email: string) => {
    this.props.handleSubmit({ content: this.state.content, email });

    this.setState({ content: '' });
  };

  render() {
    const currentUser = this.props.currentUser || ({} as IUser);
    const { item, onClose } = this.props;
    const email = currentUser.email;

    if (!item) {
      return null;
    }

    const comments = item.comments || [];

    const content = () => (
      <>
        {this.renderRow('Ticket name:', item.name)}
        {this.renderRow('Requestor:', email)}
        {this.renderRow('Priority:', item.priority)}
        {this.renderRow('Description:', item.description)}

        <TicketRow>
          <TicketLabel>Activity:</TicketLabel>
          <TicketContent>
            <TextArea
              onChange={this.handleChange}
              placeholde="comment ..."
              value={this.state.content}
            />

            <Button
              btnStyle="success"
              size="small"
              onClick={this.createComment.bind(this, email)}
            >
              Reply
            </Button>

            <br />
            <br />

            {comments.map((comment) => (
              <TicketComment key={comment._id}>
                <span>
                  {dayjs(comment.createdAt).format('YYYY-MM-DD HH:mm')}
                </span>
                <div dangerouslySetInnerHTML={{ __html: comment.content }} />
              </TicketComment>
            ))}
          </TicketContent>
        </TicketRow>
      </>
    );

    return <Modal content={content} onClose={onClose} isOpen={item} />;
  }
}
