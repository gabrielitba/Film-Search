import styled from 'styled-components';

export const ContainerButton = styled.span`
  background: #57abf0;
  border: none;

  border-radius: 8px;
  margin: 0 3.8rem 0 2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2.5rem;
    width: 6.5rem;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
