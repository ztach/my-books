import React from 'react'
<<<<<<< HEAD
import AboutDocumentList from './AboutDocumentList'
import styled from 'styled-components';

const StyledDocumentWrapper = styled.div`
  padding: 40px 0 50px 0;
  width: 100%;
  height:100vh;
  border-top:1px solid black;
    text-align:center;
=======
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
>>>>>>> master
  h1 {
    font-size: 50px;
  }
`;

<<<<<<< HEAD
const AboutDocuments = () => (
  <StyledDocumentWrapper>
    <h1>Dokumenty do pobrania</h1>
    
      <AboutDocumentList />
    
=======
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
>>>>>>> master
  </StyledDocumentWrapper>
)




export default AboutDocuments;
