import React from 'react'
import AboutDocumentList from './AboutDocumentList'
import styled from 'styled-components';

const StyledDocumentWrapper = styled.div`
  padding: 40px 0 50px 0;
  width: 100%;
  height:100vh;
  
    text-align:center;
  h1 {
    font-size: 50px;
  }
`;

const AboutDocuments = () => {
  
        
  return (
    <StyledDocumentWrapper    id="str2">
      
    <h1>Dokumenty do pobrania</h1>
    
      <AboutDocumentList />
    
  </StyledDocumentWrapper>
)
}



export default AboutDocuments;
