import React from 'react';
import dayjs from 'dayjs';
import { ArticleItem, Avatars } from './styles';
import Link from 'next/link';

type Props = {
  articles: any[];
  searchValue?: string;
};

class Lists extends React.Component<Props> {
  render() {
    const { articles } = this.props;
    if (!articles) {
      return <div>Empty</div>;
    }

    return articles.map(article => {
      return (
        <Link href={`/knowledge-base/article?id=${article._id}`}>
          <ArticleItem>
            <h5>{article.title}</h5>
            <p>{article.summary}</p>
            <Avatars>
              <img
                alt={article.createdUser.details.fullName}
                src={article.createdUser.details.avatar}
              />
              <div className="avatar-info">
                <div>
                  Written by <span>{article.createdUser.details.fullName}</span>
                </div>
                <div>
                  Modified{' '}
                  <span>
                    {dayjs(article.modifiedDate).format('MMM D YYYY')}
                  </span>
                </div>
              </div>
            </Avatars>
          </ArticleItem>
        </Link>
      );
    });
  }
}

export default Lists;
