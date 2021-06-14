import { Link } from 'react-router-dom';
import * as S from './styles';

import Logo from '../../assets/images/default-movie.png';

import { FilmData } from '../../context/films/interfaces';
import useFilms from '../../hooks/films';

interface CardProps {
  poster_path: string;
  filmSelected?: FilmData;
}

const Card = ({ poster_path, filmSelected }: CardProps) => {
  const { handleGetFilmSelected } = useFilms();

  return (
    <S.Container>
      {poster_path === null ? (
        <img src={Logo} alt="imagem do filme" />
      ) : (
        <img src={poster_path} alt="imagem do filme" />
      )}
      <button
        type="button"
        onClick={() => handleGetFilmSelected(filmSelected ?? ({} as FilmData))}
      >
        <Link to="/details">Exibir detalhes</Link>
      </button>
    </S.Container>
  );
};

export default Card;
