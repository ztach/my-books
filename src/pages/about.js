import React from 'react';
import { graphql } from 'gatsby';
<<<<<<< HEAD
import AboutDocuments from '../components/About/AboutDocuments';

=======
import AboutDocuments from '../components/About/AboutDocuments'
>>>>>>> master
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display:grid;
  width: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 201, 230,.4) 0%,
    rgba(55, 200, 181,.4) 20%,
    rgba(214, 248, 234,.4)  40%,
    rgba(248, 208, 214,.4) 60%,
    rgba(150, 84, 134,.4) 80%,
    rgba(255, 170, 21,.4) 100%
  );

`;

const StyledPageDownWrapper = styled.div`
  width:100%;
  height:100vh;
  border-top:1px solid black;

`;

const StyledPageWrapper = styled.div`
  padding: 80px 0 0 50px;
  width:80%;
  height:100vh;
border-top:1px solid black;
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
      <StyledPageWrapper>
        <div dangerouslySetInnerHTML={{ __html: mybody }} />
      </StyledPageWrapper>

      <AboutDocuments />

      <StyledPageDownWrapper>
        <h1>Tu jest dalej</h1>
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis voluptatum et autem perferendis sint magni alias, itaque temporibus quidem rerum facilis molestiae ratione aliquid quis aspernatur facere assumenda laudantium.
      </p> 
      </StyledPageDownWrapper>

      <StyledPageDownWrapper>
        <h1>Tu jest dalej jeszcze</h1>
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis voluptatum et autem perferendis sint magni alias, itaque temporibus quidem rerum facilis molestiae ratione aliquid quis aspernatur facere assumenda laudantium.
      </p> 
      </StyledPageDownWrapper>

      <StyledPageDownWrapper>
        <h1>Tu jest dalej i do jeszcze </h1>
      <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis voluptatum et autem perferendis sint magni alias, itaque temporibus quidem rerum facilis molestiae ratione aliquid quis aspernatur facere assumenda laudantium.
      </p> 
      </StyledPageDownWrapper>

      

<<<<<<< HEAD
=======
      <div dangerouslySetInnerHTML={{ __html: mybody }} />

      <AboutDocuments />
>>>>>>> master
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
