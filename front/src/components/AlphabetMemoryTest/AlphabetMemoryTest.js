/**********************************
 * Name : AlphabetMemoryTest.js
 * Author : Jihun Choi
 * Introduction : 알파벳메모리 테스트를 위한 페이지
 ********************************** */
import { useState, useRef } from 'react';
import React from 'react';
import ResultBox from '../../components/ResultBox/ResultBox';
import AnswerCheck from '../../components/AnswerCheck/AnswerCheck';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';
import Ranking from '../../components/Ranking/Ranking';

export default function AlphabetMemoryTest() {
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

  // 유저의 input을 받는 ref
  const input = useRef();

  // 게임 시작 함수
  const startGame = () => {
    const sequence = getRandomSequence(1);
    setQuestion(sequence);
    setIsTesting(true);
    setTimeout(() => setIsTimeOver(true), 1000);
    setIsGameOver(false);
    setLevel(0);
    setIsRegistered(false);
  };

  // 유저가 값을 입력할 때 마다 대문자로 바꿔주고, state에 저장
  const updateAnswer = (event) => {
    setAnswer(event.target.value.toUpperCase());
    event.target.value = event.target.value.toUpperCase();
  };

  // 답이 맞는지 확인하는 함수
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

  // 다음 레벨로 가는 함수
  const goNextLevel = () => {
    setAnswer('');
    const sequence = getRandomSequence(level + 2);
    setQuestion(sequence);
    setIsTimeOver(false);
    setIsClearLevel(false);
    setTimeout(() => setIsTimeOver(true), (level + 1) * 1000);
    setLevel((state) => state + 1);
  };

  // 랜덤으로 알파벳 시퀀스를 만들어 내는 함수
  const getRandomSequence = (length) => {
    const numbers = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    let sequence = '';

    for (let i = 0; i < length; i++) {
      let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      sequence += randomNumber;
    }
    return sequence;
  };

  // 엔터키를 눌렀을 때 자동으로 답이 제출하게 하기 위한 enter키 처리 함수
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
              className="font-medium text-white cursor-pointer text-8xl sm:text-4xl"
              onClick={startGame}
            >
              Click to Start!
            </div>
          </div>
        )}

        {isGameOver ? (
          <div className="flex flex-col items-center">
            <AnswerCheck
              question="Alphabets"
              correctAnswer={question}
              answer={answer}
            />
            <ResultBox
              clickTryAgain={startGame}
              testTitle="AlphabetMemory Test"
              testResult={level + ' Level'}
              gameName="AlphabetMemory"
              score={level}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {isClearLevel ? (
              <div className="flex flex-col items-center">
                <h1 className="m-0 font-light text-white text-8xl">Correct!</h1>
                <button
                  className="px-8 py-3 mt-4 text-2xl font-bold text-gray-900 bg-yellow-500 cursor-pointer rounded-md"
                  onClick={goNextLevel}
                >
                  Next
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {isTimeOver ? (
                  <div className="flex flex-col items-center">
                    <div className="mb-8 text-4xl font-medium text-white">
                      What was the Alphabets?
                    </div>
                    <input
                      ref={input}
                      onChange={updateAnswer}
                      onKeyPress={handleOnKeyPress}
                      className="px-4 py-2 mb-4 text-6xl text-center text-white bg-transparent border border-gray-400 rounded-sm shadow-none outline-none"
                    />
                    <button
                      className="px-8 py-3 mt-4 text-2xl font-bold text-gray-900 bg-yellow-500 cursor-pointer rounded-md"
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
      <Ranking gameName={'AlphabetMemory'} />
    </div>
  );
}
