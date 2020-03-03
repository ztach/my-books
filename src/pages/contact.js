import React from "react";
import { graphql } from 'gatsby';
import Image from "gatsby-image";
import styled from "styled-components";
import ContactPreview from "../components/ContactPreview/ContactPreview";

const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
`;

const ImageWrapper = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 42%;
  height: 100vh;
  object-fit: cover;
  background-color: ${({ theme }) => theme.index};
  z-index: 100;
`;

const ContactPage = ({ data: { datoCmsListgraph:{ picture } } }) => {
  
  return (
    <StyledWrapper>
      <ContactPreview />
      
      <ImageWrapper fluid={picture.fluid} />
    </StyledWrapper>

  );
};


export const query = graphql`
 {
  datoCmsListgraph(isactive: {eq: true}) {
    title
    slug
    isactive
    picture {
        fluid(maxWidth: 800, maxHeight: 1200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
    }
  }
 }
 `;

export default ContactPage;
