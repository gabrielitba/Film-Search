import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import HeaderButton from '../../components/HeaderButton';
import TitleSub from '../../components/TitleSub';

import Logo from '../../images/default-movie.png';

import {
  Container,
  HeaderDetails,
  ContainerDetails,
  ContainerTitle,
  FavoriteButton,
  ImgUrl,
  ContainerInfos,
  Plot,
} from './styles';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Details: React.FC = ({}) => {
  const [listFavorites, setListFavorites] = useState<Array<FilmeInterface>>([]);
  const [buttonFavorite, setButtonFavorite] = useState<boolean>(true);

  const filme: FilmeInterface = JSON.parse(
    localStorage.getItem('details') || '{}',
  );

  useEffect(() => {
    checkFavorited();
  });

  const checkFavorited = useCallback(() => {
    listFavorites.map(favorite => {
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

  function FavoriteFilme() {
    setButtonFavorite(false);

    setListFavorites(listFavorites.concat(filme));
    listFavorites.map((favorite, index) => {
      if (favorite.id === filme.id) {
        listFavorites.splice(index, 1);
        setListFavorites(listFavorites.concat(filme));
      }
    });
  }

  function UnfavoriteFilme() {
    console.log(filme.id);

    listFavorites.map((favorite, index) => {
      if (favorite.id === filme.id) {
        listFavorites.splice(index, 1);

        setListFavorites(listFavorites);
        localStorage.setItem('favorites', JSON.stringify(listFavorites));
        setButtonFavorite(true);
      }
    });
  }

  return (
    <>
      <HeaderDetails>
        <Header />
        <HeaderButton url="/" title="Voltar" />
      </HeaderDetails>

      <Container>
        <ContainerTitle>
          <TitleSub title="Detalhes" />
        </ContainerTitle>

        {buttonFavorite ? (
          <FavoriteButton
            onClick={() => {
              FavoriteFilme();
            }}
          >
            Favorite
          </FavoriteButton>
        ) : (
          <FavoriteButton
            onClick={() => {
              UnfavoriteFilme();
            }}
          >
            Unfavorite
          </FavoriteButton>
        )}

        <ContainerDetails>
          {filme.poster_path === null ? (
            <ImgUrl src={Logo} alt="imagem do filme" />
          ) : (
            <ImgUrl src={filme.poster_path} alt="imagem do filme" />
          )}

          <ContainerInfos>
            <p>{filme.original_title}</p>
            <p>{filme.release_date}</p>
            <p>{filme.vote_average}/10</p>
            <Plot>"{filme.overview}"</Plot>
          </ContainerInfos>
        </ContainerDetails>
      </Container>
    </>
  );
};

export default Details;
