import { useCallback, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

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
  const currentMovie = useRef<FilmeInterface>(
    JSON.parse(sessionStorage.getItem('@FilmStalker:CurrentMovie') || '{}') ??
      {},
  );

  const history = useHistory();

  const goToPreviousPath = useCallback(() => {
    sessionStorage.removeItem('@FilmStalker:CurrentMovie');
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
      if (favorite.id === currentMovie.current.id) {
        setButtonFavorite(false);
      }
    });
  }, [listFavorites, currentMovie]);

  useEffect(() => {
    checkFavorited();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FavoriteFilme = useCallback(() => {
    setListFavorites([...listFavorites, currentMovie.current]);

    localStorage.setItem(
      '@FilmStalker:Favorites',
      JSON.stringify([...listFavorites, currentMovie.current]),
    );

    setButtonFavorite(false);
  }, [currentMovie, listFavorites]);

  const UnfavoriteFilme = useCallback(() => {
    setListFavorites(
      listFavorites
        .map((film, index) => {
          if (film.id === currentMovie.current.id) {
            listFavorites.splice(index, 1);
          }
          return film;
        })
        .filter((item) => {
          return item !== currentMovie.current;
        }),
    );
    localStorage.setItem(
      '@FilmStalker:Favorites',
      JSON.stringify(listFavorites),
    );

    setButtonFavorite(true);
  }, [currentMovie, listFavorites]);

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
          {currentMovie.current.poster_path === null ? (
            <S.ImgUrl src={Logo} alt="imagem do filme" />
          ) : (
            <S.ImgUrl
              src={currentMovie.current.poster_path}
              alt="imagem do filme"
            />
          )}

          <S.ContainerInfos>
            <p>{currentMovie.current.original_title}</p>
            <p>{currentMovie.current.release_date}</p>
            <p>{currentMovie.current.vote_average}/10</p>
            <S.Plot>{currentMovie.current.overview}</S.Plot>
          </S.ContainerInfos>
        </S.ContainerDetails>
      </S.CardDetail>
    </>
  );
};

export default Details;
