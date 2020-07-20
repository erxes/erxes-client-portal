import React from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import Logo from "../../../assets/images/logos/erxes-logo.svg";
import { NavLink, Link } from "react-router-dom";
function Header() {
  return (
    <Container fluid>
      <div className="header">
        <Row className="justify-content-md-center">
          <Col>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <Nav className="justify-content-center" activeKey="/forums">
              <Nav.Item>
                <NavLink to="/forums">Forum</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/knowledge-base">Knowledge base</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/ticket">Ticket</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/blog">Blog</NavLink>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Nav className="justify-content-end">
              <Nav.Item>
                <Link to="/register" className="sign-up">
                  Register
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/log-in" className="log-in">
                  Log in
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Header;
