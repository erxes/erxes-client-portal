import { dimensions } from '../styles';
import styled from 'styled-components';

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

export { TicketRow, TicketLabel, TicketContent };
