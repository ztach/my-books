import React from "react";

import { PreviewWrapperA, PreviewInfoLabelA, StyledImage } from "../BookPreview/StyledPreview";

const AuthorPreview = ({ title, image, slag, formatstyle }) => {
  return (
    <PreviewWrapperA format={formatstyle} to={`/authorArticle/${slag}`}>
      <StyledImage fluid={image} />
      <PreviewInfoLabelA>
        <h2>{title}</h2>
      </PreviewInfoLabelA>
    </PreviewWrapperA>
  );
};
export default AuthorPreview;
