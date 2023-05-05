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

  const generateSequence = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sequence = '';
    let prevNumber = null;

    for (let i = 0; i < 30; i++) {
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      if (randomNumber !== prevNumber) {
        sequence += randomNumber.toString();
        prevNumber = randomNumber;
      } else {
        i--;
      }
    }

    return sequence;
  };
  const sequence = generateSequence();

  const numbers = genRandomSeq();

  return (
    <style.Container ref={background}>
      <Matrix background={background} numbers={sequence} />
    </style.Container>
  );
}
