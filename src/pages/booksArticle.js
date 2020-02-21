import React from 'react';
import { graphql } from 'gatsby';
import BookPreview from './../components/BookPreview/BookPreview';
import PageInfo from './../components/PageInfo/PageInfo';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 120px 0 0 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px 10px;
`;

const BooksArticlePage = ({ data }) => {
  const { allDatoCmsBook: { nodes }, allDatoCmsBookarticle } = data;

  return (
    <StyledWrapper>
      <PageInfo
        title={allDatoCmsBookarticle.nodes[0].title}
        paragraph={allDatoCmsBookarticle.nodes[0].description}
      />

      {nodes.map(({ author, id, title, slag, okladka }) => {
        return (
          <BookPreview
            key={slag}
            author={author}
            id={id}
            title={title}
            slag={slag}
            image={okladka}
          />
        );
      })}
    </StyledWrapper>
  );
};
export const query = graphql`
  {
    allDatoCmsBook {
      nodes {
        author
        id
        title
        slag
        okladka
      }
    }
    allDatoCmsBookarticle {
      nodes {
        title
        description
      }
    }
  }
`;

export default BooksArticlePage;
