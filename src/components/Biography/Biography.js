import React, { Fragment } from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const BiographyDetailWrapper = styled.div`
  position: relative;
  width: 95%;
  margin-left: 50px;
  top: 50px;
`;

const StyledImage = styled(Image)`
  
  right: -950px;
  top: 500px;
  width: 50%;
  
  object-fit: cover;
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
  border-radius: 10px;
`;

const BiographyDetail = ({ id, name, subtitle, text, picture }) => {
  return (
    <Fragment>
      {picture !== null && <StyledImage fluid={picture.fluid} />}
      <BiographyDetailWrapper key={id}>
        <h2>{name}</h2>
        <h4>{subtitle}</h4>
        <p>{text}</p>
      </BiographyDetailWrapper>
    </Fragment>
  );
};

export default BiographyDetail;
