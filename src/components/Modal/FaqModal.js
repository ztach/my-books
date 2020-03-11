import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  text-align: justify;
  padding: 30px;
  overflow: auto;
  line-height:30px;
  
 h2 {
    font-size: 20px;
    color: red;
    padding-right: 130px;
  }

  h3 {
    font-size: 18px;
  }

  h2::first-letter {
    font-size: 50px;
    font-weight: 700;
  }

  table tbody tr td:nth-child(2) {
    padding-left: 40px;
  }
`;

const FaqModal = ({  getId: { id, title, subtitle, text } }) => {

    return (
        <StyledWrapper>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: subtitle }} />
            <div dangerouslySetInnerHTML={{ __html: text }} />
        </StyledWrapper>
    )
}


export default FaqModal;