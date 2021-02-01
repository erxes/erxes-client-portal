import React from 'react';
import dayjs from 'dayjs';
import {
  ItemWrapper,
  Content,
  Footer,
  Right,
  ItemDate
} from '../../styles/tasks';

type Props = {
  loading: boolean;
  tasks: any;
};

function ItemContainer({ loading, tasks }: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  const renderDate = date => {
    if (!date) {
      return null;
    }

    return <ItemDate>{dayjs(date).format('MMM D, YYYY')}</ItemDate>;
  };

  return tasks.map(task => {
    return (
      <ItemWrapper>
        <Content>
          <h5>{task.name}</h5>
          <Footer>
            Last updated:
            <Right>{renderDate(task.modifiedAt)}</Right>
          </Footer>
        </Content>
      </ItemWrapper>
    );
  });
}

export default ItemContainer;
