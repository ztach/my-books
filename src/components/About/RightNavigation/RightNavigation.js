import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Animations from "../../../style/Animations";
import "./RightNavigation.css";

const StyledNav = styled.nav`
  position: fixed;
  top: 150px;
  right: 0;
  width: 10%;
  height: 80%;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, state }) => theme.primaryTab[state]};
  border-radius: 5px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.25);

  a {
    text-decoration: none;
    color: inherit!;
  }
`;

const NavigationList = styled.ul`
  margin: 50px 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const NavigationListItem = styled.li`
  display: block;
  background-color: ${({ theme }) => theme.secondaryTab[0]};
  margin: 25px 0;

  background-color: ${({ theme, state }) => theme.primaryTab[state]};

  border-radius: 5px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.60);
  text-align: center;
  animation: ${Animations.fadeInUp} 0.2s;
  transition: opacity 0.2s ease;

  a {
    display: block;
    font-weight: ${({ theme }) => theme.bold};
    font-size: ${({ theme }) => theme.fontSize.xxs};
    border-radius: 5px;
    padding: 10px 5px;
  }
  a:hover {
    cursor: pointer;
    padding: 10px 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.secondaryTab[6]};
    color: ${({ theme }) => theme.secondaryTab[0]};
  }

  a.active {
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
    border-radius: 5px;
    padding: 10px 10px;
    background-color: ${({ theme }) => theme.secondaryTab[6]};
    color: ${({ theme }) => theme.secondaryTab[0]};
  }
`;

const Hamburger = styled.button`
  left: 40px;
  top: 40px;
  width: 40px;
  height: 35px;
  border: none;
  background-color: transparent;
  border-top: 5px solid #000000;
  position: relative;
  transition: .3s transform linear;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 5px solid #000000;
    transform: translateY(10px);
  }

  &::after {
    transform: translateY(25px);
    transition: .3s transform linear;
  }

  &:focus {
    transform: rotate(45deg) translateX(5px);
    border: none;
  }

  &:focus::after {
    transform: rotate(-90deg) translateX(-10px);
  }
`;

const RightNavigation = ({ state }) => {
  return (
    <StyledNav state={state}>
      <Hamburger />

      <NavigationList>
        <NavigationListItem state={state}>
          <AnchorLink to="/about#str1" title="str1">
            O MNIE
          </AnchorLink>
        </NavigationListItem>
        <NavigationListItem state={state}>
          <AnchorLink to="/about#str2" title="str2">
            DOKUMENTY DO POBRANIA
          </AnchorLink>
        </NavigationListItem>

        <NavigationListItem state={state}>
          <AnchorLink to="/about#str3" title="str3">
            STR 3
          </AnchorLink>
        </NavigationListItem>

        <NavigationListItem state={state}>
          <AnchorLink to="/about#str4" title="str4">
            STR 4
          </AnchorLink>
        </NavigationListItem>

        <NavigationListItem state={state}>
          <AnchorLink to="/about#str5" title="str5">
            STR 5
          </AnchorLink>
        </NavigationListItem>

        <NavigationListItem state={state}>
          <AnchorLink to="/about#str6" title="str6">
            STR 6
          </AnchorLink>
        </NavigationListItem>
      </NavigationList>
    </StyledNav>
  );
};

export default RightNavigation;
