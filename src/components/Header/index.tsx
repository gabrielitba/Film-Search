import * as S from './styles';

import imageLogo from '../../assets/images/imageLogo.svg';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Logo>
          Cinéfilos <img src={imageLogo} alt="logo" />
        </S.Logo>
        <small>O lugar ideal para encontrar seus filmes</small>
      </S.LogoContainer>
    </S.HeaderContainer>
  );
};

export default Header;
