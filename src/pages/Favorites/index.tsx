import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import HeaderButton from '../../components/HeaderButton';
import TitleSub from '../../components/TitleSub';

import { Container, HeaderFavorite, CardContainer } from './styles';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Favorites: React.FC = () => {
  const [listFavorites, setListFavorites] = useState<Array<FilmeInterface>>([]);

  useEffect(() => {
    setListFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  console.log(listFavorites);

  return (
    <Container>
      <HeaderFavorite>
        <Header />
        <HeaderButton url="/" title="Voltar" />
      </HeaderFavorite>

      <TitleSub
        title="favoritos"
        subtitle="Um espaço para seus filmes favoritos"
      />
      <CardContainer>
        {listFavorites.map(filme => (
          <Card
            key={filme.id}
            id={filme.id}
            poster_path={filme.poster_path.replace(
              'https://image.tmdb.org/t/p/w500/',
              '/',
            )}
            original_title={filme.original_title}
            release_date={filme.release_date}
            vote_average={filme.vote_average}
            overview={filme.overview}
          />
        ))}
      </CardContainer>
    </Container>
  );
};

export default Favorites;
