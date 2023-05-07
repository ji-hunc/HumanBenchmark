/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import * as style from './styles';

export default function RankingRow(props) {
  return (
    <style.RankCard>
      <style.RankNumber>{props.rank}</style.RankNumber>
      <style.RankUserName>{props.userId}</style.RankUserName>
      <style.RankScore>{props.score}</style.RankScore>
    </style.RankCard>
  );
}
