import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Search from "../../common/components/Search";
import Logo from "../../../assets/images/logos/apu-logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  const { backgroundImage, color } = props.kbTopic || {};
  const backImg = backgroundImage && `url(${backgroundImage})`;
  const backColor = color && color;

  return (
    <div
      className={`head ${props.headingSpacing && "bottom-spacing"}`}
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
                <div className="text">Мэдлэг солилцох төв</div>
              </div>
            </Col>
            <Col md="auto" className="header-links">
              <a
                href="http://www.apu.mn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" icon-arrow-up-right"></i> Apu.mn шилжих
              </a>
            </Col>
          </Row>
          <h3>Харилцагчидын үйлчилгээний хэлтэсийн мэдлэг солилцох төв</h3>
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
