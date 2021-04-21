import styled from 'styled-components';

export const HeaderDetails = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  height: 68px;
`;

export const ContainerTitle = styled.div`
  margin: 0 0 1.5rem -2.2rem;
`;

export const CardDetail = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
  width: 600px;
  height: 500px;
  border-radius: 1rem;

  margin: 0 auto;
  position: relative;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  font-size: 1rem;
  &:hover {
    filter: brightness(0.9);
    transform: scale(1.3);
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 1rem;
`;

export const ImgUrl = styled.img`
  height: 400px;
  width: 266px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  position: relative;
  p {
    margin: 0 0 2rem 1rem;
  }
`;

export const Plot = styled.small`
  position: absolute;
  width: 18rem;
  bottom: 0;
  font-style: italic;
`;
