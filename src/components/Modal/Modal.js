import React from "react";
import styled from "styled-components";
import FaqModal from './FaqModal'


const ModalWrapper = styled.div`
  border-left: 10px solid red;
  z-index: 999;
  position: fixed;
  display: flex;

  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 91vw;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? "0" : "100%")});
  transition: transform 0.5s ease-in-out;
`;

const StyledButton = styled.button`
  width: 30px;
  background-color: green;
`;

const Modal = ({ openModal, setOpenModal, getId }) => {

  return (
    <ModalWrapper isVisible={openModal}>
      <FaqModal 
          getId={getId}
      />
      <StyledButton onClick={()=>setOpenModal(false)}>x</StyledButton>
    </ModalWrapper>
  );
};

export default Modal;
