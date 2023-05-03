import { useState } from 'react';
import React from 'react';
import * as style from './styles';
import TestCard from '../../components/TestCard/TestCard';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper';

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
          height: '540px',
          backgroundColor: 'rgb(43, 135, 209)',
        }}
        onClick={() => navigate('/reactiontimetest')}
      >
        <h1 style={{ color: '#fff', fontSize: '80px', fontWeight: '400' }}>
          Reaction Test
        </h1>
      </div>
      <h1>Other Games</h1>
      <Swiper
        initialSlide={1}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: '100%',
            }}
            onClick={() => navigate('/reactiontimetest')}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backgroundColor: '#ffffdd',
                width: '100%',
                height: '100%',
              }}
            >
              Reaction Test
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}
            onClick={() => navigate('/sequencememorytest')}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backgroundColor: '#ffddff',
                width: '100%',
                height: '100%',
              }}
            >
              Sequence Test
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div
            style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}
            onClick={() => navigate('/numbermemorytest')}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                backgroundColor: '#ddddff',
                width: '100%',
                height: '100%',
              }}
            >
              Number Memory Test
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </style.Container>
  );
}
