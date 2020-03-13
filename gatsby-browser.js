// import CustomLayout from './wrapPageElement';
// export const wrapPageElement = CustomLayout;
import React from 'react'

import RootWrapper from './RootWrapper';

export const wrapRootElement = ({ element }, { plugins, ...options }) => {
  {console.log(...options)}
  return <RootWrapper authOptions={{ ...options }}>{element}</RootWrapper>
}
//https://www.npmjs.com/package/react-use-auth