import React from 'react';
import CategoryList from '../components/CategoryList';
import { AppConsumer } from '../../appContext';
import { Topic } from '../../types';

type Props = {
  topic: Topic;
};

function CategoriesContainer({ topic }: Props) {
  return <CategoryList topic={topic} />;
}

const WithConsumer = props => {
  return (
    <AppConsumer>
      {({ topic }: { topic: Topic }) => {
        return <CategoriesContainer {...props} topic={topic} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;
