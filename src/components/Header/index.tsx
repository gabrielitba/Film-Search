import React from 'react';

import { HeaderContainer, LogoContainer, Logo } from './styles';

import imageLogo from '../../images/imageLogo.svg';
import SearchInput from '../SearchInput';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo>
          Cinéfilos <img src={imageLogo} alt="logo" />
        </Logo>
        <small>O lugar ideal para encontrar seus filmes</small>
      </LogoContainer>
      <SearchInput />
    </HeaderContainer>
  );
};

export default Header;
