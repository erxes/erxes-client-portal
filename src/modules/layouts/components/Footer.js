import React from "react";
import { Container } from "react-bootstrap";

function Footer(props) {
  const { color } = props.kbTopic || {};

  return (
    <section className="footer align-center" style={{ background: color }}>
      <Container fluid="sm">
        <h4>Бидэнтэй нэгдэх</h4>
        <p className="desc">
          Хайсан зааварчилгаа тань байхгүй байна уу? Тэгвэл та манай хотол
          сувагт яриа өрнүүлж, хайлт хийх байдлаар туршлагатай гишүүдээс
          зөвлөгөө аваарай.
        </p>
        <div className="align-center">
          <ul className="socials">
            <li>
              <a
                href="https://community.erxes.io/register/Gw4WRJnk9fSbyAXTq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://erxes.io/static/images/logo/rocketchat-icon.png"
                  alt="rocketchat"
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
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Footer;
