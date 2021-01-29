import { colors, dimensions, typography } from '../styles';
import { rgba } from '../styles/ecolor';
import styled, { css } from 'styled-components';
import styledTS from 'styled-components-ts';

const Header = styledTS<{ color?: string; backgroundImage?: string }>(
  styled.div
)`
  padding: 30px;
  color: ${colors.colorWhite};
  font-size: ${typography.fontSizeBody}px;

  background-color: ${props => (props.color ? props.color : colors.colorWhite)};
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};

  h3 {
    font-size: 1.75rem;
    font-weight: ${typography.fontWeightLight};
    padding: 20px 0;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  margin-bottom: ${dimensions.coreSpacing}px;
`;

const HeaderLogo = styled.div`
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;

  img {
    width: 80px;
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
  }
`;

const HeaderTitle = styled.span`
  margin-left: 10px;
  padding-left: 5px;
  border-left: 2px solid ${colors.colorWhite};
`;

const WebLink = styled.a`
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

const HeaderLinks = styled.div`
  text-align: right;
  margin-bottom: ${dimensions.coreSpacing}px;
`;

const LinkItem = styledTS<{ active?: boolean }>(styled.span)`
  display: inline-block;
  padding: 4px 0;
  margin: 0 12px;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }

  border-bottom: 2px solid transparent;

  ${props =>
    props.active &&
    `
    border-bottom-color:${colors.colorWhite};
  `}

  &:hover {
    border-bottom-color:${colors.colorWhite};
  }
`;

const MainContent = styled.div`
  background-color: #f5f8fb;
  padding: ${dimensions.headerSpacing}px 0;
`;

const Container = styledTS<{ transparent?: boolean; shrink?: boolean }>(
  styled.div
)`
  width: 900px;

  margin: 0 auto;

  ${props =>
    !props.shrink &&
    css`
      height: 100%;
      height: calc(100% - 20px);
    `};

  @media (max-width: 900px) {
    width: 100%;
  }
`;

const BoxRoot = styledTS<{ selected?: boolean }>(styled.div)`
  text-align: center;
  float: left;
  background: ${colors.colorLightBlue};
  box-shadow: ${props =>
    props.selected
      ? `0 10px 20px ${rgba(colors.colorCoreDarkGray, 0.12)}`
      : `0 6px 10px 1px ${rgba(colors.colorCoreGray, 0.08)}`} ;
  margin-right: ${dimensions.coreSpacing}px;
  margin-bottom: ${dimensions.coreSpacing}px;
  border-radius: ${dimensions.unitSpacing / 2 - 1}px;
  transition: all 0.25s ease;
  border: 1px solid
    ${props => (props.selected ? colors.colorSecondary : colors.borderPrimary)};

  > a {
    display: block;
    padding: ${dimensions.coreSpacing}px;
    text-decoration: none;

    &:focus {
      text-decoration: none;
    }
  }

  img {
    width: 83px;
    transition: all 0.5s ease;
  }

  span {
    color: ${colors.colorCoreGray};
    display: block;
    margin-top: ${dimensions.unitSpacing}px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px ${rgba(colors.colorCoreDarkGray, 0.12)};

    span {
      font-weight: 500;
    }

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: relative;

  i {
    font-size: 22px;
    cursor: pointer;
    position: absolute;
    left: 20px;
    top: 18px;
  }

  .icon-search {
    color: $white;
  }

  input {
    border: 0;
    background: none;
    width: 100%;
    color: $white;
    background: rgba(255, 255, 255, 0.2);
    font-size: 18px;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 20px 32px 21px 59px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
      font-weight: 400;
    }

    &:focus,
    &:active {
      background: ${colors.colorWhite};
      color: #666;
    }
  }

  input:focus::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
  }

  input:focus + .icon-search {
    color: ${colors.textSecondary};
  }

  &.sidebar-search {
    margin-bottom: 1rem;
    input {
      font-size: 1rem;
    }
  }
`;

const Footer = styledTS<{ color?: string; backgroundImage?: string }>(
  styled.div
)`
  background-color: ${props => (props.color ? props.color : colors.colorWhite)};
  padding: 40px 0;
  color: ${colors.colorWhite};

  text-align: center;

  p {
    color: rgba(255,255,255,.7);
    font-size: 14px;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const FooterLink = styled.a`
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin: 5px 5px 0px 5px;
  border-radius: 16px;
  vertical-align: middle;
  background: ${colors.colorWhite};
  transition: background 0.3s ease;

  img {
    width: 70%;
    filter: contrast(0) sepia(100%) hue-rotate(210deg) brightness(0.4)
      saturate(40);
  }

  &:hover {
    background: #eee;
  }
`;

export {
  Header,
  HeaderTop,
  HeaderLogo,
  HeaderTitle,
  WebLink,
  HeaderLinks,
  MainContent,
  Container,
  BoxRoot,
  SearchContainer,
  Footer,
  FooterLink,
  LinkItem
};
