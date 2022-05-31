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
                href="https://github.com/erxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/github.png"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://discord.com/invite/aaGzy3gQK5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/discord-logo-white.png"
                  alt="discord"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.crunchbase.com/organization/erxes-inc#/entity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/cb-new.png"
                  alt="logo cb"
                />
              </a>
            </li>
            <li>
              <a
                href="https://angel.co/erxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/angelList.png"
                  alt="angel"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.f6s.com/erxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/f6s-new.png"
                  alt="f6s"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.techinasia.com/companies/erxes-inc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/techinasia-white.png"
                  alt="techinasia white"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:info@erxes.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/mail.png"
                  alt="mail"
                />
              </a>
            </li>
            <li>
              <a
                href="https://fb.erxes.io/"
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
                href="https://twitter.com/erxeshq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/tw-icon.svg"
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/erxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/linkedin-icon.svg"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCunYU3kJiiDsXGfB068BbDA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/yt-icon.svg"
                  alt="youtube"
                />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/erxes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/medium.png"
                  alt="medium"
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
