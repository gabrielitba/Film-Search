import * as S from './styles';

interface LoadingProps {
  typeLoading: 'roller';
}

const Loading = ({ typeLoading }: LoadingProps) => {
  return (
    <>
      {typeLoading === 'roller' && (
        <S.LoadingRoller>
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </S.LoadingRoller>
      )}
    </>
  );
};

export default Loading;
