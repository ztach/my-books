import React from "react";
import InfoLabel from "../Label/InfoLabel";
import ImageAuthor from "../Images/ImageAuthor";
import PreviewLink from "../Link/PreviewLink";

const AuthorPreview = ({ title, image, slag, formatstyle }) => {
  return (
    <PreviewLink format={formatstyle} adres={`/authorArticle/${slag}`}>
      <ImageAuthor img={image} />
      <InfoLabel>{title}</InfoLabel>
    </PreviewLink>
  );
};
export default AuthorPreview;
