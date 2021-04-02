import { gql, useQuery } from '@apollo/client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ApiApolloClientContext } from './ApiContext';
import * as queries from './knowledgeBase/graphql/queries';
import {
  Config,
  ConfigQueryResponse,
  Topic,
  TopicQueryResponse,
  UserQueryResponse
} from './types';
import { currentUser } from './user/graphql/queries';

const AppContext = createContext({});

export const AppConsumer = AppContext.Consumer;

type Props = {
  children: any;
};

const clientPortalGetConfig = `
  query clientPortalGetConfig($_id: String!) {
    clientPortalGetConfig(_id: $_id) {
      _id
      name
      description
      logo
      icon
      url
      knowledgeBaseLabel
      knowledgeBaseTopicId
      taskLabel
      taskPublicPipelineId
      taskStageId
      ticketLabel
      ticketStageId

      styles {
        bodyColor
        headerColor
        footerColor
        helpColor
        backgroundColor
        activeTabColor
        baseColor
        headingColor
        linkColor
        linkHoverColor
        baseFont
        headingFont
        dividerColor
        primaryBtnColor
        secondaryBtnColor
      }

      advanced {
        authAllow
        permission
        viewTicket
      }
    }
  }
`;

function AppProvider({ children }: Props) {
  const apiClient = useContext(ApiApolloClientContext);

  const [config, setConfig] = useState<Config>({});
  const [topic, setTopic] = useState<Topic>({} as Topic);

  const { data } = useQuery<UserQueryResponse>(gql(currentUser));

  useEffect(() => {
    const fetch = async () => {
      const clientPortalConfigResponse = await apiClient.query<ConfigQueryResponse>(
        {
          query: gql(clientPortalGetConfig),
          variables: { _id: process.env.REACT_APP_CLIENT_PORTAL_CONFIG_ID }
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
            variables: { _id: config.knowledgeBaseTopicId }
          });

          const data = (topicResponse.data || {}) as any;

          setTopic(data.knowledgeBaseTopicDetail || {});
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
