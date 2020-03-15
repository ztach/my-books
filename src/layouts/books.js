import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import FontButton from "../components/FontButton/FontButton";

import { BookWrapper, BookDetails, StyledImageText, StyledImage } from "../style/BooksPageStyle";

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
  const { datoCmsBook: { author, title, description, kategoria, ocena, okladka, pages } } = data;

  const state = React.useContext(GlobalStateContext);

  return (
    <Fragment>
      <FontButton />

      <BookWrapper sFont={state.sFont}>
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
