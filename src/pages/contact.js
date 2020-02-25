import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right:50px;
  text-align:justify;

h2 {
  font-size: 20px;
  color:red;
}
`;

const ContactPage = ({ data: { datoCmsContactpage: { contact } } }) => (
  <StyledWrapper>

    <div dangerouslySetInnerHTML={{ __html: contact }} />
  </StyledWrapper>
);

export const query= graphql`
 {
  datoCmsContactpage(id: {eq: "DatoCmsContactpage-3186131-pl"}) {
    contact
    id
  }
}
`;

export default ContactPage;
//      
//{ data: { datoCmsAbout: { mybody } } }