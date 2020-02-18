import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Login from './../context/login';
import PageContext from '../context';
import GlobalStyle from '../theme/GlobalStyle';
import { theme } from '../theme/mainTheme';
import { ThemeProvider } from 'styled-components';
import Modal from '../components/Modals/Modal';

class MainTemplate extends Component {
  state = {
    pageType: 'reprezentanci',

    modalIsOpen: false,
    user: {
      reprezentant: 'gość',
      Email: '',
      Faks: '',
      TelSluzbowy: '',
      opis: '',
      osbOsobaId: 0,
      osbRolaId: 0,
      osbRolaOsobyId: 0,
      imgPath: '',
    },
    isLogged: false,
    isResetLogged: false,
    ktoZalogowany: 0,
  };

  setCurrentPage = (prevState = '') => {
    const pageType = [
      'reprezentanci',
      'zarzadcy',
      'wspolnoty',
      'rozliczenia',
      'pisma',
      'statystyki',
      'login',
      'admin',
      'user',
      'rokRozliczeniowy',
      'odbiorcaNadawca',
      'rodzajPisma',
      'typPismo',
      'trainingYearExists',
      'trainingYear',
    ];
    const { location: { pathname } } = this.props;
    const [currentPage] = pageType.filter((page) => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({
        pageType: currentPage,
      });
    }
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  saveLogin = (user, x) => {
    this.setState({
      user,
      isLogged: true,
      ktoZalogowany: x,
    });
    this.resetLogged();
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  };

  resetLogged = () => {
    this.setState({
      isResetLogged: false,
    });
  };

  render() {
    const { children } = this.props;
    const {
      pageType,
      modalIsOpen,
      user,
      isLogged,
      isResetLogged,
      ktoZalogowany,
    } = this.state;

    const contextElement = {
      pageType,
      isLogged,
      isResetLogged,
      ktoZalogowany,
      modalIsOpen,
      user,
      saveLogin: this.saveLogin,
      openModal: this.openModal,
      closeModal: this.closeModal,
      resetLogged: this.resetLogged,
    };

    return (
      <div>
        <PageContext.Provider value={pageType}>
          <Login.Provider value={contextElement}>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
              {children}
              {modalIsOpen && <Modal />}
            </ThemeProvider>
          </Login.Provider>
        </PageContext.Provider>
      </div>
    );
  }
}
export default withRouter(MainTemplate);
