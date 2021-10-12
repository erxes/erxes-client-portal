import React, { useState } from "react";
import classNames from "classnames";
import { Container, Row, Col } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
import Avatar from "../../common/Avatar";
import { ArticleWrapper, SidebarList, Feedback, PageAnchor } from "./styles";
import { Topic, IKbCategory, IKbArticle } from "../../types";
import SectionHeader from "../../common/SectionHeader";
import SideBar from "./SideBar";

type Props = {
  article: IKbArticle;
  category: IKbCategory;
  topic: Topic;
  loading: boolean;
};

function ArticleDetail({ loading, article, category, topic }: Props) {
  const [reaction, setReaction] = useState("");

  if (loading) {
    return <div>'loading ...'</div>;
  }

  const onReactionClick = (reactionChoice) => {
    setReaction(reactionChoice);
  };

  const renderTags = () => {
    if (!article) {
      return null;
    }

    const content = article.content;
    const dom = new DOMParser().parseFromString(content, "text/html");
    const nodes = dom.getElementsByTagName("h2") as any;

    const tagged = [];

    const addId = (array, isTag) => {
      return array.forEach((el) => {
        let taggedItem;

        if (el.lastChild.innerText) {
          el.children.length > 0
            ? (taggedItem = el.lastChild.innerText.replace(/&nbsp;/gi, ""))
            : (taggedItem = el.innerText.replace(/&nbsp;/gi, ""));
          el.setAttribute("id", taggedItem);
          // tslint:disable-next-line:no-unused-expression
          isTag && tagged.push(taggedItem);
        }
      });
    };

    const h2Array = document.getElementsByTagName("h2") as any;
    addId([...nodes], true);
    addId([...h2Array], false);

    return (
      <Col md={2}>
        <PageAnchor id="anchorTag">
          <h6>On this page </h6>
          <Scrollspy items={tagged} currentClassName="active">
            {tagged.map((val, index) => (
              <li key={index}>
                <a href={`#${val}`}>{val}</a>
              </li>
            ))}
          </Scrollspy>
        </PageAnchor>
      </Col>
    );
  };

  const renderReactions = () => {
    if (
      !article ||
      (article.reactionChoices && article.reactionChoices.length === 0)
    ) {
      return null;
    }

    const reactionClassess = classNames("reactions", {
      clicked: reaction,
    });

    return (
      <Feedback>
        <div className={reactionClassess}>
          {(article.reactionChoices || []).map((reactionChoice, index) => (
            <span
              key={index}
              className={reactionChoice === reaction ? "active" : undefined}
              onClick={onReactionClick.bind(this, reactionChoice)}
            >
              <img alt="reaction" src={reactionChoice} />
            </span>
          ))}
        </div>
      </Feedback>
    );
  };

  return (
    <Container className="knowledge-base">
      <SectionHeader
        categories={topic.parentCategories}
        selectedCat={category}
      />

      <Row className="category-detail">
        <Col md={3}>
          <SidebarList>
            <SideBar
              parentCategories={topic.parentCategories}
              category={category}
              articleId={article._id}
            />
          </SidebarList>
        </Col>
        <Col md={7}>
          <ArticleWrapper>
            <h4> {article.title}</h4>
            <Avatar date={article.modifiedDate} user={article.createdUser} />

            <hr />

            <div className="content">
              <p>{article.summary}</p>
              <p
                dangerouslySetInnerHTML={{
                  __html: article.content,
                }}
              />
            </div>
            <hr />
            {renderReactions()}
          </ArticleWrapper>
        </Col>
        {renderTags()}
      </Row>
    </Container>
  );
}

export default ArticleDetail;
