import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Search from "./Search";
// import Logo from '../../../images/logos/erxes-logo.svg';

type Props = {
  kbTopic: any;
};

function Header({ kbTopic }: Props) {
  const { backgroundImage, color } = kbTopic || {};

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
                {/* <Logo /> */}
                <div className="line">|</div>
                <div className="text">Community Help Center</div>
              </div>
            </Col>
            <Col md="auto" className="header-links">
              <a
                href="https://erxes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" icon-arrow-up-right"></i> Go to erxes
              </a>
            </Col>
          </Row>
          <h3>
            A knowledge-sharing help center designed specially for the erxes
            community
          </h3>
          <Search kbTopic={kbTopic} />
        </Container>
      </div>
    </div>
  );
}

export default Header;
