import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: '#e6e8f4';
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const GameContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 0px;
  }
`;

export const GameCard = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 128, 82);
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 10px;
  cursor: pointer;

  & > label {
    position: absolute; /* 내부 요소를 부모 요소의 중앙에 고정 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    height: 0;
    padding-bottom: 80%;
  }
`;

export const GameTitle = styled.label`
  color: white;
  font-size: 30px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const HomeTitle = styled.label`
  color: white;
  font-size: 80px;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
