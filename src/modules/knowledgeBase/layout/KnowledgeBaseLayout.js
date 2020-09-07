import React from 'react';
import { Container } from 'react-bootstrap';
import Search from '../../common/components/Search';
import { withRouter } from 'react-router-dom';

function Layout(props) {
  return (
    <Container className='knowledge-base'>
      <Search history={props.history} location={props.location}></Search>
      {props.children}
    </Container>
  );
}

export default withRouter(Layout);
