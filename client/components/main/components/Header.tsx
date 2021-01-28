import React from 'react';
import {
  Header as Head,
  HeaderTop,
  HeaderLogo,
  HeaderLinks,
  Container,
  HeaderTitle
} from '../../styles/main';
import Search from './Search';
import Icon from '../../common/Icon';

type Props = {
  kbTopic: any;
};

function Header({ kbTopic }: Props) {
  const { backgroundImage, color } = kbTopic || {};

  return (
    <Head backgroundImage={backgroundImage} color={color}>
      <Container transparent={true}>
        <HeaderTop>
          <HeaderLogo>
            <img src="/static/logos/erxes-logo.svg" />
            <HeaderTitle>Community Help Center</HeaderTitle>
          </HeaderLogo>

          <HeaderLinks>
            <a
              href="https://erxes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="arrow-up-right" /> Go to erxes
            </a>
          </HeaderLinks>
        </HeaderTop>

        <h3>
          A knowledge-sharing help center designed specially for the erxes
          community
        </h3>

        <Search />
      </Container>
    </Head>
  );
}

export default Header;
