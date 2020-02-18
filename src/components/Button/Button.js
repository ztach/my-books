import styled from 'styled-components';

const Button = styled.button`
  display: block;
  
  max-width:60%;
  padding:15px 35px;
  text-align:center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight:${({ theme }) => theme.bold}
  color: ${({ activecolor, theme }) =>
    activecolor ? theme[activecolor + '110'] : theme.wspolnoty};
  background-color:${({ activecolor, theme }) =>
    activecolor ? theme[activecolor] : theme.rozliczenia};
  margin-bottom: 25px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.15);
  
  border-radius: 15px;
  

:hover{
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  color: ${({ activecolor, theme }) =>
    activecolor ? theme[activecolor + '110'] : theme.wspolnoty};
  background-color:${({ activecolor, theme }) =>
    activecolor ? theme[activecolor + '0'] : theme.wspolnoty};
  cursor:pointer;
  text-decoration:none;
}


`;

export default Button;
