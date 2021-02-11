import React, { useState } from 'react';
import dayjs from 'dayjs';
import {
  Wrapper,
  ItemWrapper,
  Content,
  Footer,
  Right,
  ItemDate
} from '../../styles/tasks';
import Detail from './Detail';

type Props = {
  loading: boolean;
  tasks: any;
  backgroundColor?: string;
};

function ItemContainer({ loading, tasks, backgroundColor }: Props) {
  const [item, setItem] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderDate = date => {
    if (!date) {
      return null;
    }

    return <ItemDate>{dayjs(date).format('MMM D, YYYY')}</ItemDate>;
  };

  return (
    <Wrapper backgroundColor={backgroundColor}>
      {tasks.map(task => {
        return (
          <ItemWrapper>
            <Content onClick={() => setItem(task)}>
              <h5>{task.name}</h5>
              <Footer>
                Last updated:
                <Right>{renderDate(task.modifiedAt)}</Right>
              </Footer>
            </Content>
          </ItemWrapper>
        );
      })}

      <Detail item={item} onClose={() => setItem(null)} />
    </Wrapper>
  );
}

export default ItemContainer;
