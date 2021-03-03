import * as S from './styles';

import imageLogo from '../../assets/images/imageLogo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Link to="/">
          <S.Logo>
            Film Stalker <img src={imageLogo} alt="logo" />
          </S.Logo>
        </Link>
        <small>O lugar ideal para encontrar seus filmes</small>
      </S.LogoContainer>
    </S.HeaderContainer>
  );
};

export default Header;
