import React, { Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Main from './components/Main/Main';

const App = () => {
    return (
      <Fragment>
        <Header />
        <Main />
        <main />
        <Footer />
      </Fragment>
    );
}

export { App };
