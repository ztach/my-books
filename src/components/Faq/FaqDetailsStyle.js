import styled from "styled-components";
import Button from "../Button/Button";

export const StyledWrapper = styled.div`
  text-align: justify;

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`;

export const StyledButton = styled(Button)`
  padding: 0;
  margin: 0;
  border: none;
    
  img {
    width: 50px;

    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.05);
    border-radius: 2px;
  }
`;
