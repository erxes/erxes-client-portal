import React, { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import DumbLayout from '../components/Layout';
import { getKbTopicQuery } from "../../graphql/queries";

function Layout(props) {
  const { loading, data } = useQuery(gql(getKbTopicQuery), {
    variables: { _id: "pmDpoLdnMCBtxY5NC" },
  });

  useEffect(() => {
    (window as any).erxesSettings = {
      messenger: {
        brand_id: "5fkS4v",
      },
    };

    (() => {
      const script = document.createElement("script");
      script.src = "https://w.office.erxes.io/build/messengerWidget.bundle.js";
      script.async = true;

      const entry = document.getElementsByTagName("script")[0];
      entry.parentNode.insertBefore(script, entry);
    })();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const kbTopic = data.widgetsKnowledgeBaseTopicDetail || {};

  return <DumbLayout {...props} kbTopic={kbTopic} />;
}

export default Layout;
