import React, { Fragment } from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const BiographyDetailWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 50px;
  top: 50px;
  padding:20px;
  
  background-color: ${({ format }) => 
    format==="standard" ? 
        'rgba(56, 81, 134,0.2)' 
        : 
        (format==="small" ? 'rgba(146, 167, 30,0.2)'  : 'rgba(146, 67, 3,0.2)' )
  };
  

  h1 {
    margin: 0 0 20px;
  }

  h4 {
    display: inline-block;
    margin-left:250px;
    margin-top:-200px;
  }
`;

const StyledImage = styled(Image)`
  display:inline-block;
  width: 10%;
  
  object-fit: cover;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;

const BiographyDetail = ({ id, name, subtitle, text, picture, formatstyle }) => {
  return (
    <Fragment>
    
      <BiographyDetailWrapper key={id} format={formatstyle}>
        <h2>{name}</h2>
        {picture !== null ? (<StyledImage fluid={picture.fluid} />) : null }
        <h4> {subtitle}</h4>
        <p>{text}</p>
      </BiographyDetailWrapper>
      
    </Fragment>
  );
};

export default BiographyDetail;
