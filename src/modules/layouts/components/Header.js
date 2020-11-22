import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Search from "../../common/components/Search";
import Logo from "../../../assets/images/logos/erxes-logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const { backgroundImage, color } = props.kbTopic || {};

  const backImg = backgroundImage && `url(${backgroundImage})`;
  const backColor = color && color;

  return (
    <div
      className="head"
      style={{ backgroundImage: backImg, backgroundColor: backColor }}
    >
      <div className="header">
        <Container fluid="sm">
          <Row className="justify-content-md-center">
            <Col>
              <div className="logo">
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
                <div className="line">|</div>
                <div className="text">Community Help Center</div>
              </div>
            </Col>
            <Col md="auto" className="header-links">
              <a href="https://erxes.io/" target="_blank">
                <i className=" icon-arrow-up-right"></i> Go to erxes
              </a>
            </Col>
          </Row>
          <h3>
            A knowledge-sharing help center designed specially for the erxes
            community
          </h3>
          <Search
            history={props.history}
            searchValue={props.searchValue}
          ></Search>
        </Container>
      </div>
    </div>
  );
}

export default Header;
