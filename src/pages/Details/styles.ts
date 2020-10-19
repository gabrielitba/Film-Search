import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  width: 600px;
  height: 500px;
  border-radius: 1rem;

  margin: 0 auto;
  position: relative;
`;

export const HeaderDetails = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  margin: 0 0 1.5rem -2.2rem;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 2px solid #3c99dc;
  border-radius: 10px;
  cursor: pointer;
  height: 2rem;
  width: 6rem;
  background: #3c99dc;
  color: #fff;
  font-size: 1rem;
  opacity: 0.9;
  &:hover {
    opacity: 1;
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
