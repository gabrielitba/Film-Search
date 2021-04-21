import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

import { useFilms } from '../../hooks/films';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import Title from '../../components/Title';

import * as S from './styles';
import Loading from '../../components/Loading';

const Home = () => {
  const { filmsData, handleShowRecentMovies, subTitle } = useFilms();

  useEffect(() => {
    handleShowRecentMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.HeaderHome>
        <Header />
        <SearchInput />
        <Button url="/favorites">
          Favoritos <FaHeart size="0.9rem" style={{ marginLeft: '5px' }} />
        </Button>
      </S.HeaderHome>

      <Title title="Seja bem vindo" subtitle={subTitle} />

      <S.CardContainer>
        {filmsData.length > 0 ? (
          filmsData.map((film) => (
            <Card
              key={film.id}
              poster_path={film.poster_path}
              filmSelected={film}
            />
          ))
        ) : (
          <Loading typeLoading="roller" />
        )}
      </S.CardContainer>
    </S.Container>
  );
};

export default Home;
