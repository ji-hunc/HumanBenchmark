import { useState } from 'react';
import React from 'react';
import * as style from './styles';
import TestCard from '../../components/TestCard/TestCard';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <style.Container>
      <div onClick={() => navigate('/reactiontimetest')}>
        <TestCard title="test1" />
      </div>
      <div onClick={() => navigate('/sequencememorytest')}>
        <TestCard title="test2" />
      </div>
      <TestCard title="test3" />
    </style.Container>
  );
}
