import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  button {
    position: absolute;
    right: 10px;

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

export const CardContainer = styled.div`
  position: absolute;
  top: 11rem;
  padding-left: 1.1rem;

  display: flex;
  flex-wrap: wrap;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 6px;
  left: 40%;
  display: flex;
  button {
    cursor: pointer;
    background-color: #fff;
    border: 1.5px solid #dfe1e5;
    height: 2rem;
    width: 8rem;
    border-radius: 3px;
    font-size: 1rem;
    color: #72787c;
  }
`;
