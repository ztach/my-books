import React from "react";
import { GlobalDispatchContext, GlobalStateContext } from "../../context/GlobalContextProvider";
import { StyledButton, StyledButtonWrapper } from "../../style/FontButtonStyle";

const FontButton = () => {
  const dispatch = React.useContext(GlobalDispatchContext);
  const state = React.useContext(GlobalStateContext);
  return (
    <StyledButtonWrapper>
      <StyledButton
        size={100}
        onClick={() => {
          dispatch({ type: "ADD_FONT" });
        }}
      >
        +
      </StyledButton>

      <StyledButton nr={0} size={50}>
        {state.sFont}
      </StyledButton>

      <StyledButton
        size={0}
        onClick={() => {
          dispatch({ type: "UP_FONT" });
        }}
      >
        -
      </StyledButton>
    </StyledButtonWrapper>
  );
};

export default FontButton;
