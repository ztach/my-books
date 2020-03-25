import React from "react";

import styled from "styled-components";

const StyledImage = styled.img`
  width: 64.1%;
  height: 81%;
  border: none;
  object-fit: cover;
  background: url(${({ cover }) => cover}) no-repeat;
  background-size: 204px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;

const ImageBooks = ({ img }) => {
  return <StyledImage cover={img} />;
};

export default ImageBooks;
