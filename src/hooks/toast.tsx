import { createContext, useContext, useCallback, useState } from 'react';

import ToastContainer from '../components/ToastContainer';

import v4 from '../utils/uuidv4';

interface ToastProviderProps {
  children: React.ReactNode;
}

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  secondsDuration: number;
}

interface ToastContextProps {
  addToast: (message: Omit<IToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext({} as ToastContextProps);

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastMessage, setToastMessage] = useState<IToastMessage[]>([]);

  const addToast = useCallback(
    ({
      type,
      title,
      description,
      secondsDuration,
    }: Omit<IToastMessage, 'id'>) => {
      const id = v4();

      const toast = {
        id,
        type,
        title,
        description,
        secondsDuration,
      };

      setToastMessage((prevState) => [...prevState, toast]);
    },
    [],
  );

  const removeToast = useCallback((id: string) => {
    setToastMessage((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={toastMessage} />
    </ToastContext.Provider>
  );
};

const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export { ToastProvider, useToast };
