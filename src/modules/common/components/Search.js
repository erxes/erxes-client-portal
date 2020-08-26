import React from 'react';
import router from '../utils/router';

export default class Search extends React.Component {
  constructor() {
    super();

    this.search = this.search.bind(this);
  }

  search(e) {
    const { history } = this.props;
    const value = e.target.value;

    router.setParams(history, { searchValue: value });
  }

  render() {
    const { searchValue } = this.props;

    return (
      <div className="search-container">
        <div className={`search`}>
          <input
            autoFocus={true}
            onChange={this.search}
            placeholder="Search for articles"
            value={searchValue}
          />
          <i className="icon-search"></i>
        </div>
      </div>
    );
  }
}
