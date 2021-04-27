import React from 'react';
import Item from '../containers/Item';
import { TabContainers, TabTitle } from '../../styles/tasks';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Config } from '../../types';
import { getConfigColor } from '../../common/utils';

type Props = {
  loading: boolean;
  stages: any;
  config: Config;
};

function Tasks({ loading, stages, config }: Props) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (stages.length === 0) {
    return <>Empty</>;
  }

  const router = useRouter();

  const { stageId } = router.query;

  if (router && !stageId) {
    router.push(`/tasks?stageId=${stages[0]._id}`);
  }

  return (
    <>
      <TabContainers>
        {stages.map((stage) => (
          <TabTitle
            key={stage._id}
            active={stageId === stage._id}
            color={getConfigColor(config, 'activeTabColor')}
          >
            <Link href={`/tasks?stageId=${stage._id}`}>{stage.name}</Link>
          </TabTitle>
        ))}
      </TabContainers>

      <Item
        stageId={stageId && stageId.toString()}
        backgroundColor={getConfigColor(config, 'backgroundColor')}
      />
    </>
  );
}

export default Tasks;
