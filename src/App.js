/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import './styles/app.scss';
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className='App'>
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
