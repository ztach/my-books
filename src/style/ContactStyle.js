import styled from 'styled-components';

export const StyledLogInWrapper = styled.button` 
  display:${({ isNotLogin }) => isNotLogin ? 'block' : 'flex' }; 
  justify-content:space-evenly; 
  align-items:center; 
  width: ${({ isNotLogin }) => isNotLogin ? '30%' : '20%' }; 
  height:${({ isNotLogin }) => isNotLogin ? '150px' : '50px' }; 
  margin: ${({ isNotLogin }) => isNotLogin ? '0 150px' : '100px 0 0 0' }; 
  
  background-color:${({ isNotLogin, theme }) => isNotLogin ? theme.secondaryTab[6] : 'rgb(219, 218, 219)' }; 
  color:${({ isNotLogin, theme }) => isNotLogin ? theme.secondaryTab[0] : 'rgb(219, 218, 219)' }; 
  


  font-size:${({ isNotLogin }) => isNotLogin ? '50px' : '20px' } ; 
  font-weight:700; 
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.45); 
  border-radius: 15px; 
  border:none; 
  :hover{ 
    background-color:black; 
    color:blanchedalmond; 
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.95); 
  } 
`; 
