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
  gap: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GameCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 128, 82);
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.3) 10px 10px 10px;
  cursor: pointer;
`;

export const GameTitle = styled.label`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
