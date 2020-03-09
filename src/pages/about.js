import React from 'react';
import { graphql } from 'gatsby';
import AboutDocuments from '../components/About/AboutDocuments'
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 80px 0 0 50px;
  width: 80%;

  h2 {
    font-size: 50px;
  }

  .styleLinks {
    width: 60%;
    padding: 20px;
    background-color: rgba(248, 214, 214, 0.459);
    color: red;

    p {
      font-weight: 700;
      text-transform: uppercase;

      a {
        text-transform: none;
        text-decoration: none;
      }
      a:hover {
        background-color: rgb(146, 25, 25);
        color: rgb(246, 250, 9);
        transform: scale(1.2);
      }
    }
  }
`;

const AboutPage = ({ data: { datoCmsAbout: { mybody } } }) => {

  return (
    <StyledWrapper>

      <div dangerouslySetInnerHTML={{ __html: mybody }} />

      <AboutDocuments />
    </StyledWrapper>
  );
};
export const query = graphql`
  {
    datoCmsAbout {
      mybody
    }
  }
`;

export default AboutPage;
