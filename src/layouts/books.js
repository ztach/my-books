import React, { Fragment } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const BookWrapper = styled.div`
  width: 50%;
  margin: 150px 0 0 50px;
 ul, li,  p {
     text-align: justify;
     line-height:24px;
  }
  
`;

const BookDetails = styled.div`
  margin: 10px;
  padding-top:30px;

  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    text-decoration: none;
    list-style: none;
  }

  li {
    display: flex;
    margin: 5px 20px;
    p {
      width: 80px;
      font-weight: 600;
      margin: 0 20px;
    }
  }
`;

const StyledImageText = styled.div`
  position: absolute !important;
  top: 25%;
  right: 5%;
  width: 21%;
  height: 65%;
  display:flex;
  flex-direction:column
`;

const StyledImage = styled.img`
  
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: ${({ theme }) => theme.index};
  background: url(${({ cover }) => cover}) no-repeat;
`;

export const query = graphql`
  query querySingleBook($id: String!) {
    datoCmsBook(id: { eq: $id }) {
      id
      author
      title
      slag
      description
      kategoria
      ocena
      okladka
      pages
    }
  }
`;

const BooksLayout = ({ data }) => {
  const {
    datoCmsBook: {
      author,
      title,
      description,
      kategoria,
      ocena,
      okladka,
      pages,
    },
  } = data;

  return (
    <Fragment>
      <BookWrapper>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        
      </BookWrapper>

      <StyledImageText>
      <StyledImage cover={okladka} />
      <BookDetails>
        <ul>
          <li>
            <p>kategoria:</p> <span>{kategoria}</span>
          </li>
          <li>
            <p>ocena:</p> <span>{ocena}</span>
          </li>
          <li>
            <p>stron:</p> <span>{pages}</span>
          </li>
          </ul>
        
      </BookDetails>
    </StyledImageText>

    </Fragment>
  );
};

export default BooksLayout;
//
