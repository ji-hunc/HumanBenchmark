/**********************************
 * Name : ResultBox.js
 * Author : Jihun Choi
 * Introduction : 게임의 결과를 보여줄 컴포넌트. 게임이름, 결과, 저장 및 다시하기 버튼이 포함됨
 ********************************** */
/* eslint-disable react/prop-types */
import React from 'react';
import * as style from './styles';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';

export default function ResultBox(props) {
  const userInfo = useRecoilValue(LoginState);

  const saveScore = async () => {
    try {
      const response = await fetch('/api/savescore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gameName: props.gameName,
          score: props.score,
          id: userInfo.userId,
        }),
      });

      if (response.ok) {
        alert('Score saved successfully');
      } else {
        alert('Error saving score');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving score');
    }
  };

  return (
    <style.Container>
      <style.TestTitle>{props.testTitle}</style.TestTitle>
      <style.TestResult>{props.testResult}</style.TestResult>
      <style.InfoText>register your score</style.InfoText>
      <style.ButtonBox>
        <style.Button onClick={saveScore} background="rgb(255, 213, 97)">
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
