import { useEffect, useState } from 'react';
import { ImArrowLeft } from 'react-icons/im';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';

import * as S from './styles';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Favorites = () => {
  const [listFavorites, setListFavorites] = useState<Array<FilmeInterface>>([]);

  useEffect(() => {
    setListFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
  }, []);

  return (
    <S.Container>
      <S.HeaderFavorite>
        <Header />
        <Button url="/">
          Voltar <ImArrowLeft size="0.9rem" style={{ marginLeft: '5px' }} />
        </Button>
      </S.HeaderFavorite>

      <Title
        title="favoritos"
        subtitle="Um espaço para seus filmes favoritos"
      />

      <S.CardContainer>
        {listFavorites.map((filme) => (
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
      </S.CardContainer>
    </S.Container>
  );
};

export default Favorites;
