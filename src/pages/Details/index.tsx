import { useCallback, useEffect, useState } from 'react';
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
  const history = useHistory();

  const goToPreviousPath = useCallback(() => {
    history.goBack();
  }, [history]);

  const [listFavorites, setListFavorites] = useState<Array<FilmeInterface>>([]);
  const [buttonFavorite, setButtonFavorite] = useState<boolean>(true);

  const filme: FilmeInterface = JSON.parse(
    localStorage.getItem('details') || '{}',
  );

  const checkFavorited = useCallback(() => {
    listFavorites.map((favorite) => {
      if (favorite.id === filme.id) {
        setButtonFavorite(false);
      }
    });
  }, [listFavorites, filme.id]);

  useEffect(() => {
    setListFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(listFavorites));
  }, [listFavorites]);

  useEffect(() => {
    checkFavorited();
  }, [checkFavorited]);

  const FavoriteFilme = useCallback(() => {
    setButtonFavorite(false);

    setListFavorites(listFavorites.concat(filme));

    listFavorites.map((favorite, index) => {
      if (favorite.id === filme.id) {
        listFavorites.splice(index, 1);
        setListFavorites(listFavorites.concat(filme));
      }
    });
  }, [filme, listFavorites]);

  const UnfavoriteFilme = useCallback(() => {
    listFavorites.map((favorite, index) => {
      if (favorite.id === filme.id) {
        listFavorites.splice(index, 1);

        setListFavorites(listFavorites);
        localStorage.setItem('favorites', JSON.stringify(listFavorites));
        setButtonFavorite(true);
      }
    });
  }, [filme.id, listFavorites]);

  return (
    <>
      <S.HeaderDetails>
        <Header />
        <Button goToPreviousPath={goToPreviousPath}>
          Voltar <ImArrowLeft size="0.9rem" style={{ marginLeft: '5px' }} />
        </Button>
      </S.HeaderDetails>

      <S.ContainerDetail>
        <S.ContainerTitle>
          <Title title="Detalhes" />
        </S.ContainerTitle>

        {buttonFavorite ? (
          <S.FavoriteButton
            onClick={() => {
              FavoriteFilme();
            }}
          >
            <AiOutlineStar color="#3c99dc" size="2rem" />
          </S.FavoriteButton>
        ) : (
          <S.FavoriteButton
            onClick={() => {
              UnfavoriteFilme();
            }}
          >
            <AiFillStar color="#3c99dc" size="2rem" />
          </S.FavoriteButton>
        )}

        <S.ContainerDetails>
          {filme.poster_path === null ? (
            <S.ImgUrl src={Logo} alt="imagem do filme" />
          ) : (
            <S.ImgUrl src={filme.poster_path} alt="imagem do filme" />
          )}

          <S.ContainerInfos>
            <p>{filme.original_title}</p>
            <p>{filme.release_date}</p>
            <p>{filme.vote_average}/10</p>
            <S.Plot>{filme.overview}</S.Plot>
          </S.ContainerInfos>
        </S.ContainerDetails>
      </S.ContainerDetail>
    </>
  );
};

export default Details;
