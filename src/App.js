/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <Router>
      <div className='App' id='app-background'>
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
