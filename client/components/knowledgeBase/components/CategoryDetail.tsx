import React from 'react';
import { Container } from '../../styles/main';

type Props = {
  categoryId: string;
};

class CategoryDetail extends React.Component<Props> {
  render() {
    return <Container>{this.props.categoryId}</Container>;
  }
}

export default CategoryDetail;
