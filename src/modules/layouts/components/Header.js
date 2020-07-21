import React from "react";
import { Row, Col, Nav, Container, Dropdown } from "react-bootstrap";
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
          <Col>
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
          <Col md="auto">
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
          <Col md="auto">
            <Dropdown className="justify-content-end">
              <Dropdown.Toggle variant="link">
                <img
                  src="https://avatars2.githubusercontent.com/u/26920801?s=400&u=bf32fd45a94fa6d1eaf74535dd374c96921af423&v=4"
                  alt="profile"
                />
                Uuganbayar
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/log-in">Profile</Link>
                <Link to="/log-in">My Ticket</Link>
                <Link to="/log-in">Notification</Link>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Header;
