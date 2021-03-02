import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0.68rem;

  background-color: #fff;
  height: 17.5rem;
  width: 12rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  img {
    height: 15rem;
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
