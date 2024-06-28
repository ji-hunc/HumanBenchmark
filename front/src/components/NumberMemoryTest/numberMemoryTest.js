/**********************************
 * Name : numberMemoryTest.js
 * Author : Jihun Choi
 * Introduction : numberMemory 테스트를 위한 페이지
 ********************************** */
import { useState, useRef } from 'react';
import React from 'react';
import ResultBox from '../../components/ResultBox/ResultBox';
import AnswerCheck from '../../components/AnswerCheck/AnswerCheck';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';
import Ranking from '../../components/Ranking/Ranking';

export default function NumberMemoryTest() {
  // user 정보 가져오기
  const userInfo = useRecoilValue(LoginState);

  // 게임 진행을 위한 states
  const [question, setQuestion] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [answer, setAnswer] = useState('');
  const [level, setLevel] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isClearLevel, setIsClearLevel] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  // 유저로부터 입력값을 받을 input refs
  const input = useRef();

  // 게임 초기화 함수
  const startGame = () => {
    const sequence = getRandomSequence(1);
    setQuestion(sequence);
    setIsTesting(true);
    setTimeout(() => setIsTimeOver(true), 1000);
    setIsGameOver(false);
    setLevel(0);
    setIsRegistered(false);
  };

  // 유저로부터 input을 받음과 동시에 입력 State 업데이트
  const updateAnswer = (event) => {
    setAnswer(event.target.value);
  };

  // 정답 화인 함수
  const checkAnswer = () => {
    if (answer === '') {
      return;
    }
    if (question === answer) {
      setIsClearLevel(true);
    } else {
      setIsGameOver(true);
      setIsTimeOver(false);
    }
  };

  // 다음레벨로 가기위해 여러 초기화를 하는 함수
  const goNextLevel = () => {
    setAnswer('');
    const sequence = getRandomSequence(level + 2);
    setQuestion(sequence);
    setIsTimeOver(false);
    setIsClearLevel(false);
    setTimeout(() => setIsTimeOver(true), (level + 1) * 1000);
    setLevel((state) => state + 1);
  };

  // 랜덤 숫자 시퀀스를 만드는 함수
  const getRandomSequence = (length) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sequence = '';

    for (let i = 0; i < length; i++) {
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      sequence += randomNumber;
    }
    return sequence;
  };

  // 엔터키를 눌렀을 때 처리할 일을 정의하는 함수
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkAnswer(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full bg-primary h-128">
        {isTesting ? null : (
          <div className="flex flex-col items-center">
            <div
              className="font-medium text-white cursor-pointer 4xl:text-8xl 2xl:text-8xl xs:text-4xl"
              onClick={startGame}
            >
              Click to Start!
            </div>
          </div>
        )}

        {isGameOver ? (
          <div>
            <AnswerCheck
              question="Number"
              correctAnswer={question}
              answer={answer}
            />
            <ResultBox
              clickTryAgain={startGame}
              testTitle="NumberMemory Test"
              testResult={level + ' Level'}
              gameName="NumberMemory"
              score={level}
            />
          </div>
        ) : (
          <div>
            {isClearLevel ? (
              <div>
                <h1 className="m-0 font-light text-white text-8xl">Correct!</h1>
                <button
                  className="px-8 py-3 mt-4 text-2xl font-bold text-gray-900 bg-yellow-500 rounded-md cursor-pointer"
                  onClick={goNextLevel}
                >
                  Next
                </button>
              </div>
            ) : (
              <div>
                {isTimeOver ? (
                  <div className="flex flex-col items-center">
                    <div className="mb-8 text-4xl font-medium text-white">
                      What was the Numbers?
                    </div>
                    <input
                      type="number"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      ref={input}
                      onChange={updateAnswer}
                      onKeyPress={handleOnKeyPress}
                      className="px-4 py-2 mb-4 text-6xl text-center text-white bg-transparent border border-gray-400 rounded-sm shadow-none outline-none"
                    />
                    <button
                      className="px-8 py-3 mt-4 text-2xl font-bold text-gray-900 bg-yellow-500 rounded-md cursor-pointer"
                      onClick={checkAnswer}
                    >
                      Submit
                    </button>
                  </div>
                ) : (
                  <div className="text-white text-8xl sm:text-4xl">
                    {question}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
      <Ranking gameName={'NumberMemory'} />
    </div>
  );
}
