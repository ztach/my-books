import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  themeCol: "light",
  sFont: 20
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME": {
      return {
        ...state,
        themeCol: state.themeCol === "light" ? "dark" : "light"
      };
    }

    case "ADD_FONT": {
      return {
        ...state,
        sFont: state.sFont + 1
      };
    }

    case "UP_FONT": {
      return {
        ...state,
        sFont: state.sFont - 1
      };
    }

    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>{children}</GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
