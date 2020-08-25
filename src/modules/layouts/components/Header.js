import React, { useState } from 'react';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import Logo from '../../../assets/images/logos/erxes-logo.svg';
import { NavLink, Link } from 'react-router-dom';
const renderMenu = () => {
  return (
    <Nav className='justify-content-center' activeKey='/forums'>
      <Nav.Item>
        <NavLink to='/knowledge-base'>Knowledge base</NavLink>
      </Nav.Item>
    </Nav>
  );
};

const renderUserMenu = (position, user) => {
  if (!user) {
    return (
      <Nav className={position}>
        <Nav.Item>
          <Link to='/register' className='sign-up'>
            Register
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/log-in' className='log-in'>
            Log in
          </Link>
        </Nav.Item>
      </Nav>
    );
  }
};
function Header() {
  const [user] = useState(true);
  return (
    <Container fluid className='head'>
      <div className='header'>
        <Row className='justify-content-md-center'>
          <Col>
            <div className='logo'>
              <Link to='/'>
                <img src={Logo} alt='logo' />
              </Link>
            </div>
          </Col>
          <Col className='small-hidden' md='auto'>
            {renderMenu()}
          </Col>
          <Col className='small-hidden'>
            {renderUserMenu('justify-content-end', user)}
          </Col>

          {/* Mobile menu */}
        </Row>
      </div>
    </Container>
  );
}

export default Header;
