import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Header from '../../components/Header';
import HeaderButton from '../../components/HeaderButton';
import SearchInput from '../../components/SearchInput';
import TitleSub from '../../components/TitleSub';
import api from '../../services/api';

import {
  Container,
  HeaderHome,
  CardContainer,
} from './styles';

interface SearchInterface {
  id: number;

  poster_path: string;

  original_title: string;

  release_date: string;

  vote_average: number;

  overview: string;
}

const Home: React.FC = () => {
  const [stateHome, setStateHome] = useState<SearchInterface[]>([]);

  useEffect(() => {
    function loadFilms() {
      api
        .get(
          'movie/upcoming?api_key=08b6c232498d4070430180e2c4a098b4&query&language=en-US&',
        )
        .then(response => {
          const { data } = response;
          setStateHome(data.results);
        });
    }
    loadFilms();
  }, []);

  return (
    <Container>
      <HeaderHome>
        <Header />
        <SearchInput setStateHome={setStateHome} />
        <HeaderButton url="/favorites" title="Favoritos ♥" />
      </HeaderHome>

      <TitleSub title="Seja bem vindo" />

      <CardContainer>
        {stateHome.map(filme => (
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
      </CardContainer>
    </Container>
  );
};

export default Home;
