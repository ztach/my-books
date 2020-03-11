import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  padding: 80px 0 0 50px;
  width: 80%;

  h2 {
    font-size: 50px;
  }

  .styleLinks {
    width: 60%;
    padding: 20px;
    background-color: rgba(248, 214, 214, 0.459);
    color: red;

    p {
      font-weight: 700;
      text-transform: uppercase;

      a {
        text-transform: none;
        text-decoration: none;
      }
      a:hover {
        background-color: rgb(146, 25, 25);
        color: rgb(246, 250, 9);
        transform: scale(1.2);
      }
    }
  }
`;


const AboutImprezy = () => {

const data = useStaticQuery(graphql`
{
  allDatoCmsDousunieci(filter: {slug: {eq: "imprezy"}}) {
    edges {
      node {
        title
        slug
        content {
          contentdata
          contentlink
          contentdocument
        }
      }
    }
  }
}
`);

  const { allDatoCmsDousunieci: { edges } } = data;
  const { node } = edges[0];
  const { title, content } = node;

  
  return (
    <StyledWrapper>
   <h2>{title}</h2>
      <ul>
        {content.map(({ contentdocument, contentlink, contentdata }) =>
          <li key={contentdocument}>
            {contentdata} - <div dangerouslySetInnerHTML={{ __html: contentlink }} />{contentdocument}
          </li>
        )
        }

      </ul>    </StyledWrapper>
  )
}



export default AboutImprezy;
