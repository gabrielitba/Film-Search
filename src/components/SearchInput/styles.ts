import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  button {
    position: absolute;
    right: 1rem;

    background-color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
    height: 2rem;
  }
`;

export const Search = styled.input`
  height: 2.5rem;
  width: 22rem;
  padding-left: 10px;

  outline: none;

  border-radius: 8px;
  font-size: 1rem;
  color: #9aa0a6;
  border: 1px solid #dfe1e5;

  &:focus {
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    font-size: 1rem;
    color: #9aa0a6;
  }
`;
