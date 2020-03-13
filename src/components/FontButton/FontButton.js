import React from 'react'
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContextProvider';
import styled from "styled-components";

const StyledButton = styled.button`
  right: ${({size}) =>  `${size+10}px` }  ;
  width: 50px;
  height: 50px;
  border: none;
  background-color: rgb(7, 68, 148);
  font-size: ${({nr}) =>  nr === 0 ? '20px' : '40px' } ;
  color: white;
  font-weight: 600;
`;

const StyledButtonWrapper = styled.div`
    position: fixed;
    right: 0;
    top: 10px;
    display:flex;
    width: 160px;
    align-items:center;
    justify-items:center;
    justify-content: space-around;
    align-items: stretch;
    z-index:10000;
`;

const FontButton = () => {

    const dispatch = React.useContext(GlobalDispatchContext);
    const state = React.useContext(GlobalStateContext);
    return (
     <StyledButtonWrapper>
      <StyledButton size={100}
        onClick={() => {
          dispatch({ type: "ADD_FONT" })
        }}
      >
        +
      </StyledButton>

      <StyledButton
                nr={0}
                size={50}
      >
        {state.sFont}
      </StyledButton>

      <StyledButton size={0}
        onClick={() => {
          dispatch({ type: "UP_FONT" })
        }}
      >
        -
      </StyledButton>
            
    </StyledButtonWrapper>

    )
}

export default FontButton;