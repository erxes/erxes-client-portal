import React from "react";
import { TextArea } from "../../common/form/styles";
import {
  TicketRow,
  TicketLabel,
  TicketContent,
  TicketComment,
  TicketDetailContent,
  Description,
  CommentWrapper,
  CreatedUser,
  CommentContent,
} from "../../styles/tickets";
import { IUser } from "../../types";
import Button from "../../common/Button";
import Modal from "../../common/Modal";
import dayjs from "dayjs";
import { FormWrapper } from "../../styles/main";
import PriorityIndicator from "../../common/PriorityIndicator";
import Icon from "../../common/Icon";

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
      content: "",
    };
  }

  renderContent(label, text) {
    switch (label) {
      case "Priority:":
        return (
          <>
            <PriorityIndicator value={text} /> {text}
          </>
        );
      case "Description:":
        return <Description>{text}</Description>;
      default:
        return text;
    }
  }

  renderRow = (icon: string, label: string, text: string) => {
    return (
      <TicketRow>
        <TicketLabel>
          <Icon icon={icon} size={14} /> {label}
        </TicketLabel>
        <TicketContent>{this.renderContent(label, text)}</TicketContent>
      </TicketRow>
    );
  };

  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };

  createComment = (email: string) => {
    this.props.handleSubmit({ content: this.state.content, email });

    this.setState({ content: "" });
  };

  renderComments(item) {
    const comments = item.comments || [];

    return (
      <CommentWrapper>
        {comments.map((comment) => (
          <TicketComment key={comment._id}>
            <CreatedUser>
              <img
                src="https://erxes.io/static/images/team/square/mungunshagai.jpg"
                alt="profile"
              />
              <div>
                <CommentContent>
                  <h5>Anu-ujin Bat-Ulzii</h5>
                  <div
                    className="comment"
                    dangerouslySetInnerHTML={{ __html: comment.content }}
                  />
                </CommentContent>
                <span>
                  Reported {dayjs(comment.createdAt).format("YYYY-MM-DD HH:mm")}
                </span>
              </div>
            </CreatedUser>
          </TicketComment>
        ))}
      </CommentWrapper>
    );
  }

  render() {
    const currentUser = this.props.currentUser || ({} as IUser);
    const { item, onClose } = this.props;
    const email = currentUser.email;

    if (!item) {
      return null;
    }

    const content = () => (
      <FormWrapper>
        <h4>{item.name}</h4>
        <TicketDetailContent>
          {this.renderRow("file-question-alt", "Requestor:", email)}
          {this.renderRow("chart-growth", "Priority:", item.priority)}
          {this.renderRow(
            "align-left-justify",
            "Description:",
            item.description
          )}

          <TicketRow>
            <TicketLabel>
              {" "}
              <Icon icon="puzzle" size={14} />
              &nbsp; Activity:
            </TicketLabel>
            <TicketContent>
              <TextArea
                onChange={this.handleChange}
                placeholder="Write comment..."
                value={this.state.content}
              />
              {this.state.content.length !== 0 && (
                <div className="buttons">
                  <Button
                    btnStyle="success"
                    size="small"
                    icon="message"
                    onClick={this.createComment.bind(this, email)}
                  >
                    Reply
                  </Button>
                </div>
              )}
              {this.renderComments(item)}
            </TicketContent>
          </TicketRow>
        </TicketDetailContent>
      </FormWrapper>
    );

    return (
      <Modal content={content} onClose={onClose} isFull={true} isOpen={item} />
    );
  }
}
