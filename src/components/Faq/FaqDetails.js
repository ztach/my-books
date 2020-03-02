import React from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const StyledWrapper = styled.div`
  text-align: justify;
  
  
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

const StyledButton = styled.button`
  padding:0;
  margin:0;
  border: none;
  background-color:white;
  height: 40px;

  :hover {
    box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.5);
    cursor: pointer;
    text-decoration: none;
  }

    img {
      width: 50px;
      
      box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.15);
      border-radius: 2px;
    }
`;


const StyledBlock = styled.div`
  width:100%;
  display: flex;
  flex-grow:2;
  justify-items:center;

 h2 {
   width:100%;
    font-size: 20px;
    color: blueviolet;
    margin-left: 50px;
    padding: 0 10px 0 0;
  }

`;

const FaqDetails = ({setOpenModal,getId, setData, openModal, id, text, title, subtitle, picture }) => {


  return (
    <StyledWrapper key={id}>
    <StyledBlock>
      <StyledButton onClick={() => setData({id,title,subtitle,text})}>
        <img src={picture.fixed.src} alt="logo ksiazki" />
      </StyledButton>

        <h2>{title}</h2>
    </StyledBlock>

      <div dangerouslySetInnerHTML={{ __html: subtitle }} />
    
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal} 
        getId={getId}
        />
    </StyledWrapper>
  );
};

export default FaqDetails;
