import React, { Fragment } from "react";
import { graphql } from "gatsby";
//import { login, logout, getCurrentUser } from "../utils/auth";
import ImageWrapper from "../components/Images/ImageWrapper";
import { HeaderWrapper as PageWrapper } from "../components/Headers/Header";
import ContactPreview from "../components/ContactPreview/ContactPreview";
import styled from "styled-components";

const StyledLogInWrapper = styled.button`
  display: ${({ isNotLogin }) => (isNotLogin ? "block" : "flex")};
  justify-content: space-evenly;
  align-items: center;
  width: ${({ isNotLogin }) => (isNotLogin ? "30%" : "20%")};
  height: ${({ isNotLogin }) => (isNotLogin ? "150px" : "50px")};
  margin: ${({ isNotLogin }) => (isNotLogin ? "0 150px" : "-50px 0 0 550px")};

  background-color: ${({ isNotLogin, theme }) => (isNotLogin ? theme.secondaryTab[6] : "rgb(219, 218, 219)")};
  color: ${({ isNotLogin, theme }) => (isNotLogin ? theme.secondaryTab[1] : theme.secondaryTab[6])};

  font-size: ${({ isNotLogin }) => (isNotLogin ? "50px" : "20px")};
  font-weight: 700;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.45);
  border-radius: 15px;
  border: none;
  :hover {
    background-color: black;
    color: blanchedalmond;
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.95);
  }
`;

const ContactPage = ({ data: { datoCmsListgraph: { picture } } }) => {
  //const { nickname, name, logo } = getCurrentUser();

  const name = "JA";

  return (
    <PageWrapper>
      {name ? (
        <Fragment>
          <ContactPreview />
        </Fragment>
      ) : (
        <StyledLogInWrapper>zaloguj się</StyledLogInWrapper>
      )}
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
