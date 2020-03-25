import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const ImgWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 42%;
  height: 100vh;
  object-fit: cover;
  background-color: ${({ theme }) => theme.secondaryTab[6]};
  z-index: 100;
`;

const ImageWrapper = ({ img }) => {
  return <ImgWrapper fluid={img} />;
};

export default ImageWrapper;
