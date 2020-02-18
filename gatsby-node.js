/**
import { graphql } from 'gatsby';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogBooksTemplate = path.resolve(`src/layouts/books.js`);
  const result = await graphql(`
    query queryBooks {
        allDatoCmsBook {
            nodes {
                    id
                    slag
            }
        }
  }
`);

  result.data.allDatoCmsBook.nodes.forEach((book) => {
    createPage({
      path: `booksArticle/${book.slag}`,
      component: blogBooksTemplate,
      context: {
        id: book.id,
      },
    });
  });
};
