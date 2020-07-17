import React from 'react';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import Logo from '../../../assets/images/logos/erxes-logo.svg';
function Header() {
  return (
    <Container fluid>
      <div className="header">
        <Row>
          <Col>
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>
          </Col>
          <Col>
            <Nav className="justify-content-center" activeKey="/forums">
              <Nav.Item>
                <Nav.Link href="/forums">Forum</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/knowledge-base">Knowledge base</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/ticket">Ticket</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/home" className="sign-up">
                  Sign up
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" className="log-in">
                  Log in
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Header;
