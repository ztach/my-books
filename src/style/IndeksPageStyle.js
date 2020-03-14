import styled from "styled-components";
import Image from "gatsby-image";

export const StyledWrapper = styled.div`
  width: 50%;
  height: 100vh;

  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-weight: 700;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 0;
  }
  p {
    margin: 20px 0 40px;
    width: 50%;
  }
`;

export const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 42%;
  height: 100vh;
  object-fit: cover;
  background-color: ${({ theme }) => theme.index};
  z-index: 100;
`;
