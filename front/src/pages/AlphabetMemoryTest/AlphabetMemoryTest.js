import { useState, useRef, useEffect } from 'react';
import React from 'react';
import * as style from './styles';
import ResultBox from '../../components/ResultBox/ResultBox';
import AnswerCheck from '../../components/AnswerCheck/AnswerCheck';
import { useRecoilValue } from 'recoil';
import Api from '../../Api/Api';
import LoginState from '../../States/LoginState';
import Ranking from '../../components/Ranking/Ranking';

export default function AlphabetMemoryTest() {
  const userInfo = useRecoilValue(LoginState);
  const [question, setQuestion] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [answer, setAnswer] = useState('');
  const [level, setLevel] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isClearLevel, setIsClearLevel] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const input = useRef();

  const startGame = () => {
    const sequence = getRandomSequence(1);
    setQuestion(sequence);
    setIsTesting(true);
    setTimeout(() => setIsTimeOver(true), 1000);
    setIsGameOver(false);
    setLevel(0);
    setIsRegistered(false);
  };

  const updateAnswer = (event) => {
    setAnswer(event.target.value.toUpperCase());
    event.target.value = event.target.value.toUpperCase();
  };

  const checkAnswer = (event) => {
    if (answer === '') {
      return;
    }
    console.log(answer);
    if (question === answer) {
      setIsClearLevel(true);
    } else {
      console.log('wrong answer');
      setIsGameOver(true);
      setIsTimeOver(false);
    }
  };

  const goNextLevel = () => {
    setAnswer('');
    console.log('correct');
    const sequence = getRandomSequence(level + 2);
    console.log(sequence);
    setQuestion(sequence);
    setLevel((state) => state + 1);
    setIsTimeOver(false);
    setIsClearLevel(false);
    setTimeout(() => setIsTimeOver(true), 1000);
  };

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
            <AnswerCheck correctAnswer={question} answer={answer} />
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
                <h1 style={{ fontSize: '80px', color: 'white' }}>Correct!</h1>
                <style.Button onClick={goNextLevel}>next</style.Button>
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
