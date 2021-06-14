export interface ToastProviderProps {
  children: React.ReactNode;
}

export interface IToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  secondsDuration: number;
}

export interface ToastContextProps {
  addToast: (message: Omit<IToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}
