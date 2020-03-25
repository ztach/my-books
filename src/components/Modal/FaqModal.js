import React from "react";
import { GlobalStateContext } from '../../context/GlobalContextProvider';
import FontButton from '../FontButton/FontButton';
import { StyledFaqModalWrapper } from './ModalStyle'

const FaqModal = ({ getId: { id, title, subtitle, text } }) => {
  const state = React.useContext(GlobalStateContext);

  return (
    <>
    <FontButton />
    <StyledFaqModalWrapper sFont={state.sFont}>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: subtitle }} />
      <div dangerouslySetInnerHTML={{ __html: text }} />
      </StyledFaqModalWrapper>
    </>
  );
};

export default FaqModal;
