/**********************************
 * Name : SequenceMemoryTest.js
 * Author : Jihun Choi
 * Introduction : sequenceMemory테스트를 위한 페이지
 ********************************** */
import { useRef } from 'react';
import React from 'react';
import * as style from './styles';
import Matrix from '../../components/Matrix/Matrix';
import Ranking from '../../components/Ranking/Ranking';

export default function SequenceMemoryTest() {
  // 베경 ref
  const background = useRef();

  // 랜덤 시퀀스를 생성해서 Matrix에게 넘겨줌
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

  return (
    <div>
      <style.Container ref={background}>
        <Matrix background={background} numbers={sequence} />
      </style.Container>
      <Ranking gameName={'SequenceMemory'} />
    </div>
  );
}
