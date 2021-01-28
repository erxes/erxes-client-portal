import React from 'react';
import Link from 'next/link';
import { Container } from '../../styles/main';
import {
  CategoryItem,
  CategoryIcon,
  CategoryContent,
  VideoTutorial
} from '../styles';
import Icon from '../../common/Icon';

type Props = {
  kbTopic: any;
  articles: any[];
};

class CategoryList extends React.Component<Props> {
  renderAuthors = authors => {
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
        {authors.length > 1 && ', '}
      </span>
    ));
  };

  renderAvatars = cat => {
    return (
      <div className="avatars">
        {cat.authors.map((author, index) => (
          <img
            key={index}
            className="round-img"
            alt={author.details.fullName}
            width="34"
            height="34"
          />
        ))}
        <div className="avatar-info">
          <div>
            <div className="darker">{cat.numOfArticles}</div> articles in this
            category
          </div>
          <div>
            <div className="darker">Written by: </div>
            {this.renderAuthors(cat.authors)}
          </div>
        </div>
      </div>
    );
  };

  renderCategories = () => {
    const { kbTopic } = this.props;
    const { categories } = kbTopic;

    if (categories) {
      return categories.map(cat => {
        return (
          <Link href={`knowledge-base/category?id=${cat._id}`} key={cat._id}>
            <CategoryItem>
              <CategoryIcon>
                <Icon icon={cat.icon || 'book'} />
              </CategoryIcon>
              <CategoryContent>
                <h5>{cat.title} </h5>
                <p>{cat.description}</p>
                {this.renderAvatars(cat)}
              </CategoryContent>
            </CategoryItem>
          </Link>
        );
      });
    }
    return;
  };

  render() {
    return (
      <Container>
        <div>{this.renderCategories()}</div>

        <VideoTutorial>
          <h4>Video tutorials</h4>
          <p className="desc">
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
          ></iframe>
        </VideoTutorial>
      </Container>
    );
  }
}

export default CategoryList;
