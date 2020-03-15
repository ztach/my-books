import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  position: relative;
  width: 80%;
  height:360px;
  margin: 0 auto;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
`;

const PreviewLink = ({ format, adres, children }) => {
  return (
    <StyledLink format={format} to={adres}>
      {children}
    </StyledLink>
  );
};

export default PreviewLink;
