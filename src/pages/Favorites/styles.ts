import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;

export const HeaderFavorite = styled.div`
  height: 68px;
  width: 100vw;

  display: flex;
  background: #fff;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
`;

export const CardContainer = styled.div`
  padding-left: 2.7rem;

  display: flex;
  flex-wrap: wrap;
`;

export const MessageUnfavorites = styled.div`
  display: flex;
  align-items: center;
  margin: 13% 0 0 20%;

  > h1 {
    margin-right: 10px;
    color: #4c4b5b;
    text-transform: uppercase;
    line-height: 4rem;
    font-weight: 300;
  }
`;
