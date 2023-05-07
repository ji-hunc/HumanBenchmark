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
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 400px;
  margin: 0px auto;
`;

export const Title = styled.label`
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 300;
  margin: 15px 0px;
  color: rgb(51, 51, 51) !important;
  font-family: Helvetica, Arial, sans-serif;
`;

export const description = styled.label`
  margin: 0px 0px 5px;
  padding: 0;
  font-weight: 400;
  outline: 0;
  color: rgb(51, 51, 51) !important;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(204, 204, 204);
  width: 400px;
  display: block;
  box-sizing: border-box;
  margin: 0;
`;

export const SignUpButton = styled.button`
  width: 100%;
  width: 100%;
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
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
