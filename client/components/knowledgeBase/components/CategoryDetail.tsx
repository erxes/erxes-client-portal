import React from 'react';
import { Container, Header } from '../../styles/main';
import { Topic } from '../../types';

type Props = {
  category: any;
  loading: boolean;
  topic: Topic;
};

function CategoryDetail({ topic, category }: Props) {
  return (
    <Container>
      <Header>
        {category.title || ''}
      </Header>
    </Container>
  );
}

export default CategoryDetail;
