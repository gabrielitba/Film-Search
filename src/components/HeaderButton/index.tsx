import React from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';

const ContainerButton = styled.span`
  background: #57ABF0;
  border: none;

  border-radius: 8px;
  margin: 0 3.8rem 0 2rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 2.5rem;
    width: 6rem;
    color: #fff;
    text-decoration: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  title: string;
  url: string;
}

const HeaderButton: React.FC<Props> = ({ title, url }) => {
  return (
    <ContainerButton>
      <Link to={url}> {title} </Link>
    </ContainerButton>
  );
};

export default HeaderButton;
