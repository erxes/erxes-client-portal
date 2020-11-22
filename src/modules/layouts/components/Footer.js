import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <section className="footer align-center">
      <Container fluid="sm">
        <h4>Community</h4>
        <p className="desc">
          Still have questions? Start a discussion, browse solutions, and get
          tips from erxes experts.
        </p>
        <Row>
          <Col md={4}>
            <a
              href="https://community.erxes.io/register/Gw4WRJnk9fSbyAXTq"
              target="_blank"
            >
              <div className="card">
                <img
                  src="https://erxes.io/static/images/logo/rocketchat-logo.png"
                  alt="rocketchat"
                />
                <h3 className="uk-heading-primary">RocketChat </h3>
                <div className="el-meta">
                  Technical challenges involving code, bugs, enhancement
                  requests
                </div>
                <i className="icon-chevron"></i>
              </div>
            </a>
          </Col>
          <Col md={4}>
            <a href="https://fb.erxes.io" target="_blank">
              <div class="card">
                <img
                  src="https://erxes.io/static/images/community/facebook.svg"
                  alt="comm facebook"
                />
                <h3 class="uk-heading-primary">Facebook </h3>
                <div class="el-meta">
                  Discussing use cases, set up configuration, etc. No coding
                  required
                </div>
                <i class="icon-chevron"> </i>
              </div>
            </a>
          </Col>
        </Row>
        <div className="footer-text">erxes Inc</div>
      </Container>
    </section>
  );
}

export default Footer;
