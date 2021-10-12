import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Topic } from "../../types";
import { SidebarList, SubCategories } from "./styles";
import Link from "next/link";
import Articles from "./ArticleList";
import SectionHeader from "../../common/SectionHeader";

type Props = {
  category: any;
  loading: boolean;
  topic: Topic;
};

function CategoryDetail({ loading, topic, category }: Props) {
  const { parentCategories } = topic;

  const renderCategory = (cat) => {
    const icon = cat.childrens ? cat.icon : "angle-right";

    return (
      <Link key={cat._id} href={`/knowledge-base/category?id=${cat._id}`}>
        <div className={`item ${cat._id === category._id && "active"}`}>
          <i className={`icon-${icon}`} />
          <h6>{cat.title}</h6>
          <span>{`(${cat.numOfArticles})`}</span>
        </div>
      </Link>
    );
  };

  const renderCategories = () => {
    if (!parentCategories) {
      return null;
    }

    return parentCategories.map((cat, i) => (
      <React.Fragment key={i}>
        {renderCategory(cat)}
        {cat.childrens && (
          <SubCategories>
            {cat.childrens.map((child) => renderCategory(child))}
          </SubCategories>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Container className="knowledge-base">
      <SectionHeader
        categories={topic.parentCategories}
        selectedCat={category}
      />

      <Row className="category-detail">
        <Col md={3}>
          <SidebarList>{renderCategories()}</SidebarList>
        </Col>
        <Col md={9}>
          <Articles articles={category.articles} />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryDetail;
