import {
  Dispatch,
  SetStateAction,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
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

  const inputSearch = useRef<HTMLInputElement | null>(null);

  const handleShowInput = useCallback(() => {
    if (showInputSearch === false) {
      setShowInputSearch(true);
      inputSearch.current?.focus();
    } else {
      setShowInputSearch(false);
      inputSearch.current?.blur();
    }
  }, [showInputSearch]);

  useEffect(() => {
    if (showInputSearch === true) {
      inputSearch.current?.focus();
    } else {
      inputSearch.current?.blur();
    }
  }, [showInputSearch]);

  function fetchMyAPI() {
    api
      .get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${inputSearch.current?.value}`,
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
            ref={inputSearch}
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
