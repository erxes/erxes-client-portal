import React from 'react';
import CategoryList from '../components/CategoryList';
import { Topic } from '../../types';

type Props = {
  topic: Topic;
};

function CategoriesContainer({ topic, ...props }: Props) {
  return <CategoryList {...props} topic={topic} />;
}

export default CategoriesContainer;
