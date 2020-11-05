import React, { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

import { SearchContainer, Search } from './styles';

import arrowBack from '../../images/arrowBack.svg';
import searchButton from '../../images/searchButton.svg';
import api from '../../services/api';

interface SearchInterface {
  id: number;

  poster_path: string;

  original_title: string;

  release_date: string;

  vote_average: number;

  overview: string;
}

interface Props {
  setStateHome: Dispatch<SetStateAction<SearchInterface[]>>;
}

const SearchInput = ({ setStateHome }: Props) => {
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
        <SearchContainer>
          <Search
            placeholder="Pesquise seus filmes aqui"
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter') fetchMyAPI();
            }}
          />

          <button onClick={handleButton}>
            <img src={arrowBack} alt="" />
          </button>
        </SearchContainer>
      ) : (
        <SearchContainer>
          <button onClick={handleButton}>
            <img src={searchButton} alt="" />
          </button>
        </SearchContainer>
      )}
    </>
  );
};

export default SearchInput;
