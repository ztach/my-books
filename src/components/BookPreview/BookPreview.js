import React from 'react';
import styled from 'styled-components';
// import Image from 'gatsby-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: black;
  position: relative;
  width: 70%;
  height: 360px;
  margin:auto;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;

`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 5px;

  min-height: 40px;
  background-color: black;
  color: white;
  padding: 5px 15px;

  h2,
  p {
    margin: 5px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 0 0 20px;
  object-fit: cover;
  background: url(${({ cover }) => cover}) no-repeat;
  background-size: 220px;
`;

const BookPreview = ({ title, image, slag }) => (
  <PreviewWrapper to={`/booksArticle/${slag}`}>
    <StyledImage cover={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default BookPreview;
