import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 4.2rem;

  padding: 0 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1rem;

  small {
    text-transform: uppercase;
    font-weight: 300;
    color: #6e6d7a;
    margin-top: 3px;
  }
`;

export const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  img {
    height: 2rem;
    margin-left: 0.3rem;
  }
`;


export const Menu = styled.ul`
  display: flex;
  padding-right: 23rem;

  li {
    padding-right: 5px;
    margin-right: 1rem;

    a {
      color: #6e6d7a;
      text-decoration: none;
      padding: 0 5px;
      font-size: 1.2rem;
      &:hover {
        color: #4c4b5b;
      }
    }
    img {
      height: 0.45rem;
      margin-left: -0.2rem;
    }
  }
`;
