/**********************************
 * Name : ResultBox.js
 * Author : Jihun Choi
 * Introduction : 게임의 결과를 보여줄 컴포넌트. 게임이름, 결과, 저장 및 다시하기 버튼이 포함됨
 ********************************** */
/* eslint-disable react/prop-types */
import React from 'react';
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
    <div className="flex flex-col items-center text-white">
      <label className="font-normal 4xl:text-4xl 2xl:text-4xl xs:text-2xl">
        {props.testTitle}
      </label>
      <label className="mt-4 font-normal 4xl:text-8xl 2xl:text-8xl xs:text-6xl">
        {props.testResult}
      </label>
      <label className="mt-8 text-lg font-normal">register your score</label>
      <div className="flex flex-row justify-center gap-2.5 mt-2.5">
        <button
          onClick={saveScore}
          className="font-semibold text-gray-800 bg-yellow-300 border-none rounded-lg cursor-pointer 4xl:text-xl 4xl:px-8 4xl:py-3 2xl:text-xl 2xl:px-8 2xl:py-3 xs:text-lg xs:px-6 xs:py-2"
        >
          Save score
        </button>
        <button
          onClick={props.clickTryAgain}
          className="px-8 py-3 text-xl font-semibold text-gray-800 bg-gray-300 border-none rounded-lg cursor-pointer 4xl:text-xl 4xl:px-8 4xl:py-3 2xl:text-xl 2xl:px-8 2xl:py-3 xs:text-lg xs:px-6 xs:py-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
