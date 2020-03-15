import React from "react";
import styled from "styled-components";
import { Header1 } from "../Headers/Header";

const Wrapper = styled.div`
  margin: 50px 0;
  max-width: 350px;

  p {
    font-size: ${({ theme }) => theme.fontSize.x};
    color: ${({ theme }) => theme.secondaryTab[6]};
    font-weight: ${({ theme }) => theme.light};
  }
`;

const PageInfo = ({ title, paragraph }) => (
  <Wrapper>
    <Header1>{title}</Header1>
    <p dangerouslySetInnerHTML={{ __html: paragraph }} />
  </Wrapper>
);

export default PageInfo;
