import React from 'react';
import { ArticleItem } from './styles';
import Link from 'next/link';
import Avatar from '../../common/Avatar';

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
            <h5 className="base-color">{article.title}</h5>
            <p>{article.summary}</p>

            <Avatar date={article.modifiedDate} user={article.createdUser} />
          </ArticleItem>
        </Link>
      );
    });
  }
}

export default Lists;
