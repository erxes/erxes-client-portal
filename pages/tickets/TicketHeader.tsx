import React from "react";
import { SearchContainer } from "../../modules/styles/main";
import Icon from "../../modules/common/Icon";
import { TicketHeaderWrapper } from "../../modules/styles/tickets";
import Button from "../../modules/common/Button";

type Props = {};

type State = {
  searchValue: string;
  focused: boolean;
};

export default class TicketHeader extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    const { searchValue } = props;

    this.state = {
      searchValue: searchValue || "",
      focused: false,
    };
  }

  componentWillReceiveProps(props) {
    const { searchValue } = props;

    this.setState({
      searchValue: searchValue || "",
    });
  }

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });
  };

  onSearch = () => {
    return;
  };

  onKeyDown = (e) => {
    return;
  };

  clearSearch = () => {
    this.setState({ searchValue: "" });
  };

  onFocus = () => {
    this.setState({ focused: true });
  };

  onBlur = () => {
    this.setState({ focused: false });
  };

  render() {
    const { searchValue, focused } = this.state;

    return (
      <TicketHeaderWrapper>
        <SearchContainer focused={focused}>
          <Icon icon="search-1" onClick={this.onSearch} />

          {searchValue && (
            <Icon icon="times-circle" onClick={this.clearSearch} />
          )}

          <input
            onChange={this.onChange}
            placeholder="Search for tickets..."
            value={searchValue}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
          />
        </SearchContainer>
        <div className="right">
          <Button btnStyle="primary" uppercase={false}>
            <Icon icon="file-check" /> Check Ticket Status
          </Button>
          <Button btnStyle="primary" uppercase={false}>
            <Icon icon="add" /> Submit New Ticket
          </Button>
        </div>
      </TicketHeaderWrapper>
    );
  }
}
