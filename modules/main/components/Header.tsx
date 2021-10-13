import Link from "next/link";
import { withRouter } from "next/router";
import React, { useState } from "react";
import { USER_LOGIN_TYPES } from "../../../pages/api/db/utils";
import Icon from "../../common/Icon";
import Modal from "../../common/Modal";
import { getConfigColor } from "../../common/utils";
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
} from "../../styles/main";
import { Config, IUser } from "../../types";
import Button from "../../common/Button";
import LoginContainer from "../../../pages/user/login";
import RegisterContainer from "../../../pages/user/register";
import ResetPasswordContainer from "../../user/containers/ResetPassword";
import { Alert } from "../../utils";

type Props = {
  config: Config;
  currentUser: IUser;
  logout: () => void;
  router: any;
  headingSpacing?: boolean;
  headerBottomComponent?: React.ReactNode;
};

function Header({
  config,
  currentUser,
  logout,
  router,
  headingSpacing,
  headerBottomComponent,
}: Props) {
  const [showlogin, setLogin] = useState(false);
  const [showregister, setRegister] = useState(false);
  const [showResetPassword, setResetPassword] = useState(false);

  const onClick = (url) => {
    if (!currentUser && url.includes("tickets")) {
      Alert.error("Үйлдэл хийхээсээ өмнө нэвтэрнэ үү");

      return setLogin(true);
    }
  };

  const renderMenu = (url: string, label: string) => {
    return (
      <LinkItem active={router.pathname === url} onClick={() => onClick(url)}>
        <Link href={!currentUser && url.includes("tickets") ? "" : url}>
          {label}
        </Link>
      </LinkItem>
    );
  };

  return (
    <Head
      color={getConfigColor(config, "headerColor")}
      headingSpacing={headingSpacing}
    >
      <Container transparent={true}>
        <HeaderTop>
          <HeaderLeft>
            <WebLink
              href={config.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="external-link-alt" /> {config.name} &nbsp;
            </WebLink>
          </HeaderLeft>
          <HeaderRight>
            <SupportMenus>
              {currentUser ? (
                <span title="Log out" onClick={() => logout()}>
                  <Icon icon="user" /> &nbsp;
                  {currentUser.type === USER_LOGIN_TYPES.COMPANY
                    ? currentUser.companyName
                    : currentUser.firstName}
                </span>
              ) : (
                <>
                  <Button
                    btnStyle="link"
                    uppercase={false}
                    onClick={() => setRegister(true)}
                  >
                    Бүртгүүлэх
                  </Button>
                  <Button
                    btnStyle="primary"
                    uppercase={false}
                    onClick={() => setResetPassword(true)}
                  >
                    Нууц үг сэргээх
                  </Button>
                  <Button
                    btnStyle="warning"
                    uppercase={false}
                    onClick={() => setLogin(true)}
                  >
                    Нэвтрэх
                  </Button>
                </>
              )}
            </SupportMenus>
          </HeaderRight>
        </HeaderTop>
        <HeaderTop>
          <HeaderLogo>
            <Link href="/">
              <img src={config.logo || "/static/logos/erxes-logo-white.svg"} />
            </Link>
            <HeaderTitle>{config.name}</HeaderTitle>
          </HeaderLogo>
          <HeaderLinks>
            {renderMenu("/", config.knowledgeBaseLabel || "Мэдлэгийн сан")}
            {renderMenu("/tasks", config.taskLabel || "Даалгавар")}
            {renderMenu("/tickets", config.ticketLabel || "Тасалбар")}
          </HeaderLinks>
        </HeaderTop>
        <h3>{config.description}</h3>
        {headerBottomComponent && headerBottomComponent}
      </Container>
      <Modal
        content={() => <LoginContainer />}
        onClose={() => setLogin(false)}
        isOpen={showlogin}
      />
      <Modal
        content={() => <RegisterContainer />}
        onClose={() => setRegister(false)}
        isOpen={showregister}
      />
      <Modal
        content={() => <ResetPasswordContainer />}
        onClose={() => setResetPassword(false)}
        isOpen={showResetPassword}
      />
    </Head>
  );
}

export default withRouter(Header);
