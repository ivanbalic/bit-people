import React, { Component, Fragment } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
