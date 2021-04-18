import { useCallback, useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { FilmsContext } from '../../hooks/films';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';

import * as S from './styles';

import Logo from '../../assets/images/default-movie.png';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Details = () => {
  const { filmSelected } = useContext(FilmsContext);

  const [currentMovie, setCurrentMovie] = useState(filmSelected);

  useEffect(() => {
    if (Object.keys(filmSelected).length === 6) {
      localStorage.setItem(
        '@FilmStalker:CurrentMovie',
        JSON.stringify(filmSelected),
      );
    }

    if (Object.keys(filmSelected).length === 0) {
      setCurrentMovie(
        JSON.parse(localStorage.getItem('@FilmStalker:CurrentMovie') || '[]'),
      );
    }
  }, [filmSelected]);

  const history = useHistory();

  const goToPreviousPath = useCallback(() => {
    localStorage.removeItem('@FilmStalker:CurrentMovie');
    history.goBack();
  }, [history]);

  const [buttonFavorite, setButtonFavorite] = useState<boolean>(true);

  const [listFavorites, setListFavorites] = useState<Array<FilmeInterface>>(
    () => {
      const films = localStorage.getItem('@FilmStalker:Favorites');
      if (films) {
        return JSON.parse(films);
      } else {
        return [];
      }
    },
  );

  const checkFavorited = useCallback(() => {
    listFavorites.map((favorite) => {
      if (favorite.id === filmSelected.id) {
        setButtonFavorite(false);
      }
    });
  }, [listFavorites, filmSelected.id]);

  useEffect(() => {
    checkFavorited();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FavoriteFilme = useCallback(() => {
    setListFavorites([...listFavorites, filmSelected]);

    localStorage.setItem(
      '@FilmStalker:Favorites',
      JSON.stringify([...listFavorites, filmSelected]),
    );

    setButtonFavorite(false);
  }, [filmSelected, listFavorites]);

  const UnfavoriteFilme = useCallback(() => {
    setListFavorites(
      listFavorites
        .map((film, index) => {
          if (film.id === filmSelected.id) {
            listFavorites.splice(index, 1);
          }
          return film;
        })
        .filter((item) => {
          return item !== filmSelected;
        }),
    );
    localStorage.setItem(
      '@FilmStalker:Favorites',
      JSON.stringify(listFavorites),
    );

    setButtonFavorite(true);
  }, [filmSelected, listFavorites]);

  return (
    <>
      <S.HeaderDetails>
        <Header />
        <Button goToPreviousPath={goToPreviousPath}>
          Voltar <ImArrowLeft size="0.9rem" style={{ marginLeft: '5px' }} />
        </Button>
      </S.HeaderDetails>

      <S.CardDetail>
        <S.ContainerTitle>
          <Title title="Detalhes" />
        </S.ContainerTitle>

        {buttonFavorite ? (
          <S.FavoriteButton
            onClick={() => {
              FavoriteFilme();
            }}
          >
            <AiOutlineStar color="#3c99dc" size="2.5rem" />
          </S.FavoriteButton>
        ) : (
          <S.FavoriteButton
            onClick={() => {
              UnfavoriteFilme();
            }}
          >
            <AiFillStar color="#3c99dc" size="2.5rem" />
          </S.FavoriteButton>
        )}

        <S.ContainerDetails>
          {currentMovie.poster_path === null ? (
            <S.ImgUrl src={Logo} alt="imagem do filme" />
          ) : (
            <S.ImgUrl src={currentMovie.poster_path} alt="imagem do filme" />
          )}

          <S.ContainerInfos>
            <p>{currentMovie.original_title}</p>
            <p>{currentMovie.release_date}</p>
            <p>{currentMovie.vote_average}/10</p>
            <S.Plot>{currentMovie.overview}</S.Plot>
          </S.ContainerInfos>
        </S.ContainerDetails>
      </S.CardDetail>
    </>
  );
};

export default Details;
