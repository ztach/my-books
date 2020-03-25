import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StyledNav, NavigationList, NavigationListItem, StyledButton } from "./RigthNavigationStyle";

const RightNavigation = ({ state }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <StyledButton onClick={() => setIsOpen(!isOpen)} open={isOpen} />
    <StyledNav state={state} open={isOpen}>
      <NavigationList open={isOpen}>
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
  </>
  );
};

export default RightNavigation;

/**
 *       <StyledButton clasName="hamburger">
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

 */
