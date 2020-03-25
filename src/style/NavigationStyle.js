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
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.25);
  a {
    text-decoration: none;
    color: inherit!;
  }
`;


export const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;

export const NavigationListItem = styled.li`

a{
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-left: 40px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.60);
  border-radius: 5px;

  padding: 10px 10px;
}
  a:hover {
    cursor: pointer;
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.45);
    border-radius: 5px;

    padding: 10px 10px;
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
