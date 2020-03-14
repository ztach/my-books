import React, { Fragment } from "react";
import { BiographyDetailWrapper, StyledImage } from "../../style/BiographyStyle";

const BiographyDetail = props => {
  const { sFont, id, name, subtitle, text, picture, formatstyle } = props;
  return (
    <Fragment>
      <BiographyDetailWrapper sFont={sFont} key={id} format={formatstyle}>
        <h2>{name}</h2>
        {picture !== null ? <StyledImage fluid={picture.fluid} /> : null}
        <h4> {subtitle}</h4>
        <p>{text}</p>
      </BiographyDetailWrapper>
    </Fragment>
  );
};

export default BiographyDetail;
