import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Link from "next/link";
import { VideoTutorial, Avatars, CategoryListWrapper } from "./styles";
import Icon from "../../common/Icon";
import { Topic } from "../../types";

type Props = {
  topic: Topic;
};
class CategoryList extends React.Component<Props> {
  renderNames = (authors) => {
    if (authors.length > 3) {
      return (
        <>
          {authors.slice(0, 3).map((user, index) => (
            <span key={index}>{user.details.fullName},</span>
          ))}
          <span> and {authors.length - 3} other </span>
        </>
      );
    }

    return authors.map((author, index) => (
      <span key={index}>
        {author.details.fullName}
        {authors.length > 1 && ", "}
      </span>
    ));
  };

  renderAuthors = (cat) => {
    const { authors } = cat;

    if (authors.length === 0) {
      return;
    }

    return (
      <Avatars>
        {cat.authors.map((author, index) => (
          <img
            key={`author-${index}`}
            alt={author.details.fullName}
            src={author.details.avatar}
          />
        ))}
        <div className="avatar-info">
          <div>
            <div className="darker">{cat.numOfArticles}</div> articles in this
            category
          </div>
          <div>
            <div className="darker">Written by: </div>
            {this.renderNames(cat.authors)}
          </div>
        </div>
      </Avatars>
    );
  };

  renderCategories = () => {
    const { topic } = this.props;
    const { parentCategories = [] } = topic;

    const specialCategory = parentCategories[0];
    const categories = parentCategories.slice(1);
    const categoryUrl = `/knowledge-base/category/`;

    const detail = (cat) => {
      return (
        <Link href={`${categoryUrl}${cat._id}`} passHref={true}>
          <a className="d-flex flex-column align-items-center w-100">
            <div className="icon-wrapper">
              <i className={`icon-${cat.icon}`} />
            </div>
            <div className="tab-content">
              <h5>{cat.title}</h5>
              <div className="description">
                <p>{cat.description}</p>
              </div>
            </div>
          </a>
        </Link>
      );
    };

    return (
      <>
        {specialCategory && (
          <Container className="knowledge-base promoted mt-30" fluid="sm">
            <div className="category-knowledge-list">
              <h2 className="list-category-title">
                <Link href={`${categoryUrl}${specialCategory._id}`}>
                  {specialCategory.title}
                </Link>
              </h2>
              <div className="promoted-wrap">
                {specialCategory.childrens &&
                  specialCategory.childrens.map((cat, i) => (
                    <Card key={`child-${i}`}>
                      {detail(cat)}
                      <Link href={`${categoryUrl}${specialCategory._id}`}>
                        <a className="more">Read more</a>
                      </Link>
                    </Card>
                  ))}
              </div>
            </div>
          </Container>
        )}

        {categories.map((parentCat, i) => (
          <Container className="knowledge-base" fluid="sm" key={`key-${i}`}>
            <div className="category-knowledge-list">
              <h2 className="list-category-title">
                <Link href={`${categoryUrl}${parentCat._id}`}>
                  {parentCat.title}
                </Link>
              </h2>
              <Row>
                {parentCat.childrens &&
                  parentCat.childrens.map((cat) => (
                    <Col md={4} key={cat._id} className="category-col">
                      <Card className="category-item">{detail(cat)}</Card>
                    </Col>
                  ))}
              </Row>
            </div>
          </Container>
        ))}
      </>
    );
  };

  render() {
    return (
      <CategoryListWrapper>
        <div className="categories-wrapper">{this.renderCategories()}</div>

        <VideoTutorial>
          <h5>Video tutorials</h5>

          <p>
            For those visual learners, we have a full playlist of video
            tutorials to help you onboard. Make sure you check out the
            <a
              href="https://www.youtube.com/watch?v=sDzPEEBSp44&feature=youtu.be&list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz&ab_channel=erxesInc"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;full playlist&nbsp;
            </a>
            on our Youtube channel or click the button on the top left corner of
            this video.
          </p>

          <iframe
            width="80%"
            height="450"
            title="erxes-list"
            src="https://www.youtube.com/embed/videoseries?list=PLwRYODuwm31sVRr8NjPZJIM-idMQETizz"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </VideoTutorial>
      </CategoryListWrapper>
    );
  }
}

export default CategoryList;
