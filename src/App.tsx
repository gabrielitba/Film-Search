import React from 'react';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}

export default App;
