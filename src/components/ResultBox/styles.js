import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TestTitle = styled.label`
  font-size: 24px;
  font-weight: 400;
`;

export const TestResult = styled.label`
  font-size: 80px;
  font-weight: 400;
`;

export const InfoText = styled.label`
  font-size: 18px;
  font-weight: 400;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;
export const Button = styled.button`
  font-size: 20px;
  padding: 12px 30px;
  ${'' /* background: rgb(255, 209, 84); */}
  background: ${(props) => props.background};
  ${'' /* background: rgba(255, 255, 255, 0.5); */}
  font-weight: bold;
  cursor: pointer;
  color: rgb(51, 51, 51) !important;
  border: none;
`;
