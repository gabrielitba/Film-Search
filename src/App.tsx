import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';

import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default App;
