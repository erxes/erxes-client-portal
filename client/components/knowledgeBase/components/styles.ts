import { colors, typography } from '../../styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const silverGrey = '#6c718b';

const Header = styledTS<{ color?: string; backgroundImage?: string }>(
  styled.div
)`
  padding: 30px;
  color: ${colors.colorWhite};
  font-size: ${typography.fontSizeBody};

  background-color: ${props => (props.color ? props.color : colors.colorWhite)};
  background-image: ${props =>
    props.backgroundImage && `url(${props.backgroundImage})`};

  h3 {
    font-size: 1.75rem;
    font-weight: ${typography.fontWeightLight};
    padding: 20px 0;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  background-color: ${colors.colorWhite};
  margin-bottom: 30px;
  padding: 25px;
  border: 0;
  box-shadow: 0px 0 15px -10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 30px -13px rgba(0, 0, 0, 0.25);
    transition: 0.4s;
  }

  align-items: center;
`;

const CategoryIcon = styled.div`
  font-size: 48px;
  color: ${silverGrey};
  text-align: center;
  width: 120px;
`;

const CategoryContent = styled.div`
  h5 {
    color: #6569df;
    font-size: ${typography.fontSizeHeading6}px;
    font-weight: ${typography.fontWeightLight};
  }
  p {
    margin-bottom: 0;
    color: ${colors.colorCoreGray};
  }
`;

const VideoTutorial = styled.div`
  text-align: center;

  h4 {
    font-size: ${typography.fontSizeHeading5}px;
    font-weight: ${typography.fontWeightMedium};
  }

  p {
    color: ${silverGrey};
    margin-bottom: 30px;

    a {
      color: ${colors.colorCoreBlue};
    }
  }
`;

const Avatars = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  img {
    background: rgb(240, 240, 240);
    border: 2px solid rgb(255, 255, 255);
    margin-left: -12px;
    font-size: 10px;
    width: 34px;
    height: 34px;
    border-radius: 50%;

    &:first-child {
      margin-left: 0;
    }
  }

  &:first-child {
    > img {
      margin-left: 0;
    }
  }

  .avatar-info {
    color: #888;
    margin-left: 10px;
    font-size: 13px;

    .darker {
      display: inline;
    }

    span {
      color: ${silverGrey};
      width: auto;
    }
  }
`;

const CategoryLeft = styled.div``;

const Sidebar = styled.div`
  h6 {
    text-transform: uppercase;
    color: ${silverGrey};
    font-weight: 400;
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 1px;

  ${CategoryLeft} {
    flex: 0 0 75%;
    max-width: 75%;
    padding-right: 30px;
  }

  ${Sidebar} {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;

const SidebarIcon = styled.div`
  font-size: 20px;
`;

const SidebarContent = styled.div`
  overflow: hidden;
  h6 {
    margin-bottom: 0;
    margin-top: 0.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 300;
    font-size: 14px;
    margin: 0.5rem 0;
  }
`;

const SidebarItem = styledTS<{ active?: boolean }>(styled.div)`
  padding: 2px 10px;
  border-radius: 5px;
  color: ${silverGrey};
  margin: 2px 0;
  cursor: pointer;
  font-size: 14px;
  transition: 0.4s;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e4eaf0;
    transition: 0.4s;
  }

  ${props =>
    props.active &&
    `
      font-weight: 500;
      background: #e4eaf0;
      transition: 0.4s;

      h6 {
        font-weight: 500;
      }
    `}


  ${SidebarIcon} {
    flex: 0 0 18%;
    max-width: 18%;
    height: 100%;
    text-align: center;
  }

  ${SidebarContent} {
    flex: 0 0 82%;
    max-width: 82%;
    flex-wrap: nowrap;
  }
`;

export {
  Header,
  CategoryItem,
  CategoryIcon,
  CategoryContent,
  VideoTutorial,
  Avatars,
  CategoryLeft,
  Sidebar,
  Container,
  SidebarItem,
  SidebarIcon,
  SidebarContent
};
