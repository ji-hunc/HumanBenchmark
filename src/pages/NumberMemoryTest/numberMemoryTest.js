import { useState, useRef } from 'react';
import React from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import ResultBox from '../../components/ResultBox/ResultBox';
import AnswerCheck from '../../components/AnswerCheck/AnswerCheck';

export default function NumberMemoryTest() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [isTimeOver, setIsTimeOver] = useState(false);
  const [answer, setAnswer] = useState('');
  const [level, setLevel] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isClearLevel, setIsClearLevel] = useState(false);

  const input = useRef();

  const startGame = () => {
    const sequence = getRandomSequence(1);
    setQuestion(sequence);
    setIsTesting(true);
    setTimeout(() => setIsTimeOver(true), 1000);
    setIsGameOver(false);
    setLevel(0);
  };

  const nextGame = () => {};

  const updateAnswer = (event) => {
    setAnswer(event.target.value);
  };

  const checkAnswer = (event) => {
    if (answer == '') {
      return;
    }
    console.log(answer);
    if (question == answer) {
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
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
            testTitle="NumberMemory Test"
            testResult={level + ' Level'}
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
                    What was the Number?
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
  );
}
