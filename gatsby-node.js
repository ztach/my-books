/**
import { graphql } from 'gatsby';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogBooksTemplate = path.resolve(`src/layouts/books.js`);
  const blogAuthorTemplate = path.resolve(`src/layouts/author.js`);
  //  const component = path.resolve(`src/auth0/LoginCallback.js`);
  const userApp = path.resolve("src/pages/app.js");

  const result = await graphql(`
  query queryBooks {
      allDatoCmsBook {
        __typename
        nodes {
          id
          slag
        }
      }

      allDatoCmsAuthor {
        __typename
        nodes {
          id
          slag
        }
      }

      allSitePage {
        __typename
        nodes {
          path
          id
        }
      }
  }
`);

  if (result.data.allDatoCmsBook.__typename === "DatoCmsBookConnection") {
    const { data: { allDatoCmsBook: { nodes } } } = result;

    nodes.forEach(({ id, slag }) => {
      createPage({
        path: `booksArticle/${slag}`,
        component: blogBooksTemplate,
        context: {
          id: id
        }
      });
    });
  }
  if (result.data.allDatoCmsAuthor.__typename === "DatoCmsAuthorConnection") {
    const { data: { allDatoCmsAuthor: { nodes } } } = result;
    nodes.forEach(({ id, slag }) => {
      createPage({
        path: `authorArticle/${slag}`,
        component: blogAuthorTemplate,
        context: {
          id: id
        }
      });
    });
  }
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/app/)) {
    page.matchPath = `/app/*`;

    createPage(page);
  }
};
