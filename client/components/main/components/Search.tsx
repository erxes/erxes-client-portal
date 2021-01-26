import React from "react";

type Props = {
  kbTopic: any;
};

type State = {
  searchValue: string;
};

export default class Search extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    const { searchValue } = props;

    this.state = {
      searchValue: searchValue || "",
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
  };

  onKeyDown = (e) => {
  };

  clearSearch = () => {
  };

  renderClearButton = () => {
    const { searchValue } = this.state;

    if (searchValue) {
      return (
        <div className="clear-icon">
          <i className="close" onClick={this.clearSearch}>
            &times;
          </i>
        </div>
      );
    }

    return null;
  };

  render() {
    const { searchValue } = this.state;

    return (
      <div className="search-container">
        <input
          onChange={this.onChange}
          placeholder="Search for articles..."
          value={searchValue}
          onKeyDown={this.onKeyDown}
        />
        <i className="icon-search" onClick={this.onSearch}></i>

        {this.renderClearButton()}
      </div>
    );
  }
}
