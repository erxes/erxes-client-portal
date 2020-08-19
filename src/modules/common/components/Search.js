import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();

    this.search = this.search.bind(this);
  }

  search(e) {
    const { articlesQuery } = this.props;
    const value = e.target.value;

    console.log(Object.getOwnPropertyNames(articlesQuery, 'articlesQuery'));
    articlesQuery.refetch({ searchString: value });
  }

  render() {
    return (
      <div className='search-container'>
        <div className={`search`}>
          <input onChange={this.search} placeholder='Search' />
          <i className='icon-search'></i>
        </div>
      </div>
    );
  }
}
