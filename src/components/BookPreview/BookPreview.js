import React from "react";
import PreviewLink from "../Link/PreviewLink";
import InfoLabel from "../Label/InfoLabel";
import StyledImg from "../Images/ImageBooks";

const BookPreview = ({ title, image, slag }) => (
  <PreviewLink adres={`/booksArticle/${slag}`}>
    <StyledImg img={image} />
    <InfoLabel>{title}</InfoLabel>
  </PreviewLink>
);

export default BookPreview;
