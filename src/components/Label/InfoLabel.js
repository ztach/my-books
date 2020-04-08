import React from "react";
import styled from "styled-components";

const StyledInfoLabel = styled.div`
  display: block;
  max-width: 400px;
  min-width: 350px;
  background-color: ${({ theme }) => theme.secondaryTab[6]};
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  color: white;
  padding: 8px 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sx};
  font-weight: ${({ theme }) => theme.bold};
  text-decoration:none;

  :hover{
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 1);
  }
`;

const InfoLabel = ({ children }) => {
  return <StyledInfoLabel>{children}</StyledInfoLabel>;
};

export default InfoLabel;
