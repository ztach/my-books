import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Animations from "../../../style/Animations";
import "./RightNavigation.css";

const StyledButton = styled.button`
  left: 10px;
  top: 20px;
  width: 58px;
  height: 36px;
  background-color: transparent;
  border: none;
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 150px;
  right: 0;
  height: 80%;
  background-color: azure;
  padding: 1rem;
  margin: 0 1rem;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 5rem;

  border-radius: 5px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.60);
`;

const NavigationList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-columns: 12rem;
  grid-gap: 2rem;
  justify-content: center;
`;

const NavigationListItem = styled.li`
  display: grid;
  background-color: ${({ theme, state }) => theme.primaryTab[0]};

  border-radius: 5px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.60);
  text-align: center;

  a {
    color: ${({ theme }) => theme.primaryTab[7]};
    text-decoration: none;
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 3rem;
    align-items: center;
  }

  a:hover {
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.secondaryTab[6]};
    color: ${({ theme }) => theme.secondaryTab[0]};
  }
`;

const RightNavigation = ({ state }) => {
  return (
    <StyledNav state={state}>
      <StyledButton clasName="hamburger">
        <svg className="hamburger-letter">
          <g id="down" className="down">
            <rect x="4" y="30" width="50" height="5" fill="black" />
          </g>
          <g id="midd" className="midd">
            <rect x="4" y="15" width="50" height="5" fill="black" />
          </g>
          <g id="upp" className="upp">
            <rect x="4" width="50" height="5" fill="black" />
          </g>
        </svg>
      </StyledButton>

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
