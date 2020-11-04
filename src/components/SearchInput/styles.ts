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
    height: 2.4rem;
    img {
      height: 1.7rem;
    }
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
    box-shadow: 0px 0px 4px rgba(87, 171, 240, 1);
  }

  ::-webkit-input-placeholder {
    font-size: 1rem;
    padding-left: 5px;
    color: #9aa0a6;
  }
`;
