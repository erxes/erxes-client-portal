import React from "react";
import { getConfigColor } from "../../common/utils";
import {
  Container,
  Footer as StyledFooter,
  FooterLink,
} from "../../styles/main";
import { Config } from "../../types";

type Props = {
  config: Config;
};

function Footer(props: Props) {
  const renderLink = (url: string, imgSrc: string, iconName: string) => {
    return (
      <FooterLink href={url} target="_blank" rel="noopener noreferrer">
        <img src={`/static/logos/${imgSrc}`} alt={iconName} />
      </FooterLink>
    );
  };

  return (
    <StyledFooter color={getConfigColor(props.config, "footerColor")}>
      <Container transparent={true}>
        <h4>Community</h4>
        <p>
          Still have questions? Start a discussion, browse solutions, and get
          tips from erxes experts.
        </p>

        <div>
          {renderLink("https://github.com/erxes", "github.svg", "github")}
          {renderLink("https://discord.com/invite/aaGzy3gQK5", "discord-logo-white.png", "discord")}
          {renderLink("https://www.crunchbase.com/organization/erxes-inc#/entity", "cb.png", "cb")}
          {renderLink("https://angel.co/erxes", "angelList.png", "angel")}
          {renderLink("https://www.f6s.com/erxes", "f6s.png", "f6s")}
          {renderLink("https://www.techinasia.com/companies/erxes-inc", "techinasia-white.png", "techinasia")}
          {renderLink("mailto:info@erxes.io", "mail.png", "mail")}
          {renderLink("https://fb.erxes.io", "fb-icon.png", "facebook")}
          {renderLink("https://twitter.com/erxeshq", "tw-icon.svg", "twitter")}
          {renderLink("https://www.linkedin.com/company/erxes", "linkedin-icon.svg", "linkedin")}
          {renderLink("https://www.youtube.com/channel/UCunYU3kJiiDsXGfB068BbDA", "yt-icon.svg", "youtube")}
          {renderLink("https://medium.com/erxes", "medium.png", "medium")}
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
