import React from 'react';
const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <main>{children}</main>
  </LocaleContext.Provider>
);
export { Layout, LocaleContext };
