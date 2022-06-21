import React from "react";
import { Container } from "react-bootstrap";

function Footer(props) {
  const { color } = props.kbTopic || {};

  return (
    <section className="footer align-center" style={{ background: color }}>
      <Container fluid="sm">
        <h4>Community</h4>
        <p className="desc">
          Still have questions? Start a discussion, browse solutions, and get
          tips from erxes experts.
        </p>
        <div className="align-center">
          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/EmartMongolia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/fb-icon.png"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCLrq6TDLAjwcBMTHzZNa5PQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/yt-icon.svg"
                  alt="youtube"
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
