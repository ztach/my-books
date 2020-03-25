import React, { useState } from "react";
import styled from "styled-components";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";

const StyledWrapper = styled.div`
  position: fixed;
  top: 45px;
  right: 50px;
  width: 150px;
  
  background-color: ${({ theme }) => theme.secondaryTab[6]};
  color: ${({ theme }) => theme.secondaryTab[0]};
  box-shadow: 0 10px 30px -10px hsla(100, 0%, 0%, 0.60);
  border-radius: 5px;

  z-index:1000;
`;

const StyedSelect = styled.select`
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.secondaryTab[0]};
`;

const StyledOptions = styled.option`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.secondaryTab[6]};

`;

const ListColor = ({ Children, state }) => {
  const [toggle, setToggle] = useState(state);
  const dispatch = React.useContext(GlobalDispatchContext);

  const getData = e => {
    dispatch({ type: toggle });
    const TOGGLE_TYPE = e.target.value;
    dispatch({ type: TOGGLE_TYPE });
    setToggle(TOGGLE_TYPE);
  };

  return (
    <StyledWrapper>
      {Children}

      <StyedSelect id="sel" onClick={e => getData(e)}>
        <StyledOptions value="1">Bardzo jasny</StyledOptions>
        <StyledOptions value="2">Jasny</StyledOptions>
        <StyledOptions value="3">Ciemniejszy</StyledOptions>
        <StyledOptions value="4">Ciemny</StyledOptions>
      </StyedSelect>
    </StyledWrapper>
  );
};

export default ListColor;
