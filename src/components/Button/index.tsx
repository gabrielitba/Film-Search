import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface ButtonProps {
  title: string;
  url: string;
}

const Button = ({ title, url }: ButtonProps) => {
  return (
    <S.ContainerButton>
      <Link to={url}> {title} </Link>
    </S.ContainerButton>
  );
};

export default Button;
