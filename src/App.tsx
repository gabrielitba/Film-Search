import { ToastContainer } from 'react-toastify';

import FilmsProvider from './context/films';

import Routes from './routes/routes';

import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <FilmsProvider>
      <Routes />
      <GlobalStyles />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </FilmsProvider>
  );
};

export default App;
