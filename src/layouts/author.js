import React from "react";
import styled from "styled-components";
import whithFontbutton from "../components/HOC/withFontbutton";
import { graphql } from "gatsby";
import BiographyDetail from "./../components/Biography/Biography";
import { StyledButton, StyledButtonWrapper } from "../style/FontButtonStyle";

const ArticleLayoutWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 150px 0 0 0px;
  text-align: justify;
`;

export const query = graphql`
  query querySingleAuthor($id: String!) {
    datoCmsAuthor(id: { eq: $id }) {
      id
      name
      formatstyle
      biograpy {
        ... on DatoCmsTitlecontent {
          id
          name
          subtitle
          text
          picture {
            fluid(maxWidth: 350) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
      slag
    }
  }
`;

const AuthorLayout = ({ data, sFont, oddSize, addSize, zeroSize }) => {
  const { datoCmsAuthor: { biograpy, formatstyle } } = data;
  return (
    <ArticleLayoutWrapper>
      <StyledButtonWrapper>
        <StyledButton size={100} onClick={addSize}>
          +
        </StyledButton>
        <StyledButton nr={0} size={50} onClick={zeroSize}>
          {sFont}
        </StyledButton>
        <StyledButton size={0} onClick={oddSize}>
          -
        </StyledButton>
      </StyledButtonWrapper>

      {biograpy.map(item => {
        const { id, name, subtitle, text, picture } = item;
        return (
          <BiographyDetail
            key={id}
            id={id}
            name={name}
            subtitle={subtitle}
            text={text}
            picture={picture}
            formatstyle={formatstyle}
            sFont={sFont}
          />
        );
      })}
    </ArticleLayoutWrapper>
  );
};

export default whithFontbutton(AuthorLayout);
