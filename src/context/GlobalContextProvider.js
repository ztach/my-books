import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  themeCol: "1",
  sFont: 20
};

function reducer(state, action) {
  switch (action.type) {
    case "1": {
      return {
        ...state,
        themeCol: 1
      };
    }

    case "2": {
      return {
        ...state,
        themeCol: 2
      };
    }
    case "3": {
      return {
        ...state,
        themeCol: 3
      };
    }
    case "4": {
      return {
        ...state,
        themeCol: 4
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

    default: {
      return {
        ...state,
        themeCol: 3,
        sFont: 20
      };
    }
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
