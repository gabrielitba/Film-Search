import { useState, useCallback, ReactNode, createContext } from 'react';

import { toast } from 'react-toastify';

import api from '../services/api';

interface FilmsContextProvider {
  filmsData: FilmsData[];
  handleShowRecentMovies: () => Promise<void>;
  handleSearchFilms: (filmeName: string) => void;
  filmSelected: FilmsData;
  handleGetFilmSelected: (filmClicked: FilmsData) => void;
  subTitle: string;
}

import { FilmsData } from './interfaces';

interface FilmsProviderProps {
  children: ReactNode;
}

export const FilmsContext = createContext({} as FilmsContextProvider);

const FilmsProvider = ({ children }: FilmsProviderProps) => {
  const [filmsData, setFilmsData] = useState<FilmsData[]>([]);
  const [filmSelected, setFilmSelected] = useState<FilmsData>({} as FilmsData);

  const [subTitle, setSubTitle] = useState('');

  const handleShowRecentMovies = async () => {
    try {
      const { data } = await api.get(
        `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&query&language=en-US&`,
      );
      setFilmsData(
        data.results.map((film: FilmsData) => {
          return {
            id: film.id,
            poster_path: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
            original_title: film.original_title,
            release_date: film.release_date,
            vote_average: film.vote_average,
            overview: film.overview,
          };
        }),
      );

      setSubTitle('Exibindo últimos lançamentos...');
    } catch {
      toast.error(
        'Não conseguimos obter a lista de filmes mais recentes! Tente novamente mais tarde.',
      );
    }
  };

  const handleSearchFilms = useCallback((filmeName: string) => {
    api
      .get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${filmeName}`,
      )
      .then((response) => {
        const { data } = response;

        if (data.total_results === 0) {
          toast.error('Sem resultados! Verifique se digitou corretamente.');
          return;
        }

        setFilmsData(
          data.results.map((film: FilmsData) => {
            return {
              id: film.id,
              poster_path: `https://image.tmdb.org/t/p/w500${film.poster_path}`,
              original_title: film.original_title,
              release_date: film.release_date,
              vote_average: film.vote_average,
              overview: film.overview,
            };
          }),
        );

        setSubTitle(`Exibindo resultados para: ${filmeName}`);
      });
  }, []);

  const handleGetFilmSelected = useCallback((filmClicked: FilmsData) => {
    setFilmSelected(filmClicked);
  }, []);

  return (
    <FilmsContext.Provider
      value={{
        filmsData,
        handleShowRecentMovies,
        handleSearchFilms,
        filmSelected,
        handleGetFilmSelected,
        subTitle,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsProvider;
