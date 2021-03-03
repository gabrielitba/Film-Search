import { Dispatch, SetStateAction, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';

import * as S from './styles';

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
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const handleShowInput = useCallback(() => {
    setShowInputSearch((prevState) => !prevState);
  }, []);

  function fetchMyAPI() {
    api
      .get(
        `search/movie?api_key=08b6c232498d4070430180e2c4a098b4&query=${searchValue}`,
      )
      .then((response) => {
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
      {showInputSearch ? (
        <S.SearchContainer>
          <S.Search
            placeholder="Pesquise um filme"
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') fetchMyAPI();
            }}
          />

          <button type="button" onClick={handleShowInput}>
            <TiArrowBack size="2rem" color="#9aa0a6" />
          </button>
        </S.SearchContainer>
      ) : (
        <S.SearchContainer>
          <button type="button" onClick={handleShowInput}>
            <FaSearch size="1.3rem" color="#9aa0a6" />
          </button>
        </S.SearchContainer>
      )}
    </>
  );
};

export default SearchInput;
