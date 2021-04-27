import Link from 'next/link';
import { withRouter } from 'next/router';
import React from 'react';
import Icon from '../../common/Icon';
import { getConfigColor } from '../../common/utils';
import {
  Container,
  Header as Head,
  HeaderLeft,
  HeaderLinks,
  HeaderLogo,
  HeaderRight,
  HeaderTitle,
  HeaderTop,
  LinkItem,
  SupportMenus,
  WebLink,
} from '../../styles/main';
import { Config, IUser } from '../../types';
import Search from './Search';

type Props = {
  config: Config;
  currentUser: IUser;
  logout: () => void;
  router: any;
};

function Header({ config, currentUser, logout, router }: Props) {
  const renderLink = (url: string, label: string) => {
    return (
      <LinkItem active={router.pathname === url}>
        <Link href={url}>{label}</Link>
      </LinkItem>
    );
  };

  return (
    <Head color={getConfigColor(config, 'headerColor')}>
      <Container transparent={true}>
        <HeaderTop>
          <HeaderLeft>
            <HeaderLogo>
              <Link href="/">
                <img
                  src={config.logo || '/static/logos/erxes-logo-white.svg'}
                />
              </Link>
              <HeaderTitle>{config.name}</HeaderTitle>
            </HeaderLogo>
          </HeaderLeft>
          <HeaderRight>
            <SupportMenus>
              <WebLink
                href={config.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="external-link-alt" /> {config.name} &nbsp;
              </WebLink>
              {currentUser ? (
                <span title="Log out" onClick={() => logout()}>
                  <Icon icon="user" /> &nbsp;
                  {currentUser.firstName}
                </span>
              ) : (
                <>
                  <Link href="/user/register">Sign up</Link>
                  <Link href="/user/login">Login</Link>
                </>
              )}
            </SupportMenus>
            <HeaderLinks>
              {renderLink('/', config.knowledgeBaseLabel || 'Knowledge Base')}
              {renderLink('/tasks', config.taskLabel || 'Task')}
              {renderLink('/tickets', config.ticketLabel || 'Ticket')}
            </HeaderLinks>
          </HeaderRight>
        </HeaderTop>
        <h3>{config.description}</h3>
        <Search />
      </Container>
    </Head>
  );
}

export default withRouter(Header);
