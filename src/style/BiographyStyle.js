import styled, { css, keyframes } from "styled-components";
import Image from "gatsby-image";

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const animation = ({ animationLength }) => css`${pulse} ${animationLength} linear infinite;`;

const PropsBox = styled.div(
  ({ format }) =>
    format === "13235D"
      ? {
          "background-color": `'#' + ${format}`,
          color: "black"
        }
      : {
          "background-color": "red",
          color: "green"
        }
);

export const PulseButton = styled.button`
  padding: 20px;
  background-color: ${({ format }) => "#" + format};
  animation: ${animation};
  ${PropsBox};
`;

export const BiographyDetailWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 50px;
  top: 50px;
  padding: 20px;
  font-size: ${({ sFont }) => `${sFont}px`};

  div p {
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  p {
    font-size: ${({ sFont }) => `${sFont}px`};
    line-height: ${({ sFont }) => `${sFont + 10}px`};
  }

  

  background-color: ${({ format }) => "#" + format};
  /* color: ${({ format, theme }) =>
    format === "3D4E8C" || format === "13235D" || format === "5C6BA5" || format === "3D4E8C" || format === "273877"
      ? theme.secondaryTab[0]
      : theme.secondaryTab[7]}; */

  ${({ format }) =>
    (format === "3D4E8C" || format === "13235D" || format === "5C6BA5" || format === "3D4E8C" || format === "273877") &&
    css`
      color: white;
    `};


  h1 {
    margin: 0 0 20px;
  }

  h4 {
    display: inline-block;
    margin-left: 250px;
    margin-top: -200px;
  }
`;

export const StyledImage = styled(Image)`
  display: inline-block;
  width: 10%;

  object-fit: cover;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;
