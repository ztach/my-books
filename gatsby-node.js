/**
import { graphql } from 'gatsby';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogBooksTemplate = path.resolve(`src/layouts/books.js`)
  const blogAuthorTemplate = path.resolve(`src/layouts/author.js`)
  const component = path.resolve(`src/auth0/LoginCallback.js`)

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
    }
  `)

  if (
    result.data.allDatoCmsBook.__typename === "DatoCmsBookConnection"
  ) {
    result.data.allDatoCmsBook.nodes.forEach(book => {
      createPage({
        path: `booksArticle/${book.slag}`,
        component: blogBooksTemplate,
        context: {
          id: book.id,
        },
      })
    })
  }
  if (
    result.data.allDatoCmsAuthor.__typename ===
    "DatoCmsAuthorConnection"
  ) {
    result.data.allDatoCmsAuthor.nodes.forEach(authr => {
      createPage({
        path: `authorArticle/${authr.slag}`,
        component: blogAuthorTemplate,
        context: {
          id: authr.id,
        },
      })
    })
  }



}


