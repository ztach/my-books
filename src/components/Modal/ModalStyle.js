import styled from "styled-components";

export const StyledFaqModalWrapper = styled.div`
  text-align: justify;
  padding: 50px 30px;
  overflow: auto;
  text-align: justify;

  p {
    text-align: justify;
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  li {
    text-align: justify;
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  h2 {
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
    color: red;
    padding-right: 130px;
  }

  h3 {
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  h2::first-letter {
    font-size: 50px;
    font-weight: 700;
  }

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`;

export const ModalWrapper = styled.div`
  border-left: 10px solid red;
  z-index: 999;
  position: fixed;
  display: flex;

  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 85vw;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.5s ease-in-out;
`;

export const StyledButtonWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7%;
  background-color: white;
`;

export const StyledButton = styled.button`
  font-weight: 600;
  padding: 10px 20px;
  background-color: #222286;
  color: white;
`;
