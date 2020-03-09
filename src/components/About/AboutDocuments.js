import React from 'react'
import AboutUchaly from './AboutUchwaly';
import AboutImprezy from './AboutImprezy';
import styled from 'styled-components';

const StyledDocumentWrapper = styled.div`
  position:absolute;
  left:0;
  margin-top:15px;
  padding: 40px 0 50px 0;
  width: 100%;
  min-height:100%;
  background:rgb(255, 252, 203);
  text-align:center;
  h1 {
    font-size: 50px;
  }
`;

const StyledSubWrapper = styled.div`
 display:flex;
 `

const AboutDocuments = () => (
  <StyledDocumentWrapper>
    <h1>Dokumenty do pobrania</h1>
    <StyledSubWrapper>
      <AboutUchaly />
      <AboutImprezy />
    </StyledSubWrapper>
  </StyledDocumentWrapper>
)




export default AboutDocuments;
