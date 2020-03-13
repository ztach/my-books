import React, { Fragment } from "react";
import { GlobalStateContext } from '../../context/GlobalContextProvider';
import FontButton from '../FontButton/FontButton';
import {
  BiographyDetailWrapper,
  StyledImage
} from '../../style/BiographyStyle';


const BiographyDetail = ({
  id,
  name,
  subtitle,
  text,
  picture,
  formatstyle,
}) => {

  const state = React.useContext(GlobalStateContext);

  return (
    <Fragment>
      <FontButton />

      <BiographyDetailWrapper sFont={state.sFont} key={id} format={formatstyle}>
        
        <h2>{name}</h2>
        {picture !== null ? (
          <StyledImage fluid={picture.fluid} />
        ) : null}
        <h4> {subtitle}</h4>
        <p>{text}</p>
      </BiographyDetailWrapper>
    </Fragment>
  );
};

export default BiographyDetail;
