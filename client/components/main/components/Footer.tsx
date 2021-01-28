import React from 'react';
import {
  Container,
  Footer as StyledFooter,
  FooterLink
} from '../../styles/main';

type Props = {
  kbTopic: any;
};

function Footer(props: Props) {
  const { color } = props.kbTopic || {};

  const renderLink = (url: string, imgSrc: string, iconName: string) => {
    return (
      <FooterLink href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={`https://erxes.io/static/images/logo/${imgSrc}`}
          alt={iconName}
        />
      </FooterLink>
    );
  };

  return (
    <StyledFooter color={color}>
      <Container transparent={true}>
        <h4>Community</h4>
        <p className="desc">
          Still have questions? Start a discussion, browse solutions, and get
          tips from erxes experts.
        </p>

        <div>
          {renderLink(
            'https://community.erxes.io/register/Gw4WRJnk9fSbyAXTq',
            'rocketchat-icon.png',
            'rocketchat'
          )}
          {renderLink('https://fb.erxes.io', 'fb-icon.png', 'facebook')}
          {renderLink('https://github.com/erxes', 'github.png', 'github')}
          {renderLink('https://twitter.com/erxeshq', 'tw-icon.svg', 'twitter')}
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
