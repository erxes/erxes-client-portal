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
        <h4>ХОЛБОО БАРИХ</h4>
        <p>
          Танд асуулт байна уу? Хэлэлцүүлэг эхлүүлж, шийдлүүдийг хайж, Эрксисийн
          мэргэжилтнүүдээс зөвлөгөө аваарай.
        </p>

        <div>
          {renderLink(
            "https://community.erxes.io/register/Gw4WRJnk9fSbyAXTq",
            "rocketchat.svg",
            "rocketchat"
          )}
          {renderLink("https://fb.erxes.io", "facebook.svg", "facebook")}
          {renderLink("https://github.com/erxes", "github.svg", "github")}
          {renderLink("https://twitter.com/erxeshq", "twitter.svg", "twitter")}
        </div>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
