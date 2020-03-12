import React from "react";
import { PreviewWrapperB, PreviewInfoLabelB, StyledImg } from "./StyledPreview";

const BookPreview = ({ title, image, slag }) => (
  <PreviewWrapperB to={`/booksArticle/${slag}`}>
    <StyledImg cover={image} />
    <PreviewInfoLabelB>
      <h2>{title}</h2>
    </PreviewInfoLabelB>
  </PreviewWrapperB>
);

export default BookPreview;
