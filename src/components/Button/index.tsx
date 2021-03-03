import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface ButtonProps {
  url?: string;
  goToPreviousPath?: () => void;
  children: ReactNode;
}

const Button = ({ url, goToPreviousPath, children }: ButtonProps) => {
  return (
    <S.ContainerButton>
      <Link onClick={goToPreviousPath} to={url ?? '#'}>
        {children}
      </Link>
    </S.ContainerButton>
  );
};

export default Button;
