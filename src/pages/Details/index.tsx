import { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';

import Logo from '../../assets/images/default-movie.png';

import * as S from './styles';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Details = () => {
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
      return favorite;
    });
  }, [listFavorites, filme.id]);

  useEffect(() => {
    checkFavorited();
  });

  useEffect(() => {
    setListFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(listFavorites));
  }, [listFavorites]);

  function FavoriteFilme() {
    setButtonFavorite(false);

    setListFavorites(listFavorites.concat(filme));

    listFavorites.map((favorite, index) => {
      if (favorite.id === filme.id) {
        listFavorites.splice(index, 1);
        setListFavorites(listFavorites.concat(filme));
      }
      return favorite;
    });
  }

  function UnfavoriteFilme() {
    listFavorites.map((favorite, index) => {
      if (favorite.id === filme.id) {
        listFavorites.splice(index, 1);

        setListFavorites(listFavorites);
        localStorage.setItem('favorites', JSON.stringify(listFavorites));
        setButtonFavorite(true);
      }
      return favorite;
    });
  }

  return (
    <>
      <S.HeaderDetails>
        <Header />
        <Button url="/" title="Voltar" />
      </S.HeaderDetails>

      <S.Container>
        <S.ContainerTitle>
          <Title title="Detalhes" />
        </S.ContainerTitle>

        {buttonFavorite ? (
          <S.FavoriteButton
            onClick={() => {
              FavoriteFilme();
            }}
          >
            Favorite
          </S.FavoriteButton>
        ) : (
          <S.FavoriteButton
            onClick={() => {
              UnfavoriteFilme();
            }}
          >
            Unfavorite
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
      </S.Container>
    </>
  );
};

export default Details;
