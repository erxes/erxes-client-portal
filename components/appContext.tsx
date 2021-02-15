import { gql, useLazyQuery, useQuery } from '@apollo/client';
import React, { createContext, useEffect } from 'react';
import { apiClient } from './apolloClient';
import * as queries from './knowledgeBase/graphql/queries';
import { ICustomer } from './types';

const AppContext = createContext({});

export const AppConsumer = AppContext.Consumer;

type Props = {
  children: any;
  currentUser?: ICustomer;
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
  const clientPortalConfigResponse = useQuery(gql(clientPortalGetConfig), {
    variables: { _id: process.env.CLIENT_PORTAL_CONFIG_ID },
    client: apiClient
  });

  const cpData = (clientPortalConfigResponse || {}).data || {};
  const config = cpData.clientPortalGetConfig || {};

  const [fetchTopicDetail, { data = {} }] = useLazyQuery(gql(queries.getKbTopicQuery), {
    client: apiClient,
  });

  useEffect(() => {
    if (config) {
      const fetch = () => {
        fetchTopicDetail({ variables: { _id: config.knowledgeBaseTopicId } })
      };

      fetch();
    }
  }, [config]);

  const topic = data.knowledgeBaseTopicDetail || {};

  return (
    <AppContext.Provider value={{ config, topic, currentUser: {} }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
