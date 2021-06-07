import React from "react";
import { Container } from "react-bootstrap";

function Footer(props) {
  const { color } = props.kbTopic || {};

  return (
    <section className="footer align-center" style={{ background: color }}>
      <Container fluid="sm">
        <h4>Холбоо барих</h4>
        <p className="desc">
          Танд асуулт байна уу? Хэлэлцүүлэг эхлүүлж, шийдлүүдийг хайж, АПУ-ийн
          мэргэжилтнүүдээс зөвлөгөө аваарай.
        </p>
        <div className="align-center">
          <ul className="socials">
            <li>
              <a
                href="https://www.facebook.com/APUCompany"
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
                href="https://twitter.com/APU_Company"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/tw-icon.svg"
                  alt="twitter"
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
