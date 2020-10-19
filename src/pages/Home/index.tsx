import React from 'react';
import Header from '../../components/Header';
import HeaderButton from '../../components/HeaderButton';
import TitleSub from '../../components/TitleSub';

import { Container, HeaderHome } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <HeaderHome>
        <Header />
        <HeaderButton url="/favorites" title="Favoritos ♥" />
      </HeaderHome>

      <TitleSub title="Seja bem vindo" />
    </Container>
  );
};

export default Home;
