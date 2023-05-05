import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: #2c5582;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const Title = styled.label`
  padding: 20px;
  font-size: 40px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  margin: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const LoginButton = styled.label`
  cursor: pointer;
  font-size: 20px;
  margin-right: 20px;
`;

export const SignUpButton = styled.button`
  margin-right: 20px;
  height: 100%;
  font-size: 20px;
  padding: 12px 30px;
  background: rgb(255, 209, 84);
  font-weight: bold;
  cursor: pointer;
  color: black;
  border: none;
`;
