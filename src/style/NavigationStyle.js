import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat";
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Logo = styled.span`font-weight: 700;`;

export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const NavigationListItem = styled.li`
  font-weight: 600;
  font-size: 15px;
  margin-left: 37px;

  ::hover {
    cursor: pointer;
  }

  .active {
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
    border-radius: 5px;

    padding: 10px 15px;
    background-color: #222286;
    color: white;
  }
`;
