import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Wrapper,
  ItemWrapper,
  Content,
  ItemFooter,
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
        <ItemWrapper key={task._id} onClick={() => setId(task._id)}>
          <Content>
            <h5>{task.name}</h5>
          </Content>
          <ItemFooter>
            Last updated:
            <Right>{renderDate(task.modifiedAt)}</Right>
          </ItemFooter>
        </ItemWrapper>
      ))}

      <Detail
        _id={taskId}
        renderDate={renderDate}
        onClose={() => setId(null)}
      />
    </Wrapper>
  );
}

export default ItemContainer;
