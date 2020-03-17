import React, { useState } from "react";
import styled from "styled-components";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";

const StyledWrapper = styled.div`
  position: absolute;
  top: 140px;
  right: 50px;
  width: 250px;
  padding: 2px 3px;
  border: none;
  background-color: ${({ theme }) => theme.secondaryTab[6]};

  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.secondaryTab[0]};
`;

const StyedSelect = styled.select`
  padding: 15px;
  font-size: ${({ theme }) => theme.fontSize.sx};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.secondaryTab[1]};
`;

const ListColor = ({ Children }) => {
  const [toggle, setToggle] = useState("");
  const dispatch = React.useContext(GlobalDispatchContext);

  const getData = e => {
    const TOGGLE_TYPE = e.target.value;
    dispatch({ type: TOGGLE_TYPE });
    setToggle(TOGGLE_TYPE);
  };

  return (
    <StyledWrapper>
      {Children}

      <StyedSelect id="sel" onClick={e => getData(e)}>
        <option value="TOGGLE_BARDZO_JASNY">Bardzo jasny</option>
        <option value="TOGGLE_JASNY">Jasny</option>
        <option value="TOGGLE_CIEMNIEJSZY">Ciemniejszy</option>
        <option value="TOGGLE_CIEMNY">Ciemny</option>
      </StyedSelect>
    </StyledWrapper>
  );
};

export default ListColor;
