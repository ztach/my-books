import React from "react";
import Image from "gatsby-image";
import styled from "styled-components";

const ImgWrapper = styled(Image)`
  width: 70%;
  height: 80%;
  object-fit: cover;
  object-position:center;
  
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;

const ImageAuthor = ({ img }) => {
  return <ImgWrapper fluid={img} />;
};

export default ImageAuthor;
