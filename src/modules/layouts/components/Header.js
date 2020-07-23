import React, { useState } from "react";
import { Row, Col, Nav, Container } from "react-bootstrap";
import Logo from "../../../assets/images/logos/erxes-logo.svg";
import { NavLink, Link } from "react-router-dom";
const renderMenu = () => {
  return (
    <Nav className="justify-content-center" activeKey="/forums">
      <Nav.Item>
        <NavLink to="/forums">Forum</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/knowledge-base">Knowledge base</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/tickets">Ticket</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/blog">Blog</NavLink>
      </Nav.Item>
    </Nav>
  );
};

const renderUserMenu = position => {
  return (
    <Nav className={position}>
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
  );
};
function Header() {
  const [showMenu, setShowMenu] = useState(false);
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
          <Col className="small-hidden" md="auto">
            {renderMenu()}
          </Col>
          <Col className="small-hidden">
            {renderUserMenu("justify-content-end")}
          </Col>
          {/* <Col>
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
                <Link to="/log-out">Log out</Link>
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}

          <Col className="desktop-hidden" style={{ textAlign: "right" }}>
            <button
              className="mobile-menu-button"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className="icon-menu-2"></i>
            </button>
          </Col>
          <div
            className={`mobile-menu ${showMenu ? "slide-in" : "slide-out"}`}
            style={showMenu ? { marginRight: "0" } : { marginRight: "-300px" }}
          >
            <i className="icon-cancel-1" onClick={() => setShowMenu(false)}></i>
            <div className="user-menu">{renderUserMenu()}</div>
            <div className="menu">{renderMenu()}</div>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Header;
