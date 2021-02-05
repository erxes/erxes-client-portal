import React from 'react';
import Breadcrumb from '../../common/Breadcrumb';
import Avatar from '../../common/Avatar';
import { Container, ArticleWrapper } from './styles';

type Props = {
  article: any;
  loading: boolean;
};

function CategoryDetail({ loading, article }: Props) {
  if (loading) {
    return <div>'loading ...'</div>;
  }

  return (
    <>
      <Breadcrumb title={article.title} />

      <Container>
        <ArticleWrapper>
          <h4> {article.title}</h4>
          <Avatar date={article.modifiedDate} user={article.createdUser} />

          <hr />

          <div className="content">
            <p>{article.summary}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: article.content
              }}
            />
          </div>
        </ArticleWrapper>
      </Container>
    </>
  );
}

export default CategoryDetail;
