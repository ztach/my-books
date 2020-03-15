import React from "react";
import styled from "styled-components";

const StyledInfoLabel = styled.div`
  display: block;
  max-width: 400px;
  min-width: 350px;
  background-color: ${({ theme }) => theme.secondaryTab[6]};
  color: white;
  padding: 8px 15px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sx};
  font-weight: ${({ theme }) => theme.bold};
`;

const InfoLabel = ({ children }) => {
  return <StyledInfoLabel>{children}</StyledInfoLabel>;
};

export default InfoLabel;
