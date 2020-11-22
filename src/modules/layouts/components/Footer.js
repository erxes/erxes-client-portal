import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="end-section">
      <Container fluid="sm">
        <section className="video align-center">
          <h4>Video tutorials</h4>
          <p className="desc">
            For those visual learners, we have a full playlist of video
            tutorials to help you onboard. Make sure you check out the
            <a
              href="https://www.youtube.com/watch?v=sDzPEEBSp44&feature=youtu.be&list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz&ab_channel=erxesInc"
              target="_blank"
            >
              &nbsp;full playlist&nbsp;
            </a>
            on our Youtube channel or click the button on the top left corner of
            this video.
          </p>
          <iframe
            width="80%"
            height="450"
            src="https://www.youtube.com/embed/videoseries?list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </section>
      </Container>

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
    </div>
  );
}

export default Footer;
