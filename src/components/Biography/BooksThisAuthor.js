import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import styled from "styled-components";

const StyledWrapperAuthorBooks = styled.div`
  margin: 0;
  padding: 0;
  widht: 50%;
  background-color: red;
`;

const BooksThisAuthor = ({ id }) => {
  //   const data = useStaticQuery(graphql`
  //     {
  //       allDatoCmsBook(filter: { authorid: { id: { eq: $id } } }) {
  //         nodes {
  //           authorid {
  //             name
  //             id
  //           }
  //           title
  //         }
  //       }
  //     }
  //   `);

  return <StyledWrapperAuthorBooks>aa</StyledWrapperAuthorBooks>;
};

export default BooksThisAuthor;

//: { title, authorid: { id, name } }
/**
 *       nodes.map(item =>
      <li>item.title</li>
      <li>item.authorid.name</li>
      )

 */
