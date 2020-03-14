import styled from "styled-components";

export const StyledButton = styled.button`
  right: ${({ size }) => `${size + 10}px`};
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgb(7, 68, 148);
  font-size: ${({ nr }) => (nr === 0 ? "20px" : "40px")};
  color: white;
  font-weight: 600;
`;

export const StyledButtonWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 5px;
  display: flex;
  width: 160px;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  align-items: stretch;
  z-index: 10000;
`;
