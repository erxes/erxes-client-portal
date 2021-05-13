import { gql, useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { withRouter } from "next/router";
import { ApiApolloClientContext } from "../../ApiContext";
import { Config, Store } from "../../types";
import Tasks from "../components/Tasks";
import Spinner from "../../common/Spinner";
import Layout from "../../main/containers/Layout";
import TaskHeader from "../components/Header";

type Props = {
  config: Config;
  router: any;
};

const clientPortalGetTaskStages = `
  query clientPortalGetTaskStages($taskPublicPipelineId: String!) {
    clientPortalGetTaskStages(taskPublicPipelineId: $taskPublicPipelineId) {
      _id
      name
    }
  }
`;

function TasksContainer({ config, router, ...props }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const { loading, data } = useQuery(gql(clientPortalGetTaskStages), {
    variables: { taskPublicPipelineId: config.taskPublicPipelineId },
    client: apiClient,
    skip: !config.taskPublicPipelineId,
  });

  if (!data) {
    return null;
  }

  if (loading || Object.keys(data).length === 0) {
    return <Spinner objective={true} />;
  }

  const { stageId } = router.query;
  const stages = data.clientPortalGetTaskStages || [];

  if (router && !stageId) {
    router.push(`/tasks?stageId=${stages[0]._id}`);
  }

  const updatedProps = {
    ...props,
    config,
    stages,
    stageId,
  };

  return <Tasks {...updatedProps} />;
}

const WithRouterParams = (props) => {
  return (
    <Layout headerBottomComponent={<TaskHeader />}>
      {(layoutProps: Store) => {
        return <TasksContainer {...props} {...layoutProps} />;
      }}
    </Layout>
  );
};

export default withRouter(WithRouterParams);
