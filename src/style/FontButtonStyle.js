import styled from "styled-components";
import Button from "../components/Button/Button";
import ButtonWrapper from "../components/Button/ButtonWrapper";

export const StyledButton = styled(Button)`
  right: ${({ size }) => `${size + 10}px`};
  width: 60px;
  height: 50px;
  font-size: ${({ nr, theme }) => (nr === 0 ? theme.fontSize.x : theme.fontSize.sx)};
  z-index: 1000;
`;

export const StyledButtonWrapper = styled(ButtonWrapper)`
  right: 35px;
  top: 2px;
  width: 160px;
`;
