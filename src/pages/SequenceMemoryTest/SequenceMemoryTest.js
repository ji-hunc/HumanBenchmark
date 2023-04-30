import { useState, useRef } from 'react';
import React from 'react';
import * as style from './styles';
import ResultBox from '../../components/ResultBox/ResultBox';
import Matrix from '../../components/Matrix/Matrix';

export default function SequenceMemoryTest() {
  const background = useRef();

  const genRandomSeq = () => {
    let seq = '';
    for (let i = 0; i < 30; i++) {
      seq += Math.floor(Math.random() * (10 - 1)) + 1;
    }
    return seq;
  };

  const numbers = genRandomSeq();

  return (
    <style.Container ref={background}>
      <Matrix background={background} numbers={numbers} />
    </style.Container>
  );
}
