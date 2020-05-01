import React from "react";
import Card from "../Card/Card";
import Avatar from "../Avatar/Avatar";
import styled from "styled-components";
import WordIcon from '../../assets/icons/it-word-icon.svg'

const StyledUchwalyWrapper = styled.div`
  padding: 80px 0 0 25px;
  width: 40%;
  height:83vh;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  

  }

  .styleLinks {
    width: 60%;
    padding: 20px;
    color: red;
   
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 160px;
  height: 160px;
  position:relative;
  right: -30px;
  top: 0px;
  
`;

const StyledHeading = styled.div`
  margin: 15px auto;
  font-size: 1.3rem;
  font-weight: 600;
  width: 100%;

  h2 {
    font-size: 1.4rem;
  }
`;

const StyledDocumentList = styled.div`
  padding: 10px 0 0 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px 20px;
`;

const StyledObrazek = styled.div`
  width: 50px;
  fill: red;
  
`;


const AboutDocumenStyledtList = ({ title, images, svgImage, data }) => {
  return (
    <StyledUchwalyWrapper>
      <StyledHeading>
        <h2>{title}</h2>
        <StyledAvatar />
        <StyledObrazek><WordIcon  /></StyledObrazek>
        
      </StyledHeading>
      <StyledDocumentList>
        {data.map(item => (
          <Card
            key={item.contentdocument}
            data={item.contentdata}
            link={item.contentlink}
            image={item.contentpicture || ""}
            contDoc={item.contentdocument}
          />
        ))}
      </StyledDocumentList>
    </StyledUchwalyWrapper>
  );
};

export default AboutDocumenStyledtList;
