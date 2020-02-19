import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 45%;
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

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
  background-color: ${({ theme }) => theme.index};
  z-index: 100;
  ::hover {
    cursor: pointer;
    transform: translateX(-100%);
  }
`;

const IndexPage = ({ data }) => {
  const {
    site: { siteMetadata: { author, title, description, subTitle } },
    file: { childImageSharp: { fluid } },
  } = data;

  return (
    <Fragment>
      <StyledWrapper>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p>{description}</p>
        <span>{author}</span>
      </StyledWrapper>
      <ImageWrapper fluid={fluid} />
    </Fragment>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        title
        description
        subTitle
        welcome
      }
    }
    file(name: { eq: "biblioteka" }, childImageSharp: { fixed: {} }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;

/**
 * 




    file(name: { eq: "biblioteka" }, childImageSharp: { fixed: {} }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
 */
