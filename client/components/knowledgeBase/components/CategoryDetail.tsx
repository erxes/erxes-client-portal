import React from 'react';
import { Topic } from '../../types';
import Layout from 'modules/main/containers/Layout';

type Props = {
  category: any;
  loading: boolean;
  topic: Topic;
};

function CategoryDetail({ topic, category }: Props) {
  return <Layout>{category.title || ''}</Layout>;
}

export default CategoryDetail;
