import * as S from './styles';

interface TitleProps {
  title: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <S.Container>
      <h1>{title}</h1>
      {subtitle && <small>{subtitle}</small>}
    </S.Container>
  );
};

export default Title;
