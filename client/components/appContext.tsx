import React, { useState, useEffect, createContext } from 'react';
import { configClientPortal } from '../pages/api/resolvers/queries/config';
import { sendGraphQLRequest } from '../pages/api/utils';
import * as queries from './knowledgeBase/graphql/queries';
import { Config } from './types';

const AppContext = createContext({});

export const AppConsumer = AppContext.Consumer;

function AppProvider({ children }) {
  const [config, setConfig] = useState<Config>({});
  const [topic, setTopic] = useState({});

  useEffect(() => {
    const fetchConfig = async () => {
      const response = await sendGraphQLRequest({
        query: configClientPortal,
        name: 'configClientPortal'
      });

      setConfig(response);
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    if (config.knowledgeBaseTopicId) {
      const fetchTopic = async () => {
        const response = await sendGraphQLRequest({
          query: queries.getKbTopicQuery,
          name: 'widgetsKnowledgeBaseTopicDetail',
          variables: { _id: config.knowledgeBaseTopicId }
        });

        setTopic(response);
      };

      fetchTopic();
    }
  }, [config]);

  return (
    <AppContext.Provider value={{ config, topic }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
