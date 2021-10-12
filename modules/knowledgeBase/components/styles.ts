import { colors, typography } from "../../styles";
import styled from "styled-components";
import styledTS from "styled-components-ts";

const silverGrey = "#6c718b";

const Header = styledTS<{ color?: string; backgroundImage?: string }>(
  styled.div
)`
  padding: 30px;
  color: ${colors.colorWhite};
  font-size: ${typography.fontSizeBody};

  background-color: ${(props) =>
    props.color ? props.color : colors.colorWhite};
  background-image: ${(props) =>
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
  margin-bottom: 16px;
  padding: 24px;
  border: 0;
  box-shadow: 0px 0 15px -10px rgba(0, 0, 0, 0.35);
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
  margin-right: 10px;
`;

const CategoryContent = styledTS<{ color?: string }>(styled.div)`
  h5 {
    color: ${(props) => props.color || colors.colorSecondary};
    font-weight: ${typography.fontWeightMedium};
    margin: 0 0 2px;
    font-size: 18px;
  }

  p {
    color: ${colors.colorCoreGray};
    margin: 5px 0px 11px;
    text-decoration: none;
    display: block;
    line-height: 1.4;
    font-weight: 300;
  }
`;

const VideoTutorial = styled.div`
  text-align: center;
  margin-top: 50px;

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
    overflow: hidden;

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

  ${(props) =>
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

const ArticleWrapper = styled.div`
  padding: 50px 80px;
  border: 0;
  padding: 1.5rem;
  background: ${colors.colorWhite};
  box-shadow: 0px 0 15px -10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: 0.4s;
  width: 100%;

  .content {
    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 20px;
    }
  }

  h4 {
    color: #036;
    font-size: 30px;
    font-weight: 400;
  }

  .content {
    font-size: 16px;
    line-height: 1.8;
    color: #6c718b;
  }
`;

const CategoryListWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .categories-wrapper {
    .list-category-title {
      margin: 6rem 0 1.5rem 0;
      text-align: center;
      font-size: 26px;
      font-weight: 400;
    }

    .card {
      border: 1px solid #e2e2e271;
      animation: fadeInDown 0.8s ease-in-out;
      margin-bottom: 10px;
    }

    .category-item {
      height: 100%;

      .icon-wrapper {
        margin-bottom: 10px;

        i {
          font-size: 25px;
          color: #6569df;
        }
      }
    }

    .tab-content {
      text-align: center;

      h5 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        color: #6c718b;
        font-weight: 400;
      }
    }

    .avatars {
      flex-flow: row wrap;
      justify-content: center;

      .avatar-info {
        margin-left: 0;
      }
    }

    .card {
      width: 100%;
      background: #fff;
      border: 0;
      box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.25);
      position: relative;
      min-height: 160px;
      padding: 1rem;
      margin-bottom: 10px;

      &:hover {
        box-shadow: 0 4px 30px -13px rgba(0, 0, 0, 0.25);
        transition: 0.4s;
      }

      &:hover > * {
        .icon-wrapper,
        .tab-content > h5 {
          color: #6569df !important;
        }
      }
    }

    a:hover {
      text-decoration: none;
    }

    .promoted {
      margin-top: -15rem;

      .promoted-wrap {
        background-color: #fff;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        border-radius: 3px;
        box-shadow: 0 1px 5px #6e6c6e4b;
        border-radius: $radius;

        .card {
          width: 100%;
          background: #fff;
          border: 0;
          box-shadow: none;
          position: relative;
          min-height: 160px;
          padding: 1.8rem 2.2rem 1.8rem 3.2rem;
          margin-bottom: 10px;

          .icon-wrapper {
            position: absolute;
            left: 25px;
            top: 25px;
          }

          .tab-content {
            text-align: left;
            width: 100%;

            p {
              margin-bottom: 0;
            }

            h5 {
              font-size: 14px;
              color: #000;
              font-weight: 600;
              text-transform: uppercase;
            }

            .description {
              display: flex;
              align-items: center;
            }
          }

          .more {
            color: #6569df;
            font-weight: 600;
            position: absolute;
            bottom: 15px;
            font-size: 12px;
            text-transform: uppercase;
          }

          .description {
            p {
              font-weight: 400;
            }
          }
        }
      }

      @media only screen and (min-width: 1080px) {
        .category-knowledge-list {
          .list-category-title {
            color: #fff;
            a {
              color: inherit;
            }
          }
        }
        .promoted-wrap {
          .card {
            width: 33%;
            border: none;
            border-radius: 0;

            &::after {
              content: "";
              position: absolute;
              display: inline-block;
              width: 160px;
              height: 160px;
              top: 0;
              right: -40px;
              background-color: transparent;
              border-top-right-radius: 6px;
              transform: scaleY(0.707) scaleX(0.4) rotate(45deg);
              box-shadow: 1px -1px rgba(0, 0, 0, 0.178);
              z-index: 1;
            }

            &:last-child:after {
              content: none;
            }
          }
        }
      }

      @media only screen and (max-width: 1080px) {
        .card {
          &::after {
            content: "";
            position: absolute;
            display: inline-block;
            width: 27vw;
            height: 27vw;
            top: 20%;
            left: 30%;
            margin-left: auto;
            margin-right: auto;
            background-color: transparent;
            border-top-right-radius: 6px;
            transform: rotate(135deg) skew(39deg, 39deg);
            box-shadow: 1px -1px rgba(0, 0, 0, 0.25);
            z-index: 1;
          }

          &:last-child:after {
            content: none;
          }
        }
      }
    }
  }
`;

const SidebarList = styled.div`
  height: 100%;
  min-height: 60vh;
  border-right: 1px solid #e1e1e1;

  .item {
    cursor: pointer;
    font-size: 14px;
    transition: all ease 0.3s;
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    > h6 {
      margin: 0;
      font-size: 14px;
    }

    > i {
      margin-right: 10px;
      font-size: 16px;
    }

    > span {
      color: #888;
      margin-left: 5px;
    }

    &.active {
      color: #6569df;

      h6,
      i {
        font-weight: 600;
      }
    }
  }
`;

const SubCategories = styled.div`
  padding: 0 0 5px 22px;

  .item {
    > i {
      margin-right: 2px !important;
    }
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
  SidebarList,
  SidebarItem,
  SidebarIcon,
  SidebarContent,
  ArticleWrapper,
  CategoryListWrapper,
  SubCategories,
};
