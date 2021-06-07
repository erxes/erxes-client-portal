import React from "react";
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

class Layout extends React.Component {
  componentDidMount() {
    const { forms = [] } = this.props;

    const allForms = [];

    window.erxesSettings = {
      messenger: {
        brand_id: "az5XGY",
      },
      forms: allForms,
    };

    for (const form of forms) {
      allForms.push({ brand_id: form.brand_id, form_id: form.form_id });
    }

    (() => {
      const script = document.createElement("script");
      script.src = "https://crm.apu.mn/widgets/build/messengerWidget.bundle.js";
      script.async = true;

      const entry = document.getElementsByTagName("script")[0];
      entry.parentNode.insertBefore(script, entry);
    })();

    forms.length !== 0 &&
      (() => {
        const script = document.createElement("script");
        script.src = "https://crm.apu.mn/widgets/build/formWidget.bundle.js";
        script.async = true;

        const entry = document.getElementsByTagName("script")[0];
        entry.parentNode.insertBefore(script, entry);
      })();
  }

  render() {
    const {
      location,
      getKbTopicQuery,
      history,
      children,
      headingSpacing,
    } = this.props;

    const queryParams = queryString.parse(location.search);
    const kbTopic = getKbTopicQuery.widgetsKnowledgeBaseTopicDetail || {};

    return (
      <div className="layout knowlegde-base">
        <Header
          history={history}
          searchValue={queryParams.searchValue}
          kbTopic={kbTopic}
          headingSpacing={headingSpacing}
        />

        <Container className="main-body" fluid="lg">
          {children}
        </Container>
        <Footer kbTopic={kbTopic} />
      </div>
    );
  }
}

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
