import { gql, useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ApiApolloClientContext } from "./ApiContext";
import * as queries from "./client-portal/knowledgeBase/graphql/queries";
import {
  Config,
  ConfigQueryResponse,
  Topic,
  TopicQueryResponse,
  UserQueryResponse,
} from "./client-portal/types";
import { currentUser } from "./client-portal/user/graphql/queries";
import { clientPortalGetConfig } from "./client-portal/main/graphql/queries";
import { getEnv } from "../utils/configs";

const AppContext = createContext({});

export const AppConsumer = AppContext.Consumer;

type Props = {
  children: any;
};

function AppProvider({ children }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const [config, setConfig] = useState<Config>({});
  const [topic, setTopic] = useState<Topic>({} as Topic);

  const { data } = useQuery<UserQueryResponse>(gql(currentUser));
  const { REACT_APP_CLIENT_PORTAL_CONFIG_ID } = getEnv();

  useEffect(() => {
    const fetch = async () => {
      const clientPortalConfigResponse = await apiClient.query<ConfigQueryResponse>(
        {
          query: gql(clientPortalGetConfig),
          variables: { _id: REACT_APP_CLIENT_PORTAL_CONFIG_ID },
        }
      );

      const cpData =
        (clientPortalConfigResponse || {}).data || ({} as ConfigQueryResponse);

      setConfig(cpData.clientPortalGetConfig || {});
    };

    fetch();
  }, []);

  useEffect(() => {
    if (config) {
      const fetch = async () => {
        if (config.knowledgeBaseTopicId) {
          const topicResponse = await apiClient.query<TopicQueryResponse>({
            query: gql(queries.getKbTopicQuery),
            variables: { _id: config.knowledgeBaseTopicId },
          });

          const kbData = (topicResponse.data || {}) as any;

          setTopic(kbData.knowledgeBaseTopicDetail || {});
        }
      };

      fetch();
    }
  }, [config]);

  return (
    <AppContext.Provider
      value={{ config, topic, currentUser: (data || {}).currentUser }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
