import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Search from '../../common/components/Search';
import Logo from '../../../assets/images/logos/erxes-logo.svg';
import { Link } from 'react-router-dom';

function Header(props) {
  const { backgroundImage, color } = props.kbTopic || {};
  const backColor = color && color;
  const background = backgroundImage ? `url(${backgroundImage})` : backColor;
  

  return (
    <div
      className={`head ${props.headingSpacing && 'bottom-spacing'}`}
      style={{ background: background}}
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
                <div className="text">Эрксис хотолын гишүүдэд туслах мэдлэгийн сан</div>
              </div>
            </Col>
            <Col md="auto" className="header-links">
              <a
                href="https://erxes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className=" icon-arrow-up-right"></i> erxes.mn
              </a>
            </Col>
          </Row>
          <h3>
          Эрксис платформ ашиглах гарын авлага болон мэдээлэл солилцох талбар
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
