import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(44, 63, 88);
  width: 100%;
  height: 500px;
`;

export const Question = styled.label`
  font-size: 100px;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

export const AnswerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 20px;
  padding: 12px 30px;
  background: rgb(255, 213, 97);
  font-weight: bold;
  cursor: pointer;
  color: rgb(51, 51, 51);
  border: none;
  border-radius: 10px;
  margin-top: 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  color: white;
  background: rgba(0, 0, 100, 0);
  border-radius: 3px;
  text-align: center;
  font-size: 48px;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  padding: 10px;
  border: 1px solid rgb(204, 204, 204);

  @media screen and (max-width: 480px) {
    max-width: 300px;
    font-size: 32px;
  }
`;

export const startLabel = styled.div`
  font-size: 80px;
  font-weight: 500;
  color: white;
  display: flex;

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
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

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`;
