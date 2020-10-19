import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Logo from '../../images/default-movie.png';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 1.3rem 4rem 0;

  background-color: #fff;
  height: 17.5rem;
  width: 12rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  img {
    height: 15rem;
    width: 100%;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
  button {
    background-color: #fff;
    a {
      text-decoration: none;
      display: flex;
      padding: 0.7rem 0 0 0.6rem;
      color: #3c99dc;
      font-size: 0.9rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

interface Props {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

const Card: React.FC<Props> = ({
  id,
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
}) => {
  function myFilme(id: number): void {
    localStorage.setItem(
      'details',
      JSON.stringify({
        id,
        poster_path: `https://image.tmdb.org/t/p/w500${poster_path}`,
        original_title,
        release_date,
        vote_average,
        overview,
      }),
    );
  }

  return (
    <CardContainer>
      {poster_path === null ? (
        <img src={Logo} alt="imagem do filme" />
      ) : (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="imagem do filme"
        />
      )}
      <button
        onClick={() => {
          myFilme(id);
        }}
      >
        <Link to="/details">Exibir detalhes</Link>
      </button>
    </CardContainer>
  );
};

export default Card;
