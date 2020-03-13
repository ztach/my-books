import React from 'react';
import { graphql } from 'gatsby';
import { GlobalDispatchContext, GlobalStateContext } from '../context/GlobalContextProvider';

import AboutDocuments from '../components/About/AboutDocuments';
import {
  StyledWrapper,
  StyledPageDownWrapper,
  StyledPageWrapper,
  StyledButton
} from '../style/AboutStylePage';


const AboutPage = ({ data: { datoCmsAbout: { mybody } } }) => {
  const dispatch = React.useContext(GlobalDispatchContext);
  const state = React.useContext(GlobalStateContext);
  
  return (
    <StyledWrapper state={state.theme} >

        <StyledButton
          onClick={() => {
            dispatch({ type: "TOGGLE_THEME" })
          }}
        >
          Toggle Theme
        </StyledButton>

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
