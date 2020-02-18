import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: 'Montserrat';
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  width: 40%;
  background-color: ${({ activecolor, theme }) =>
    activecolor ? theme[activecolor] : theme.index};};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

const FooterListItem = styled.li`
  font-weight: 600;

  margin-left: 37px;

  ::hover {
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterList>
        <FooterListItem>@Staszek Olejnik</FooterListItem>
        <FooterListItem>Tu będzie to co lubię</FooterListItem>
        <FooterListItem>tu też</FooterListItem>
        <FooterListItem>A tu nie</FooterListItem>
      </FooterList>
    </FooterWrapper>
  );
};

export default Footer;
