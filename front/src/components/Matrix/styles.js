import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Squares = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const SquareRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`;

export const Square = styled.div`
  border-width: 8.25px;
  border-radius: 8.5px;
  vertical-align: top;
  display: inline-block;
  background-color: rgb(123, 123, 123);
  width: 120px;
  height: 120px;
  cursor: pointer;
  background-color: rgb(242, 242, 242);
  transform: scale(1, 1);

  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const startLabel = styled.div`
  font-weight: 500;
  font-size: 80px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
