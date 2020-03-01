import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import FaqDetails from "../components/FAQ/FaqDetails";

const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
  width: 50%;

  h1 {
    font-size: 25px;
    color: red;
    margin: 50px 0 30px 0;
  }

  h2 {
    font-size: 20px;
    color: red;
    padding-right: 130px;

    img {
      width: 50px;
      box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.15);
      border-radius: 2px;
    }
  }

  h3 {
    font-size: 18px;
  }

  h2::first-letter {
    font-size: 50px;
    font-weight: 700;
  }

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`;

const FaqPage = ({
  location: { pathname },
  data: {
    allDatoCmsFaq: { nodes },
  },
}) => {
  return (
    <StyledWrapper>
      <h1>FAQ, Komentarze, Pytania i Wszystko Do Kupy</h1>
      {nodes.map(({ id, slug, title, subtitle, picture }) => {
        return (
          <FaqDetails
            key={id}
            id={id}
            title={title}
            subtitle={subtitle}
            picture={picture}
            slug={slug}
          />
        );
      })}
    </StyledWrapper>
  );
};

export const query = graphql`
  {
    allDatoCmsFaq {
      nodes {
        id
        title
        subtitle
        text
        slug
        picture {
          fixed(width: 100) {
            tracedSVG
            src
            sizes
          }
        }
      }
    }
  }
`;

export default FaqPage;
