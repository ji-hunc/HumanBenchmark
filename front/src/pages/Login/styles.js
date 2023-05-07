import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(238, 238, 238);
  width: 100%;
  height: 500px;
`;

export const InnerContainer = styled.div`
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.label`
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 300;
  margin: 50px 0px;
  color: rgb(51, 51, 51) !important;
  font-family: Helvetica, Arial, sans-serif;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(204, 204, 204);
  width: 100%;
  height: 60px;
  display: block;
  box-sizing: border-box;
  margin: 0;
  font-size: 20px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const SignUpButton = styled.button`
  width: 100%;
  height: 60px;
  font-size: 25px;
  appearance: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-image: initial;
  margin-top: 20px;
  cursor: pointer;
  padding: 12px;
  background: rgb(27, 152, 137);
  border-bottom: none;
  color: white !important;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
