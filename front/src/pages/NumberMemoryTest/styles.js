import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(43, 135, 209);
  width: 100%;
  height: 540px;
`;

export const Question = styled.label`
  font-size: 100px;
  color: white;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 12px 30px;
  background: rgb(255, 209, 84);
  font-weight: bold;
  cursor: pointer;
  color: rgb(51, 51, 51) !important;
  border: none;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  color: white;
  background: rgba(0, 0, 100, 0.2);
  border-radius: 3px;
  text-align: center;
  font-size: 48px;
  ${'' /* width: 100%; */}
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  padding: 10px;
  border: 1px solid rgb(204, 204, 204);
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
`;

export const questionLabel = styled.div`
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
