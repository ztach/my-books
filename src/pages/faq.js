import React, { useState } from "react";
import { graphql } from 'gatsby';
import styled from "styled-components";
import FaqDetails from "../components/Faq/FaqDetails";

const StyledWrapper = styled.div`
  padding: 150px 0 0 50px;
  margin-right: 50px;
  text-align: justify;
  width: 50%;

  h1 {
    font-size: 25px;
    color: red;
    margin: 50px 0 30px 0;
  }

`;

const FaqPage = ( {data: { allDatoCmsFaq: { nodes } } }) => {
  const [openModal, setOpenModal] = useState(false);
  const [getId, setGetId] = useState({});

  const setData = (x) => {
    setGetId(x)
    setOpenModal(!openModal)
  }

    return (
    <StyledWrapper>
      <h1>FAQ, Komentarze, Pytania i Wszystko Do Kupy</h1>

      {nodes.map(({ id, slug, title,text, subtitle, picture }) => 
         <FaqDetails 
          key={id} 
          id={id} 
          title={title} 
          subtitle={subtitle} 
          text={text}
          picture={picture} 
          slug={slug} 
          openModal={openModal} 
          setData={setData}
          setOpenModal={setOpenModal}
          getId={getId}
         />      
      )}
    </StyledWrapper>

  );
};

export const query = graphql`
  {
    allDatoCmsFaq {
      nodes {
        id
        title
        subtitle
        text
        slug
        picture {
          fixed(width: 100) {
            tracedSVG
            src
            sizes
          }
        }
      }
    }
  }
`;

export default FaqPage;
