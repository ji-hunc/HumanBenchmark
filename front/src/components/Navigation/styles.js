import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  background-color: #2c3f58;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 480px) {
    padding: 10px 0px;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const Title = styled.label`
  margin-left: 20px;
  font-size: 30px;
  cursor: pointer;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const LoginButton = styled.label`
  cursor: pointer;
  font-size: 18px;
  padding: 12px 30px;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    padding: 10px 15px;
  }
`;

export const SignUpButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  margin-right: 20px;
  height: 100%;
  padding: 10px 15px;
  background: #ffd561;
  font-weight: bold;
  color: black;
  border: none;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    padding: 10px 15px;
    margin-right: 0px;
  }
`;
