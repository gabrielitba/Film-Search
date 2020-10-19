import React from 'react';
import styled from 'styled-components';


const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;

  margin: 3rem 0 0 3rem;
  h1 {
    text-transform: uppercase;
    line-height: 4rem;
    font-weight: 300;
  }
  small {
    text-transform: uppercase;
    font-weight: 300;
    padding-left: 1px;
  }
`;

interface Props {
  title: string;
  subtitle?: string;
}

const TitleSub: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <ContainerTitle>
      <h1>{title}</h1>
      <small>{subtitle}</small>
    </ContainerTitle>
  );
};

export default TitleSub;
