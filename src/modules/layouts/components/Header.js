import React, { useState } from "react";
import {
  Row,
  Col,
  Nav,
  Container,
  Dropdown,
  Popover,
  OverlayTrigger,
  Badge
} from "react-bootstrap";
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

const renderUserMenu = (position, user) => {
  if (!user) {
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
  } else {
    return (
      <div className="logged-in-user">
        <OverlayTrigger
          trigger="click"
          key="bottom"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Title as="h4">Notification</Popover.Title>
              <Popover.Content>
                <ul>
                  <li>
                    <Link to="/">
                      <strong>Holy guacamole!</strong> Check this info.
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <strong>Holy guacamole!</strong> Check this info.
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <strong>Holy guacamole!</strong> Check this info.
                    </Link>
                  </li>
                </ul>
              </Popover.Content>
            </Popover>
          }
        >
          <button
            className="btn notification-button justify-content-end"
            variant="secondary"
          >
            <i className="icon-bell"></i>
            <Badge variant="danger">12</Badge>
          </button>
        </OverlayTrigger>

        <Dropdown>
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
      </div>
    );
  }
};
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [user] = useState(true);
  return (
    <Container fluid className="head">
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
            {renderUserMenu("justify-content-end", user)}
          </Col>
          <Col className="desktop-hidden" style={{ textAlign: "right" }}>
            <button
              className="mobile-menu-button"
              onClick={() => setShowMenu(!showMenu)}
            >
              <i className="icon-menu-2"></i>
            </button>
          </Col>
          {/* Mobile menu */}
          <div
            className={`mobile-menu ${showMenu ? "slide-in" : "slide-out"}`}
            style={showMenu ? { marginRight: "0" } : { marginRight: "-300px" }}
          >
            <i className="icon-cancel-1" onClick={() => setShowMenu(false)}></i>
            <div className="user-menu">{renderUserMenu("", user)}</div>
            <div className="menu">{renderMenu()}</div>
          </div>
        </Row>
      </div>
    </Container>
  );
}

export default Header;
