import { Link } from 'react-router-dom';

import * as S from './styles';

interface ButtonProps {
  title: string;
  url?: string;
  goToPreviousPath?: () => void;
}

const Button = ({ title, url, goToPreviousPath }: ButtonProps) => {
  return (
    <S.ContainerButton>
      <Link onClick={goToPreviousPath} to={url ?? '#'}>
        {title}
      </Link>
    </S.ContainerButton>
  );
};

export default Button;
