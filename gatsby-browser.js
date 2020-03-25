// import CustomLayout from './wrapPageElement';
// export const wrapPageElement = CustomLayout;

//https://www.npmjs.com/package/react-use-auth

import React from "react";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
