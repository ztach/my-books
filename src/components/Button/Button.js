import styled from "styled-components";

const Button = styled.button`
  display: block;
  margin-bottom: 25px;
  max-width: 60%;
  padding: 10px 20px;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};

  background-color: ${({ theme }) => theme.secondaryTab[6]};
  color: white;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 15px;

  :hover {
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
    color: ${({ theme }) => theme.secondaryTab[6]};
    background-color: ${({ theme }) => theme.secondaryTab[0]};
    cursor: pointer;
    text-decoration: none;
  }
`;

export default Button;
