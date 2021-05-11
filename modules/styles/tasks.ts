import { colors, dimensions, typography } from "../styles";
import styled from "styled-components";
import styledTS from "styled-components-ts";

const stageGray = "#e5e8ec";
const pWitdh = 4;

const StageTitle = styled.h3`
  color: ${colors.colorPrimary};
  text-transform: uppercase;
  margin: 0 0 20px 0;
  font-size: ${typography.fontSizeHeading6}px;
  font-weight: ${typography.fontWeightLight}px;

  button {
    float: right;
  }
`;

const Wrapper = styledTS<{ backgroundColor?: string }>(styled.div)`
  margin-bottom: ${dimensions.coreSpacing}px;
  border-radius: 3px;
  padding: ${pWitdh * 2}px ${pWitdh}px 0;
  
  ${(props) => `background: ${props.backgroundColor || stageGray};`}
  
  display: flex;
  flex-wrap: wrap;
`;

const ItemWrapper = styled.div`
  margin: 0 ${pWitdh}px ${pWitdh * 2}px;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
  padding: 8px;
  outline: 0px;
  font-size: 12px;
  border-radius: 2px;
  transition: box-shadow 0.3s ease-in-out 0s;
  cursor: pointer;
  flex-basis: 24%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1400px) {
    flex-basis: 31.3333%;
  }

  @media (max-width: 1000px) {
    flex-basis: 48.3333%;
  }

  @media (max-width: 850px) {
    flex-basis: 98.3333%;
  }
`;

const Content = styledTS<{ type?: string }>(styled.div)`
  h5 {
    margin-bottom: 8px;
    word-break: break-word;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const Right = styled.div`
  float: right;
`;

const ItemFooter = styled.div`
  padding-top: 8px;
  margin-top: 8px;
  border-top: 1px dotted ${colors.borderPrimary};
  font-size: 11px;
`;

const ItemDate = styled.span`
  font-size: 11px;
  color: rgb(136, 136, 136);
`;

const TabContainers = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e8ec;
  overflow-x: hidden;
  transition: all ease 0.3;

  &:hover {
    overflow-x: auto;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c8cfd6;
    border-radius: 8px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #b7bec5;
  }
`;

const TabTitle = styledTS<{ color?: string; active?: boolean }>(styled.div)`
  flex: 1 1 auto;
  text-align: center;
  padding: 5px 10px;
  min-width: 100px;
  line-height: 20px;

  > a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  ${(props) =>
    props.active &&
    `
      border-bottom: 2px solid ${props.color || colors.colorPrimary};
      color: ${props.color || colors.colorPrimary};
      font-weight: 500;
    `}
`;

export {
  Wrapper,
  StageTitle,
  ItemWrapper,
  Content,
  ItemFooter,
  Right,
  ItemDate,
  TabContainers,
  TabTitle,
};
