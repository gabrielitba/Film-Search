import React, { ButtonHTMLAttributes, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import {
  SearchContainer,
  Search,
  CardContainer,
  ButtonContainer,
} from './styles';

import arrowBack from '../../images/arrowBack.svg';
import searchButton from '../../images/searchButton.svg';
import api from '../../services/api';
import Card from '../Card';

interface SearchInterface {
  id: number;

  poster_path: string;

  original_title: string;

  release_date: string;

  vote_average: number;

  overview: string;
}

const SearchInput: React.FC = () => {
  const [changeButton, setChangeButton] = useState(false);

  const [searchValue, setSearchValue] = useState<string>('');
  const [dataSearch, setDataSearch] = useState<SearchInterface[]>([]);

  const [buttonShow, setButtonShow] = useState<boolean>(false);
  const [totalPages, setTotalPage] = useState<number>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const initialPage = 1;

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

        if (window.location.href === 'http://localhost:3000/') {
          setDataSearch(data.results);
          setTotalPage(data.total_pages);
          setButtonShow(true);
        } else {
          return;
        }
      });
  }

  useEffect(() => {
    function loadFilms() {
      api
        .get(
          'movie/upcoming?api_key=08b6c232498d4070430180e2c4a098b4&query&language=en-US&',
        )
        .then(response => {
          const { data } = response;
          setDataSearch(data.results);
        });
    }
    if (window.location.href === 'http://localhost:3000/') {
      loadFilms();
    } else {
      return;
    }
  }, []);

  function nextPage() {
    if (currentPage === totalPages) return;
    api
      .get(
        `search/movie?api_key=08b6c232498d4070430180e2c4a098b4&query=${searchValue}&page=${currentPage}`,
      )
      .then(response => {
        const { data } = response;
        if (window.location.href === 'http://localhost:3000/') {
          setDataSearch(data.results);
          setCurrentPage(currentPage + 1);
        }
      });
  }

  function backPage() {
    if (currentPage === initialPage) return;
    api
      .get(
        `search/movie?api_key=08b6c232498d4070430180e2c4a098b4&query=${searchValue}&page=${currentPage}`,
      )
      .then(response => {
        const { data } = response;
        if (window.location.href === 'http://localhost:3000/') {
          setDataSearch(data.results);
          setCurrentPage(currentPage - 1);
        }
      });
  }

  console.log(currentPage, totalPages);

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
      <CardContainer>
        {dataSearch.map(filme => (
          <Card
            key={filme.id}
            id={filme.id}
            poster_path={filme.poster_path}
            original_title={filme.original_title}
            release_date={filme.release_date}
            vote_average={filme.vote_average}
            overview={filme.overview}
          />
        ))}
        {buttonShow ? (
          <ButtonContainer>
            <button
              onClick={() => {
                backPage();
              }}
            >
              Prev
            </button>

            <button
              onClick={() => {
                nextPage();
              }}
            >
              Next
            </button>
          </ButtonContainer>
        ) : (
          <button></button>
        )}
      </CardContainer>
    </>
  );
};

export default SearchInput;
