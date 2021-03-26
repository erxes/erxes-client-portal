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
  LinkItem,
  SupportMenus,
  HeaderLeft,
  HeaderRight
} from '../../styles/main';
import Search from './Search';
import Icon from '../../common/Icon';
import { Config, IUser } from '../../types';
import { useRouter } from 'next/router';
import { getConfigColor } from '../../common/utils';

type Props = {
  config: Config;
  currentUser: IUser;
  logout: () => void;
};

function Header({ config, currentUser, logout }: Props) {
  const router = useRouter();

  const renderLink = (url: string, label: string) => {
    const isActive = router && router.pathname === url;

    return (
      <LinkItem active={isActive}>
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

export default Header;
