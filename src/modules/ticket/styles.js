import styled from 'styled-components';

const Label = styled.div`
  a {
    background-color: ${(props) => props.color} !important;
  }
`;

const DueDate = styled.span`
  background: ${(props) => props.color} !important;
  font-size: 12px;
  color: #fff;
  background: #aaaeb3;
  padding: 3px 5px;
  position: absolute;
  left: 0;
  bottom: 15px;
  border-radius: 0 5px 5px 0;
`;

const CloseDate = styled.span`
  background: ${(props) => props.color} !important;
  span {
    font-size: 12px;
    color: #fff;
    background: #f8d773;
    border-radius: 5px;
    padding: 3px 5px;
  }
`;

export { Label, DueDate, CloseDate };
