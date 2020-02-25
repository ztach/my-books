import React from 'react';
import styled from 'styled-components';

import { graphql } from 'gatsby';
import BiographyDetail from './../components/Biography/Biography';

const ArticleLayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 150px 0 0 50px;
  text-align:justify;
  
`;

export const query = graphql`
  query querySingleAuthor($id: String!) {
    datoCmsAuthor(id: { eq: $id }) {
      id
      name
      biograpy {
        ... on DatoCmsTitlecontent {
          id
          name
          subtitle
          text
          picture {
            fluid(maxWidth: 350) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
      slag
    }
  }
`;

const AuthorLayout = ({ data }) => {
  const { datoCmsAuthor: { biograpy } } = data;

  return (
    <ArticleLayoutWrapper>
      {biograpy.map((item) => {
        const { id, name, subtitle, text, picture } = item;
        return (
          <BiographyDetail
            key={id}
            id={id}
            name={name}
            subtitle={subtitle}
            text={text}
            picture={picture}
          />
        );
      })}
    </ArticleLayoutWrapper>
  );
};

export default AuthorLayout;
