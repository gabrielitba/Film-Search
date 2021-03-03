import { useContext, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';

import { FilmsContext } from '../../context/films';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import Title from '../../components/Title';

import * as S from './styles';
import Loading from '../../components/Loading';

const Home = () => {
  const { filmsData, handleShowRecentMovies } = useContext(FilmsContext);

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

      <Title title="Seja bem vindo" />

      <S.CardContainer>
        {filmsData.length > 0 ? (
          filmsData.map((filme) => (
            <Card
              key={filme.id}
              id={filme.id}
              poster_path={filme.poster_path}
              original_title={filme.original_title}
              release_date={filme.release_date}
              vote_average={filme.vote_average}
              overview={filme.overview}
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
