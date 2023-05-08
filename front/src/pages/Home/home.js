/**********************************
 * Name : home.js
 * Author : Jihun Choi
 * Introduction : 가장 기본이 되는 home 페이지
 ********************************** */
import React from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <style.Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '500px',
          backgroundColor: 'rgb(44, 63, 88)',
        }}
        onClick={() => navigate('/reactiontimetest')}
      >
        <style.HomeTitle>Reaction Time</style.HomeTitle>
      </div>
      <h1>Other Games</h1>
      <style.GameContainer>
        <style.GameCard onClick={() => navigate('/reactiontimetest')}>
          <style.GameTitle>Reaction Time</style.GameTitle>
        </style.GameCard>
        <style.GameCard onClick={() => navigate('/sequencememorytest')}>
          <style.GameTitle>Sequence Memory</style.GameTitle>
        </style.GameCard>
        <style.GameCard onClick={() => navigate('/numbermemorytest')}>
          <style.GameTitle>Number Memory</style.GameTitle>
        </style.GameCard>
        <style.GameCard onClick={() => navigate('/alphabetmemorytest')}>
          <style.GameTitle>Alphabet Memory</style.GameTitle>
        </style.GameCard>
      </style.GameContainer>
    </style.Container>
  );
}
