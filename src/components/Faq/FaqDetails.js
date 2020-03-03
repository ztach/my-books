import React from "react";
import Modal from "../Modal/Modal";
import {StyledWrapper,StyledButton,StyledBlock} from './FaqDetailsStyle'


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
