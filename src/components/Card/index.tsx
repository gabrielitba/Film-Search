import { Link } from 'react-router-dom';
import * as S from './styles';

import Logo from '../../assets/images/default-movie.png';
import { useContext } from 'react';
import { FilmsContext } from '../../context/films';

interface FilmData {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface CardProps {
  poster_path: string;
  filmSelected?: FilmData;
}

const Card = ({ poster_path, filmSelected }: CardProps) => {
  const { handleGetFilmSelected } = useContext(FilmsContext);

  return (
    <S.Container>
      {poster_path === null ? (
        <img src={Logo} alt="imagem do filme" />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="imagem do filme"
        />
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
