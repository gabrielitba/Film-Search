import { useState, useCallback, createContext, useRef } from 'react';
import { useToast } from '../../hooks/toast';

import api from '../../services/api';
import { FilmsData, IFilmsContext, IFilmsProvider } from './interfaces';

const FilmsContext = createContext({} as IFilmsContext);

const FilmsProvider = ({ children }: IFilmsProvider) => {
  const { addToast } = useToast();

  const hasRendered = useRef(0);

  const [filmsData, setFilmsData] = useState<FilmsData[]>([]);

  const [subTitle, setSubTitle] = useState('');

  const handleShowRecentMovies = useCallback(async () => {
    if (hasRendered.current === 1) return;
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

      hasRendered.current = 1;
    } catch {
      addToast({
        type: 'error',
        title: 'Algo deu errado...',
        description: 'Tente novamente mais tarde.',
        secondsDuration: 5,
      });
    }
  }, [addToast]);

  const handleSearchFilms = useCallback(
    (filmeName: string) => {
      api
        .get(
          `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${filmeName}`,
        )
        .then((response) => {
          const { data } = response;

          if (data.total_results === 0) {
            addToast({
              type: 'error',
              title: 'Sem resultados!',
              description: ' Verifique se digitou corretamente...',
              secondsDuration: 5,
            });

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
    },
    [addToast],
  );

  const handleGetFilmSelected = useCallback((filmClicked: FilmsData) => {
    sessionStorage.setItem(
      '@FilmStalker:CurrentMovie',
      JSON.stringify(filmClicked) ?? '{}',
    );
  }, []);

  return (
    <FilmsContext.Provider
      value={{
        filmsData,
        handleShowRecentMovies,
        handleSearchFilms,
        handleGetFilmSelected,
        subTitle,
      }}
    >
      {children}
    </FilmsContext.Provider>
  );
};

export { FilmsProvider, FilmsContext };
