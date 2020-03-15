import React from "react";
import { graphql } from "gatsby";
import ImageWrapper from "../components/Images/ImageWrapper";
import { HeaderWrapper as PageWrapper } from "../components/Headers/Header";
import ContactPreview from "../components/ContactPreview/ContactPreview";

const ContactPage = ({ data: { datoCmsListgraph: { picture } } }) => {
  return (
    <PageWrapper>
      <ContactPreview />
      <ImageWrapper img={picture.fluid} />
    </PageWrapper>
  );
};

export const query = graphql`
  {
    datoCmsListgraph(isactive: { eq: true }) {
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
