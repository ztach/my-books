import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: black;
  position: relative;
  width: 85%;
  height: 360px;
  margin:auto;

`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: -50px;
  min-height: 40px;
  min-width: 350px;
  background-color: black;
  color: white;
  padding: 5px 15px;
  text-align: center;

  h2,
  p {
    margin: 5px;
  }
`;

const StyledImage = styled(Image)`
  width: 80%;
  
  object-fit: cover;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;

const AuthorPreview = ({ title, image, slag }) => {
  return (
    <PreviewWrapper to={`/authorArticle/${slag}`}>
      <StyledImage fluid={image} />
      <PreviewInfoLabel>
        <h2>{title}</h2>
      </PreviewInfoLabel>
    </PreviewWrapper>
  );
};
export default AuthorPreview;
