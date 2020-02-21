import React from 'react';
import { graphql } from 'gatsby';
import AuthorPreview from './../components/AuthorPreview/AuthorPreview';
import PageInfo from './../components/PageInfo/PageInfo';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 120px 0 0 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 87px 90px;
`;

const AuthorArticlePage = ({ data }) => {
  const { allDatoCmsAuthor: { nodes }, allDatoCmsAuthorarticle } = data;

  return (
    <StyledWrapper>
      <PageInfo
        title={allDatoCmsAuthorarticle.nodes[0].title}
        paragraph={allDatoCmsAuthorarticle.nodes[0].description}
      />

      {nodes.map(({ name, id, slag, picture }) => {
        return (
          <AuthorPreview
            key={slag}
            author={name}
            id={id}
            title={name}
            slag={slag}
            image={picture.fluid}
          />
        );
      })}
    </StyledWrapper>
  );
};
export const query = graphql`
  {
    allDatoCmsAuthor {
      nodes {
        id
        name
        slag
        picture {
          fluid(maxWidth: 350) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
    allDatoCmsAuthorarticle {
      nodes {
        id
        title
        description
      }
    }
  }
`;

export default AuthorArticlePage;
