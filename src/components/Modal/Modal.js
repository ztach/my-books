import React from "react";
import FaqModal from "./FaqModal";
import {
  ModalWrapper,
  StyledButtonWrapper,
  StyledButton
} from './ModalStyle';

const Modal = ({ openModal, setOpenModal, getId }) => {

  return (
    <>

      <ModalWrapper  isVisible={openModal}>
        <FaqModal getId={getId} />
        <StyledButtonWrapper>
          <StyledButton onClick={() => setOpenModal(false)}>CLOSE</StyledButton>
        </StyledButtonWrapper>
      </ModalWrapper>
    </>
  );
};

export default Modal;
