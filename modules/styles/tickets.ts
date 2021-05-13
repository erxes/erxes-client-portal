import { dimensions, colors } from "../styles";
import styled from "styled-components";
import styledTS from "styled-components-ts";
import { rgba, darken } from "./ecolor";

const TicketRow = styled.div`
  margin-bottom: ${dimensions.unitSpacing}px;
  display: flex;
  flex-wrap: wrap;
`;

const TicketLabel = styled.div`
  font-weight: 500;
  flex: 0 0 20%;
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.colorCoreGray};
`;

const TicketContent = styled.div`
  flex: 0 0 80%;
  padding-left: ${dimensions.unitSpacing}px;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-right: 1px solid ${colors.colorCoreLightGray};
  border-left: 1px solid ${colors.colorCoreLightGray};

  th {
    border: 1px solid ${colors.colorCoreLightGray};
    color: ${colors.colorPrimary};
  }

  td {
    border-bottom: 1px solid ${colors.colorCoreLightGray};
  }

  th,
  td {
    padding: 4px 8px;
  }
`;

const ListHead = styled.div`
  background-color: ${colors.bgActive};
  text-transform: uppercase;
  color: ${colors.colorCoreGray};
  font-size: 12px;
  padding: 8px 18px;
  display: flex;

  > div {
    display: inline-block;
    font-weight: 500;
    flex: 0 0 15%;
    text-align: center;

    &:first-child {
      flex: 0 0 55%;
      text-align: left;
    }
  }
`;

const ListBody = styled.div`
  background: #e5e8ec;
  padding: ${dimensions.coreSpacing}px;
`;

const ListRow = styled.div`
  display: flex;
  background: ${colors.colorWhite};
  margin-bottom: ${dimensions.unitSpacing}px;
  border-radius: 5px;
  padding: ${dimensions.unitSpacing}px;
  border: 1px solid ${colors.borderPrimary};
  cursor: pointer;
  transition: all ease 0.3s;

  > div {
    display: inline-block;
    flex: 0 0 15%;
    text-align: center;
    font-size: 13px;

    &:first-child {
      flex: 0 0 55%;
      text-align: left;
      text-transform: capitalize;
    }
  }

  &:hover {
    background: ${colors.bgLight};
  }
`;

const TicketDetailContent = styled.div`
  padding: 20px 40px;
`;

const TicketComment = styled.div`
  span {
    font-weight: bold;
    padding-right: 12px;
  }

  margin-bottom: ${dimensions.unitSpacing}px;
`;

const Label = styledTS<{ lblStyle: string }>(styled.div)`
  border-radius: 14px;
    padding: 3px 9px;
    text-transform: uppercase;
    font-size: 8px;
    display: inline-block;
    line-height: 1.32857143;
    font-weight: 500;
    background: ${(props) =>
      props.lblStyle === "danger"
        ? rgba(colors.colorCoreRed, 0.2)
        : rgba(colors.colorCoreGreen, 0.15)};
    color: ${(props) =>
      props.lblStyle === "danger"
        ? darken(colors.colorCoreRed, 50)
        : darken(colors.colorCoreGreen, 50)};
`;

export {
  TicketRow,
  TicketLabel,
  TicketContent,
  Table,
  Label,
  ListHead,
  ListBody,
  ListRow,
  TicketComment,
  TicketDetailContent,
};
