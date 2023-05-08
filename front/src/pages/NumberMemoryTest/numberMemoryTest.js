/**********************************
 * Name : numberMemoryTest.js
 * Author : Jihun Choi
 * Introduction : numberMemory 테스트를 위한 페이지
 ********************************** */
import { useState, useRef } from 'react';
import React from 'react';
import * as style from './styles';
import ResultBox from '../../components/ResultBox/ResultBox';
import AnswerCheck from '../../components/AnswerCheck/AnswerCheck';
import { useRecoilValue } from 'recoil';
import Api from '../../Api/Api';
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
  const checkAnswer = (event) => {
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
      <style.Container>
        {isTesting ? null : (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <style.startLabel onClick={startGame}>
              Click to Start!
            </style.startLabel>
            <style.Button onClick={startGame}>Start Game</style.Button>
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
              saveScore={() =>
                Api.saveScore(
                  'NumberMemory',
                  userInfo.userId,
                  level,
                  isRegistered,
                  setIsRegistered,
                )
              }
            />
          </div>
        ) : (
          <div>
            {isClearLevel ? (
              <div>
                <h1
                  style={{
                    fontSize: '80px',
                    color: 'white',
                    margin: '0px',
                    fontWeight: 400,
                  }}
                >
                  Correct!
                </h1>
                <style.Button onClick={goNextLevel}>Next</style.Button>
              </div>
            ) : (
              <div>
                {isTimeOver ? (
                  <style.AnswerForm>
                    <style.questionLabel>
                      What was the Numbers?
                    </style.questionLabel>
                    <style.Input
                      type="number"
                      pattern="[0-9]*"
                      inputmode="numeric"
                      ref={input}
                      onChange={updateAnswer}
                      onKeyPress={handleOnKeyPress}
                    />
                    <style.Button onClick={checkAnswer}>Submit</style.Button>
                  </style.AnswerForm>
                ) : (
                  <style.Question>{question}</style.Question>
                )}
              </div>
            )}
          </div>
        )}
      </style.Container>
      <Ranking gameName={'NumberMemory'} />
    </div>
  );
}
