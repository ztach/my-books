import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import AboutDocumenStyledtList from './AboutDocumenStyledtList'
import styled from 'styled-components';


const StyledPageWrapper = styled.div`
  width: 100%;
  display:flex;
`;


const AboutDocumentList = () => {

const data = useStaticQuery(graphql`
 { 
   allDatoCmsDousunieci {
      edges {
        node {
          title
          picture {
            fixed(width: 100) {
              tracedSVG
              src
            }
          }
          slug
          content {
            contentdata
            contentlink
            contentdocument
            contentpicture {
              fixed(width: 100) {
                      tracedSVG
                      src
                      sizes
                    }
              }
          }
        }
      }
    }
 }
`);

 
  
  const { allDatoCmsDousunieci: { edges } } = data;
  const [ imprezy,uchwaly ] = edges;

    
  return (
    <StyledPageWrapper>
    
      <AboutDocumenStyledtList 
        title={uchwaly.node.title}
        images={uchwaly.node.picture.fixed.src}
        svgImage={uchwaly.node.picture.fixed.tracedSVG}
        data={uchwaly.node.content}
      />
  
      <AboutDocumenStyledtList 
        title={imprezy.node.title}
        images={imprezy.node.picture.fixed.src}
        svg={imprezy.node.picture.fixed.tracedSVG}
        data={imprezy.node.content}
      />

    </StyledPageWrapper>
  )
}


export default AboutDocumentList;

