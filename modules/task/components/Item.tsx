import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Wrapper,
  ItemWrapper,
  Content,
  Footer,
  Right,
  ItemDate,
} from "../../styles/tasks";
import Detail from "../containers/Detail";

type Props = {
  tasks: any;
  backgroundColor?: string;
};

function ItemContainer({ tasks, backgroundColor }: Props) {
  const [taskId, setId] = useState(null);

  const renderDate = (date) => {
    if (!date) {
      return null;
    }

    return <ItemDate>{dayjs(date).format("MMM D, YYYY")}</ItemDate>;
  };

  return (
    <Wrapper backgroundColor={backgroundColor}>
      {tasks.map((task) => (
        <ItemWrapper key={task._id}>
          <Content onClick={() => setId(task._id)}>
            <h5>{task.name}</h5>
            <Footer>
              Last updated:
              <Right>{renderDate(task.modifiedAt)}</Right>
            </Footer>
          </Content>
        </ItemWrapper>
      ))}

      <Detail _id={taskId} onClose={() => setId(null)} />
    </Wrapper>
  );
}

export default ItemContainer;
