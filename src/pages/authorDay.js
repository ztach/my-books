import React from "react";
import { graphql } from "gatsby";
import {  GlobalStateContext } from '../context/GlobalContextProvider';
import FontButton from '../components/FontButton/FontButton';

import { StyledWrapper } from '../style/AuthorDayStyle';


const AuthorDayPage = ({ data: { datoCmsAuthorday: { authorname } } }) => {
  
  const state = React.useContext(GlobalStateContext);  
  console.log(state.sFont)
  return (
    <>
      <FontButton />
      <StyledWrapper sFont={state.sFont}>
          <div dangerouslySetInnerHTML={{ __html: authorname }} />
      </StyledWrapper>
   </>
)
}

export const query = graphql`
  {
    datoCmsAuthorday(ispageday: { eq: true }) {
      authorname
    }
  }
`

export default AuthorDayPage
