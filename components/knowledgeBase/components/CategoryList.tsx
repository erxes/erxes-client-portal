import React from 'react';
import Link from 'next/link';
import { Container } from '../../styles/main';
import {
  CategoryItem,
  CategoryIcon,
  CategoryContent,
  VideoTutorial,
  Avatars
} from './styles';
import Icon from '../../common/Icon';
import { Topic, Config } from '../../types';
import { getConfigColor } from '../../common/utils';

type Props = {
  topic: Topic;
  config: Config;
};

class CategoryList extends React.Component<Props> {
  renderNames = authors => {
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

  renderAuthors = cat => {
    const { authors } = cat;

    if (authors.length === 0) {
      return;
    }

    return (
      <Avatars>
        {cat.authors.map((author, index) => (
          <img
            key={index}
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
    const { topic, config } = this.props;
    const { categories } = topic;

    if (categories) {
      return categories.map(cat => {
        return (
          <Link href={`knowledge-base/category?id=${cat._id}`} key={cat._id}>
            <CategoryItem>
              <CategoryIcon>
                <Icon icon={cat.icon || 'book'} />
              </CategoryIcon>
              <CategoryContent color={getConfigColor(config, 'baseColor')}>
                <h5>{cat.title} </h5>
                <p>{cat.description}</p>

                {this.renderAuthors(cat)}
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
          ></iframe>
        </VideoTutorial>
      </Container>
    );
  }
}

export default CategoryList;
