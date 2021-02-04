import React from 'react';
import Link from 'next/link';
import {
  Header as Head,
  HeaderTop,
  HeaderLogo,
  HeaderLinks,
  Container,
  HeaderTitle,
  WebLink,
  LinkItem
} from '../../styles/main';
import Search from './Search';
import Icon from '../../common/Icon';
import { Config, Topic } from '../../types';
import { useRouter } from 'next/router';

type Props = {
  config: Config;
  topic: Topic;
};

function Header({ config, topic }: Props) {
  const { backgroundImage, color } = topic || {};
  const router = useRouter();

  const renderLink = (url, label) => {
    return (
      <LinkItem active={router.pathname === url}>
        <Link href={url}>{label}</Link>
      </LinkItem>
    );
  };

  return (
    <Head backgroundImage={backgroundImage} color={color}>
      <Container transparent={true}>
        <HeaderTop>
          <HeaderLogo>
            <Link href="/">
              <img src={config.logo} />
            </Link>
            <HeaderTitle>{config.name}</HeaderTitle>
          </HeaderLogo>

          <WebLink href={config.url} target="_blank" rel="noopener noreferrer">
            <Icon icon="arrow-up-right" /> {config.name} &nbsp;
            <Link href="/user/register">Sign up</Link>
          </WebLink>
        </HeaderTop>

        <HeaderLinks>
          {renderLink('/', config.knowledgeBaseLabel || 'Knowledge Base')}
          {renderLink('/tasks', config.taskLabel || 'Task')}
          {renderLink('/tickets', config.ticketLabel || 'Ticket')}
        </HeaderLinks>

        <h3>{config.description}</h3>
        <Search />
      </Container>
    </Head>
  );
}

export default Header;
