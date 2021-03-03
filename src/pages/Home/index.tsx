import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FaHeart } from 'react-icons/fa';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SearchInput from '../../components/SearchInput';
import Title from '../../components/Title';

import api from '../../services/api';

import * as S from './styles';

interface FilmeInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Home = () => {
  const [stateHome, setStateHome] = useState<FilmeInterface[]>([]);

  useEffect(() => {
    async function loadFilms() {
      try {
        const { data } = await api.get(
          'movie/upcoming?api_key=08b6c232498d4070430180e2c4a098b4&query&language=en-US&',
        );
        setStateHome(data.results);
      } catch {
        toast.error(
          'Não conseguimos obter a lista de filmes mais recentes! Tente novamente mais tarde.',
        );
      }
    }
    loadFilms();
  }, []);

  return (
    <S.Container>
      <S.HeaderHome>
        <Header />
        <SearchInput setStateHome={setStateHome} />
        <Button url="/favorites">
          Favoritos <FaHeart size="0.9rem" style={{ marginLeft: '5px' }} />
        </Button>
      </S.HeaderHome>

      <Title title="Seja bem vindo" />

      <S.CardContainer>
        {stateHome.map((filme) => (
          <Card
            key={filme.id}
            id={filme.id}
            poster_path={filme.poster_path}
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

export default Home;
