import { useTransition } from 'react-spring';

import * as S from './styles';

import { ToastMessage } from '../../hooks/toast';

import Toast from './components/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}
const ToastContainer = ({ messages }: ToastContainerProps) => {
  const toastTransition = useTransition(messages, (message) => message.id, {
    from: {
      right: '-120%',
      opacity: 0,
      transform: 'rotateZ(0deg)',
    },
    enter: {
      right: '0%',
      opacity: 1,
      transform: 'rotateZ(360deg)',
      transition: 'transform 200ms',
    },
    leave: {
      right: '-120%',
      opacity: 0,
      transform: 'rotateZ(0deg)',
    },
  });
  return (
    <S.Wrapper>
      {toastTransition.map(({ item, key, props }) => (
        <Toast key={key} style={props} toastMessage={item} />
      ))}
    </S.Wrapper>
  );
};

export default ToastContainer;
