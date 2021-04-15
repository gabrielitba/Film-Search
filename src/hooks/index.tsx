import { ReactNode } from 'react';
import FilmsProvider from './films';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <FilmsProvider>
    <ToastProvider>{children}</ToastProvider>
  </FilmsProvider>
);

export default AppProvider;
