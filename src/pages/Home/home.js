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
          Click to Start
        </h1>
      </div>
      <h1>Other Games</h1>
      <Swiper
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
                backgroundColor: '#fff',
                width: '100%',
                height: '100%',
              }}
            >
              Test1
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
                backgroundColor: '#00ffff',
                width: '100%',
                height: '100%',
              }}
            >
              Test2
            </div>
          </div>{' '}
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </style.Container>
  );
}
