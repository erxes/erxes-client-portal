import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Emptybox } from "../../../../src/assets/images/empty-box.svg";


const Appointment = ({name, pos, imgSrc, link}) =>(
      <div className="appointment">
        <div className="avatar"><img src={imgSrc} /></div>
          <div className="">
            <p>{name}</p> 
            <p>{pos}</p>
          <a target="blank" href={link}>
            <div className="appoint">
              <span> <i className={`icon-clock`} /> Цаг товлох </span>
            </div>
          </a>
          </div>
      </div>
)
class Lists extends React.Component {
  
  renderSearchResult = () => {
    const { searchValue, articles } = this.props;

    if (!searchValue) {
      return null;
    }

    if (articles.length === 0) {
      return;
    }

    return (
      <span className="search-result">
        Хайлтын үр дүн: <b>{searchValue}</b>
      </span>
    );
  };
  
  renderArticles = () =>{
    const { articles , catId, catTitle} = this.props;

    if(catTitle === "Удирдлагатайгаа уулзах цаг товлох"){
      return(     
          <div className="appointment-cont">
          <Appointment name="А.Мэнд-Орших" pos="Гүйцэтгэх захирал" link="https://calendly.com/mendorshikh/45min" imgSrc="https://erxes.io/static/images/team/square/mend-orshikh.jpg" />
          <Appointment name="Б.Бат-Амар" pos="Технологи хариуцсан захирал" link="" imgSrc="https://erxes.io/static/images/team/square/bat-amar.jpg"/>
          <Appointment name="Б.Наран" pos="Үйл ажиллагаа хариуцсан захирал" link="https://calendly.com/nauren/30min"imgSrc="https://erxes.io/static/images/team/square/naran.png"/>
          <Appointment name="Г.Индра" pos="Бүтээгдэхүүн хариуцсан захирал" link="https://calendly.com/indra_erxes" imgSrc="https://erxes.io/static/images/team/square/indra.png"/>
          <Appointment name="Э.Түвшинтөгс" pos="Ахлах бизнес аналист" link="https://calendly.com/tuvshintugs_e/30min" />
          <Appointment name="Б.Ууганчимэг" pos="Ахлах төслийн менежер" link="https://calendly.com/gerege/60min" imgSrc="https://community.erxes.io/avatar/Uuganchimeg" />

          </div>
      )
    }

    if (!articles) {
      return null;
    }
    if( articles.length === 0){
      return(
         <div className="empty-box">
          <Emptybox />
          <span>Одоогоор энэ ангилалд нийтлэл байхгүй байна</span>
         </div>
      )
    }

    return (
     articles.map( article => (
      <Link
      to={`/knowledge-base/article/detail?catId=${catId}&_id=${article._id}`}
      key={article._id}
    >
      <div className="kbase-lists card tab-content">
        <h5>{article.title}</h5>
        <p>{article.summary}</p>
        <div className="article-desc ">
          <img src={article.createdUser.details.avatar} alt="#" />
          <div>
            <p>
              Нийтлэсэн:{" "}
              <strong>
                {article.createdUser.details.fullName}
              </strong>
            </p>
            <p>
              Огноо:{" "}
              <strong>{article.modifiedDate.slice(0, 10)}</strong>
            </p>
          </div>
        </div>
      </div>
    </Link>
     ))
    )
  }

  render() {
    return (
      <Container className="knowledge-base">
        <Row>
          <Col>
            {this.renderSearchResult()}
            {this.renderArticles()}
          </Col>
        </Row>
      </Container>
    );
  }
}

Lists.propTypes = {
  articles: PropTypes.array
};

export default Lists;
