import React, { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './styles';

import arrowBack from '../../assets/images/arrowBack.svg';
import searchButton from '../../assets/images/searchButton.svg';
import api from '../../services/api';

interface SearchInterface {
  id: number;
  poster_path: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface SearchInputProps {
  setStateHome: Dispatch<SetStateAction<SearchInterface[]>>;
}

const SearchInput = ({ setStateHome }: SearchInputProps) => {
  const [changeButton, setChangeButton] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  function handleButton() {
    setChangeButton(prevState => !prevState);
  }

  function fetchMyAPI() {
    api
      .get(
        `search/movie?api_key=08b6c232498d4070430180e2c4a098b4&query=${searchValue}`,
      )
      .then(response => {
        const { data } = response;

        if (data.total_results === 0) {
          toast.error('Sem resultados! Verifique se digitou corretamente.');
          return;
        }

        setStateHome(data.results);
      });
  }

  return (
    <>
      {changeButton ? (
        <S.SearchContainer>
          <S.Search
            placeholder="Pesquise seus filmes aqui"
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter') fetchMyAPI();
            }}
          />

          <button type="button" onClick={handleButton}>
            <img src={arrowBack} alt="" />
          </button>
        </S.SearchContainer>
      ) : (
        <S.SearchContainer>
          <button type="button" onClick={handleButton}>
            <img src={searchButton} alt="" />
          </button>
        </S.SearchContainer>
      )}
    </>
  );
};

export default SearchInput;
