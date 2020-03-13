import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const Logo = styled.span`
  font-weight: 700;
`

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`

export const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 37px;

  ::hover {
    cursor: pointer;
  }

  .active {
    padding: 5px 15px;
    background-color: rgb(48, 5, 146);
    color: yellow;
  }
`

