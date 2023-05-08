/**********************************
 * Name : ResultBox.js
 * Author : Jihun Choi
 * Introduction : 게임의 결과를 보여줄 컴포넌트. 게임이름, 결과, 저장 및 다시하기 버튼이 포함됨
 ********************************** */
/* eslint-disable react/prop-types */
import React from 'react';
import * as style from './styles';

export default function ResultBox(props) {
  return (
    <style.Container>
      <style.TestTitle>{props.testTitle}</style.TestTitle>
      <style.TestResult>{props.testResult}</style.TestResult>
      <style.InfoText>register your score</style.InfoText>
      <style.ButtonBox>
        <style.Button onClick={props.saveScore} background="rgb(255, 213, 97)">
          Save score
        </style.Button>
        <style.Button
          onClick={props.clickTryAgain}
          background="rgb(217, 217, 217)"
        >
          Try again
        </style.Button>
      </style.ButtonBox>
    </style.Container>
  );
}
