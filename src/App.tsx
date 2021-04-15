import AppProvider from './hooks';

import Routes from './routes/routes';

import { GlobalStyles } from './styles/global';

const App = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyles />
    </AppProvider>
  );
};

export default App;
