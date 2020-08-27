import React from 'react';
import router from '../utils/router';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    const { searchValue } = props;

    this.state = {
      searchValue: searchValue || '',
    };
  }

  componentWillReceiveProps(props) {
    const { searchValue } = props;

    this.setState({
      searchValue: searchValue || '',
    });
  }

  onChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchValue: value,
    });
  };

  onSearch = () => {
    const { history } = this.props;
    const { searchValue } = this.state;

    router.setParams(history, { searchValue });
  };

  onKeyDown = (e) => {
    const { history } = this.props;
    const { searchValue } = this.state;

    if (e.key === 'Enter') {
      router.setParams(history, { searchValue });
    }
  };

  clearSearch = () => {
    const { history } = this.props;

    this.setState({
      searchValue: '',
    });

    router.setParams(history, { searchValue: '' });
  };

  renderClearButton = () => {
    const { searchValue } = this.state;

    if (searchValue) {
      return (
        <div className="clear-icon">
          <i type="button" className="close" onClick={this.clearSearch}>
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
        <div className={`search`}>
          <i type="button" className="icon-search" onClick={this.onSearch}></i>
          <i type="button" className="icon-search" onClick={this.onSearch}></i>

          <input
            autoFocus={true}
            onChange={this.onChange}
            placeholder="Search for articles"
            value={searchValue}
            onKeyDown={this.onKeyDown}
          />
          {this.renderClearButton()}
        </div>
      </div>
    );
  }
}
