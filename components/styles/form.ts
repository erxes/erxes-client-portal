import styled from 'styled-components';
import { colors, dimensions } from '../styles';

const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 4px;
`;

const LoginFormWrapper = styled.form`
  width: 520px;
  margin: 50px auto 0;
`;

const Error = styled.label`
  color: ${colors.colorCoreRed};
  margin-top: ${dimensions.unitSpacing - 3}px;
  display: block;
  font-size: 12px;
`;

export { LoginFormWrapper, Input, Error };
