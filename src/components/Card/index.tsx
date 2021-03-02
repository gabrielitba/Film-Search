import { Link } from 'react-router-dom';
import * as S from './styles';

import Logo from '../../assets/images/default-movie.png';

interface CardProps {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Card = ({
  id,
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
}: CardProps) => {
  function myFilme(idFilme: number): void {
    localStorage.setItem(
      'details',
      JSON.stringify({
        idFilme,
        poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
        original_title,
        release_date,
        vote_average,
        overview,
      }),
    );
  }

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
        onClick={() => {
          myFilme(id);
        }}
      >
        <Link to="/details">Exibir detalhes</Link>
      </button>
    </S.Container>
  );
};

export default Card;
