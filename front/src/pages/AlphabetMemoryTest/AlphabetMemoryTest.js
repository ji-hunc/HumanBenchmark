/**********************************
 * Name : AlphabetMemoryTest.js
 * Author : Jihun Choi
 * Introduction : 알파벳메모리 테스트를 위한 페이지
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
              question="Alphabets"
              correctAnswer={question}
              answer={answer}
            />
            <ResultBox
              clickTryAgain={startGame}
              testTitle="AlphabetMemory Test"
              testResult={level + ' Level'}
              saveScore={() =>
                Api.saveScore(
                  'AlphabetMemory',
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
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <style.questionLabel>
                      What was the Alphabets?
                    </style.questionLabel>
                    <style.Input
                      ref={input}
                      onChange={updateAnswer}
                      onKeyPress={handleOnKeyPress}
                    />
                    <style.Button onClick={checkAnswer}>Submit</style.Button>
                  </div>
                ) : (
                  <style.Question>{question}</style.Question>
                )}
              </div>
            )}
          </div>
        )}
      </style.Container>
      <Ranking gameName={'AlphabetMemory'} />
    </div>
  );
}
