import { useContext } from 'react';
import { FilmsContext } from '../context/films';
import { IFilmsContext } from '../context/films/interfaces';

const useFilms = (): IFilmsContext => {
  const context = useContext(FilmsContext);

  if (!context) {
    throw new Error('useTodos depende do TodosProvider');
  }

  return context;
};

export { useFilms };
