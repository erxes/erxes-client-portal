import React from 'react';
import CategoryList from '../components/CategoryList';
import { AppConsumer } from '../../appContext';
import { Topic, Config } from '../../types';

type Props = {
  topic: Topic;
  config: Config;
};

function CategoriesContainer({ topic, config }: Props) {
  return <CategoryList topic={topic} config={config} />;
}

const WithConsumer = props => {
  return (
    <AppConsumer>
      {({ topic, config }: { topic: Topic; config: Config }) => {
        return <CategoriesContainer {...props} topic={topic} config={config} />;
      }}
    </AppConsumer>
  );
};

export default WithConsumer;
