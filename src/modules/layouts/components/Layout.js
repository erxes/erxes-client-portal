import React, { useEffect } from "react";
import * as compose from "lodash.flowright";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { queries } from "../../knowledgeBase/graphql";
import { getEnv } from "../../../apolloClient";

const { REACT_APP_TOPIC_ID } = getEnv();

const Layout = (props) => {
  const { location, getKbTopicQuery, history, children, forms = [] } = props;

  const settings = {
    messenger: { brand_id: "m7DmKt" },
    forms: [],
  };

  const formWidgetSource =
    "https://w.office.erxes.io/build/formWidget.bundle.js";
  // "http://localhost:3200/build/formWidget.bundle.js";

  for (const form of forms) {
    settings.forms.push({ brand_id: form.brand_id, form_id: form.form_id });
  }

  const erxesSettings = `window.erxesSettings = ${JSON.stringify(settings)}`;

  useEffect(() => {
    (() => {
      const script = document.createElement("script");
      script.src = "https://w.office.erxes.io/build/messengerWidget.bundle.js";
      script.async = true;
      script.key = Math.random().toString();
      const entry = document.getElementsByTagName("script")[0];
      entry.parentNode.insertBefore(script, entry);
    })();

    (() => {
      const s = document.createElement("script");
      s.key = Math.random().toString();
      s.innerHTML = erxesSettings;
      const entry = document.getElementsByTagName("script")[0];
      entry.parentNode.insertBefore(s, entry);
    })();

    if (settings.forms.length > 0) {
      (() => {
        const script = document.createElement("script");
        script.src = formWidgetSource;
        script.async = true;
        script.key = Math.random().toString();
        const entry = document.getElementsByTagName("script")[0];
        entry.parentNode.insertBefore(script, entry);
      })();
    }
  }, [forms]);

  const queryParams = queryString.parse(location.search);
  const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

  let headingSpacing = false;
  let marginTop = "main-body";
  if (location.pathname === "/knowledge-base") {
    headingSpacing = true;
    marginTop = "mt-100p";
  }

  return (
    <div className="layout knowlegde-base">
      <Header
        history={history}
        searchValue={queryParams.searchValue}
        kbTopic={kbTopic}
        headingSpacing={headingSpacing}
      />
      <Container className={marginTop} fluid="lg">
        {children}
      </Container>
      <Footer kbTopic={kbTopic} />
    </div>
  );
};

export default withRouter(
  compose(
    graphql(gql(queries.getKbTopicQuery), {
      name: "getKbTopicQuery",
      options: () => ({
        variables: { _id: REACT_APP_TOPIC_ID },
      }),
    })
  )(Layout)
);
