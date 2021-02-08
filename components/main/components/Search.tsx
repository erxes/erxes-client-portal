import React from 'react';
import { SearchContainer } from '../../styles/main';
import Icon from '../../common/Icon';

type Props = {};

type State = {
  searchValue: string;
};

export default class Search extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    const { searchValue } = props;

    this.state = {
      searchValue: searchValue || ''
    };
  }

  componentWillReceiveProps(props) {
    const { searchValue } = props;

    this.setState({
      searchValue: searchValue || ''
    });
  }

  onChange = e => {
    const value = e.target.value;

    this.setState({
      searchValue: value
    });
  };

  onSearch = () => {};

  onKeyDown = e => {};

  clearSearch = () => {};

  render() {
    const { searchValue } = this.state;

    return (
      <SearchContainer>
        <Icon icon="search" onClick={this.onSearch} />

        {searchValue && <Icon icon="times-circle" onClick={this.clearSearch} />}

        <input
          onChange={this.onChange}
          placeholder="Search for articles..."
          value={searchValue}
          onKeyDown={this.onKeyDown}
        />
      </SearchContainer>
    );
  }
}
