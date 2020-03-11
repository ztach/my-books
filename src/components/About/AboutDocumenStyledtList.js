import React from 'react'
import Card from '../Card/Card';
import Avatar from '../Avatar/Avatar';
import styled from 'styled-components';

const StyledUchwalyWrapper = styled.div`
  padding: 80px 0 0 25px;
  width: 50%;
  height:83vh;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  

  }

  .styleLinks {
    width: 60%;
    padding: 20px;
    background-color: rgba(248, 214, 214, 0.459);
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
  font-weight:600;
  display: flex;
  flex-basis:center;
  align-content:center;
  align-items:center;

  h2 {
    font-size: 1.4rem;
  }
  
`;

const StyledImg = styled.img`
  width: 160px;
  height: 90px;
  position:relative;
  right: 130px;
  top: 0px;

  background-color:transparent;
`;


const AboutDocumenStyledtList = ({ title,images,svgImage,data,}) => {
    
  return (
    <StyledUchwalyWrapper>
      <StyledHeading>
          <h2>{title}</h2>
          <StyledAvatar icon={images} />
      <StyledImg src={svgImage} />
      </StyledHeading>

        {
        data.map(item =>
          <Card 
            key={item.contentdocument}
            data={item.contentdata} 
            link={item.contentlink}
            image={item.contentpicture || ''}
            contDoc={item.contentdocument}
          />
        )
        }
       </StyledUchwalyWrapper>
    )
}



export default AboutDocumenStyledtList;

