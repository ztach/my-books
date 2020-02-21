import React, { useState, useEffect } from 'react';
import Navigation from './../components/Navigation/Navigation';
import GlobalStyles from '../assets/styles/globalStyles';
import { theme } from '../theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import PageContext from '../context';

const Layouts = ({ location: { pathname }, children }) => {
  const [pageType, setPageType] = useState('index');

  useEffect(
    () => {
      const setPage = () => {
        const pageType = [
          'index',
          'booksArticle',
          'about',
          'contact',
          'authorArticle',
          'booksGalery',
        ];

        const [currentPage] = pageType.filter((page) =>
          pathname.includes(page)
        );

        setPageType(currentPage);
      };
      setPage();
    },
    [pathname]
  );

  return (
    <PageContext.Provider value={pageType}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </PageContext.Provider>
  );
};
export default Layouts;
