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
import { Config, ICustomer, Topic } from '../../types';
import { useRouter } from 'next/router';

type Props = {
  config: Config;
  topic: Topic;
  currentUser?: ICustomer;
  logout: () => void;
};

function Header({ config, topic, currentUser, logout }: Props) {
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
            <Icon icon="arrow-up-right" /> {config.name}
          </WebLink>
          &nbsp; | &nbsp;
          {currentUser ? (
            <span title="Log out" onClick={() => logout()}>
              <Icon icon="user" /> &nbsp;
              {currentUser.firstName}
            </span>
          ) : (
            <>
              <Link href="/user/register">Sign up</Link>&nbsp; | &nbsp;
              <Link href="/user/login">Login</Link>
            </>
          )}
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
