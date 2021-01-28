import React from "react";
import Link from "next/link";
import {
  Header as Head,
  HeaderTop,
  HeaderLogo,
  HeaderLinks,
  Container,
  HeaderTitle,
} from "../../styles/main";
import Search from "./Search";
import Icon from "../../common/Icon";
import { Config, Topic } from "../../types";

type Props = {
  config: Config;
  topic: Topic;
};

function Header({ config, topic }: Props) {
  const { backgroundImage, color } = topic || {};

  return (
    <Head backgroundImage={backgroundImage} color={color}>
      <Container transparent={true}>
        <HeaderTop>
          <HeaderLogo>
            <img src={config.logo} />
            <HeaderTitle>{config.name}</HeaderTitle>
          </HeaderLogo>

          <HeaderLinks>
            <a href={config.url} target="_blank" rel="noopener noreferrer">
              <Icon icon="arrow-up-right" /> {config.name}
            </a>
            <ul>
              <li>
                <Link href="/">
                  <a>{config.knowledgeBaseLabel || "Knowledge Base"}</a>
                </Link>
              </li>
              <li>
                <Link href="/tasks">
                  <a>{config.taskLabel || "Task"}</a>
                </Link>
              </li>
              <li>
                <Link href="/tickets">
                  <a>{config.ticketLabel || "Ticket"}</a>
                </Link>
              </li>
            </ul>
          </HeaderLinks>
        </HeaderTop>
        <h3>{config.description}</h3>
        <Search />
      </Container>
    </Head>
  );
}

export default Header;
