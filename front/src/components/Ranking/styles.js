import styled from 'styled-components';

// Ranking.js styles
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 5px;
  border-radius: 5px;
  padding: 30px;
  background: white;
  transition: transform 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  color: rgb(51, 51, 51) !important;
  text-decoration: none !important;
`;

export const Title = styled.label`
  font-size: 40px;
  margin-bottom: 30px;
`;

export const RowWrapper = styled.div`
  margin-top: 20px;
`;

// RankingRow.js styles
export const RankCard = styled.div`
  background-color: ${(props) =>
    props.rank === 1
      ? 'rgb(255, 200, 0)'
      : props.rank === 2
      ? 'rgb(168, 185, 200)'
      : props.rank === 3
      ? 'rgb(193, 150, 107)'
      : '#ffffff'};
  gap: ${(props) => (props.gap ? props.gap : null)};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: row;
`;

export const RankNumber = styled.label`
  font-size: 30px;
`;
export const RankUserName = styled.label`
  font-size: 30px;
`;
export const RankScore = styled.label`
  font-size: 30px;
`;
