import React, { Fragment } from 'react';
import styled from 'styled-components';
//import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const BookWrapper = styled.div`
  width: 50%;
  height: 70vh;
  margin: 150px 0 0 50px;
  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.lx};
    text-align: justify;
  }
`;

const BookDetails = styled.div`
  margin: auto 0 0 30px;

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

const StyledImage = styled.img`
  position: absolute !important;
  top: 25%;
  right: 5%;
  width: 21%;
  height: 51%;
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
        <p>{description}</p>
      </BookWrapper>
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

      <StyledImage cover={okladka} />
    </Fragment>
  );
};

export default BooksLayout;
//
