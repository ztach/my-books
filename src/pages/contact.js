import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right:50px;
  text-align:justify;
  

img {
  width:150px;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.945);
  border-radius: 15px;
}

h2 {
  font-size: 20px;
  color:red;
  margin:50px 0 30px 0;
}

h3{
  margin:50px 250px;
}

h2::first-letter{
  font-size:50px;
  font-weight:700;
  
}

table tbody tr td:nth-child(2) {
  padding-left:40px;
}
`;
 

const ContactPage = ({ data: { datoCmsContactpage: { contact } } }) => (
  <StyledWrapper>

    <div dangerouslySetInnerHTML={{ __html: contact }} />
  </StyledWrapper>
);

export const query= graphql`
 {
  datoCmsContactpage(id: {eq: "DatoCmsContactpage-3217344-pl"}) {
    contact
    id
  }
}
`;

export default ContactPage;
//   DatoCmsContactpage-3217344-pl  
//  DatoCmsContactpage-3186131-pl