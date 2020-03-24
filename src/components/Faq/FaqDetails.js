import React from "react";
import Modal from "../Modal/Modal";
import { StyledWrapper, StyledButton } from "./FaqDetailsStyle";
import { Header2, Header3 } from "../Headers/Header";
import ContainerRow from "../Container/ContainerRow";

const FaqDetails = ({ setOpenModal, getId, setData, openModal, id, text, title, subtitle, picture }) => {
  return (
    <StyledWrapper key={id}>
      <ContainerRow>
        <StyledButton onClick={() => setData({ id, title, subtitle, text })}>
          <img src={picture.fixed.src} alt="okrąg z napisem bookso" />
        </StyledButton>

        <Header2>{title}</Header2>
      </ContainerRow>

      <Header3 dangerouslySetInnerHTML={{ __html: subtitle }} />

      <Modal openModal={openModal} setOpenModal={setOpenModal} getId={getId} />
    </StyledWrapper>
  );
};

export default FaqDetails;
