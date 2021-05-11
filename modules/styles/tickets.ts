import { dimensions, colors } from "../styles";
import styled from "styled-components";

const TicketRow = styled.div`
  margin-bottom: ${dimensions.coreSpacing}px;
  display: flex;
  flex-wrap: wrap;
`;

const TicketLabel = styled.div`
  font-weight: bold;
  flex: 0 0 20%;
`;

const TicketContent = styled.div`
  flex: 0 0 80%;
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

const TicketListRow = styled.div`
  margin-bottom: ${dimensions.unitSpacing}px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;

  div {
    flex: 0 0 15%;
    padding: 8px;
  }

  div:first-child {
    flex: 0 0 55%;
    border-left: none !important;
  }

  &.head {
    border: 1px solid ${colors.colorLightGray};
    font-weight: 500;
    color: ${colors.colorPrimary};

    div {
      border-left: 1px solid ${colors.colorLightGray};
    }
  }

  &.item {
    border: 0;
    box-shadow: 0px 0 15px -10px rgba(0, 0, 0, 0.35);
    transition: 0.4s;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 4px 30px -13px rgba(0, 0, 0, 0.25);
      transition: 0.4s;
    }

    .base-color {
      font-weight: bold;
    }

    align-items: center;
  }
`;

const TicketComment = styled.div`
  span {
    font-weight: bold;
    padding-right: 12px;
  }

  margin-bottom: ${dimensions.unitSpacing}px;
`;

const TicketHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div:first-child {
    width: 60%;
    margin-right: ${dimensions.coreSpacing}px;

    @media (max-width: 1550px) {
      width: 45%;
    }
  }

  .right {
    @media (max-width: 1140px) {
      button {
        margin-bottom: ${dimensions.unitSpacing}px;
      }
    }
  }
`;

export {
  TicketRow,
  TicketLabel,
  TicketContent,
  Table,
  TicketListRow,
  TicketComment,
  TicketHeaderWrapper,
};
