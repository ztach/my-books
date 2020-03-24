import styled, { keyframes } from "styled-components";
import Button from "../../Button/Button";

const morph = keyframes`
  0% {font-size: 2rem; }
  50% {font-size: 3rem; }
  100% {font-size: 1rem; }
`;

const spinA = keyframes`
  0% { 
       transform: translateX(0% );
        opacity: 1;
        }
  50% {
       transform: translateX(25% );
      opacity: 0.4;
      }
  100% {
       transform: translateX(50% );
      opacity: 0;
      }      
`;

const spinB = keyframes`
  0% { 
        transform: translateX(-50% );
        opacity: 0;
        }

  50% { 
        transform: translateX(-25% );
        opacity: .5;
        }
  100% {
      transform: translateX(0% );      
      opacity: 1;
      }
`;

const btnTrans = keyframes`
  0% { 
        transform: translateX(-50% );
        }
  100% {
      transform: translateX(0% );      
      }
`;

export const StyledButton = styled(Button)`
    position:fixed;
    top: 17%;
    transform: ${({ open }) => (open ? "translateX(95vw);" : "translateX(81vw);")};
    transition: transform 1s ease-in-out;    
    border:none;
    width:50px;
    height:50px;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding:0;
    z-index:1000;

    &::after{
      ${({ open }) => (open ? "content:'=';" : "content:'x';")};
      position: absolute;
      left: 0;
      top: 3px;
      width: 100%;
      height: 100%;
    }

    &::before{
      
      ${({ open }) => (open ? "content:'x';" : "content:'=';")};
      position: absolute;
      left: 0;
      top: 3px;
      opacity:0;
      width: 100%;
    }

    &:hover::after {
      animation:  ${spinA} .6s ease-in 1;
      opacity:0;
  } 

    &:hover::before {
      animation:  ${spinB} .6s ease-in 1;
      opacity:1;
  } 
 `;

export const StyledNav = styled.nav`
  position: fixed;
  top: 150px;
  right: 0;
  height: 70%;
  background-color: azure;
  padding: 1rem;
  margin: 3rem 1rem 0 0;

  transform: ${({ open }) => (open ? "translateX(150%);" : "translateX(0%);")};

  transition: transform 1s ease-in-out;

  display: grid;
  grid-template-columns: 200px;
  grid-gap: 5rem;

  border-radius: 5px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.60);
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 1.5rem;
  justify-content: center;
`;

export const NavigationListItem = styled.li`
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
