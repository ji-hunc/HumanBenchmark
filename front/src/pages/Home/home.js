import { useState, useEffect } from 'react';
import React from 'react';
import * as style from './styles';
import TestCard from '../../components/TestCard/TestCard';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

export default function Home() {
  const navigate = useNavigate();
  const loginInfo = useRecoilValue(LoginState);

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
        <h1 style={{ color: '#fff', fontSize: '80px', fontWeight: '400' }}>
          Reaction Time
        </h1>
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
