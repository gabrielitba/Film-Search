import { useState, useCallback, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';

import useFilms from '../../hooks/films';

import * as S from './styles';

const SearchInput = () => {
  const { handleSearchFilms } = useFilms();

  const [showInputSearch, setShowInputSearch] = useState(false);

  const inputSearch = useRef<HTMLInputElement | null>(null);

  const dispatchHandleSearchFilms = () => {
    handleSearchFilms(inputSearch.current?.value ?? '');
  };

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

  return (
    <>
      {showInputSearch ? (
        <S.SearchContainer>
          <S.Search
            placeholder="Pesquise um filme"
            ref={inputSearch}
            onKeyDown={(event) => {
              if (event.key === 'Enter') dispatchHandleSearchFilms();
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
