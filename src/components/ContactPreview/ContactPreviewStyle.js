import styled from "styled-components";
import Label from "../Label/Label";
import Imput from "../Input/Input";
import Button from "../Button/Button";

export const StyledWrapper = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  padding: 30px;
  margin-right: 50px;
  text-align: justify;
`;

export const StyledLabel = styled(Label)`
  width: 25%;
  margin: 15px 0;
  padding-bottom: 0;
`;

export const StyledInput = styled(Imput)`
  width: 60%;
`;

export const StyledArea = styled.textarea`
  display: block;
  height: 100px;
  width: 80%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.secondaryTab[6]};
  font-size: ${({ theme }) => theme.fontSize.sxx};
  color: ${({ theme }) => theme.secondaryTab[7]};
`;

export const StyledButton = styled(Button)`
  margin: 50px 0 0 0;
  padding: 20px 40px;
`;
