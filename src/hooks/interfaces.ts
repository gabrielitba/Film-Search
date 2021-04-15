export interface FilmsData {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  secondsDuration: number;
}
