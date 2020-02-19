import React from 'react';
import { graphql } from 'gatsby';
import BookPreview from './../components/BookPreview/BookPreview';
import PageInfo from './../components/PageInfo/PageInfo';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 80px 0 0 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  border: none;
`;

const pageData = {
  title: 'article',
  paragraph: `tu sobie wpiszę jakąś fajną sentencyjkę`,
};

const BooksArticlePage = ({ data }) => {
  const { allDatoCmsBook: { nodes } } = data;

  return (
    <StyledWrapper>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />

      {nodes.map(({ author, id, title, slag, okladka }) => {
        console.log(okladka);
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
  }
`;

export default BooksArticlePage;
