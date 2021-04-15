import { ReactNode } from 'react';
import FilmsProvider from './films';
import { ToastProvider } from './toast';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ToastProvider>
    <FilmsProvider>{children}</FilmsProvider>
  </ToastProvider>
);

export default AppProvider;
