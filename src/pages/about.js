import React from "react";
import { graphql } from "gatsby";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import AboutDocuments from "../components/About/AboutDocuments";
import { StyledWrapper, StyledPageDownWrapper, StyledPageWrapper } from "../style/AboutStylePage";
import Main from "../assets/Main.svg";
import styled from "styled-components";
import ListColor from "../components/List/ListColor";
import RightNavigation from '../components/About/RightNavigation/RightNavigation'


const MainWrapper = styled(Main)`
  position:absolute;
  top: -60px;
  right: 10px;
  z-index: 5000;
  width: 100px;
`;

const AboutPage = ({ data: { datoCmsAbout: { mybody } } }) => {
  const state = React.useContext(GlobalStateContext);


  return (
    <StyledWrapper state={state.themeCol}>

      <ListColor state={state.themeCol}>
        <h1>Samochody</h1>
      </ListColor>

      <RightNavigation state={state.themeCol} />

      
      <StyledPageWrapper id="str1">
        <div dangerouslySetInnerHTML={{ __html: mybody }} />
      </StyledPageWrapper>

      <AboutDocuments />

      <StyledPageDownWrapper id="str3">
        
        <h1>Tu jest dalej</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis voluptatum et autem perferendis sint magni
          alias, itaque temporibus quidem rerum facilis molestiae ratione aliquid quis aspernatur facere assumenda
          laudantium.
        </p>
      </StyledPageDownWrapper>

      <StyledPageDownWrapper id="str4">
        <h1>Tu jest dalej jeszcze</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis voluptatum et autem perferendis sint magni
          alias, itaque temporibus quidem rerum facilis molestiae ratione aliquid quis aspernatur facere assumenda
          laudantium.
        </p>
      </StyledPageDownWrapper>

      <StyledPageDownWrapper id="str5">
        <h1>Tu jest dalej i do jeszcze </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, nobis voluptatum et autem perferendis sint magni
          alias, itaque temporibus quidem rerum facilis molestiae ratione aliquid quis aspernatur facere assumenda
          laudantium.
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
