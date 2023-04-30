/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import React from 'react';
import * as style from './styles';
import ResultBox from '../ResultBox/ResultBox';

export default function Matrix(props) {
  const [answer, setAnswer] = useState('');
  const [level, setLevel] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [question, setQuestion] = useState(props.numbers);
  const [gameOver, setGameOver] = useState(false);
  const [isTesting, setIsTesting] = useState(false);
  const background = props.background;
  const squares = useRef();
  const blockRefs = useRef([]);
  // let question = '';

  const row1 = [1, 2, 3].map((index) => (
    <style.Square
      key={index}
      onClick={(event) => handleBlockClick(event, index)}
      ref={(el) => (blockRefs.current[index] = el)}
    />
  ));
  const row2 = [4, 5, 6].map((index) => (
    <style.Square
      key={index}
      onClick={(event) => handleBlockClick(event, index)}
      ref={(el) => (blockRefs.current[index] = el)}
    />
  ));
  const row3 = [7, 8, 9].map((index) => (
    <style.Square
      key={index}
      onClick={(event) => handleBlockClick(event, index)}
      ref={(el) => (blockRefs.current[index] = el)}
    />
  ));

  const genRandomSeq = () => {
    let seq = '';
    for (let i = 0; i < 30; i++) {
      seq += Math.floor(Math.random() * (10 - 1)) + 1;
    }
    setQuestion(seq);
  };

  const handleBlockClick = (event, index) => {
    const levelVar = level;
    console.log(
      'question: ',
      question[clickCount],
      question,
      'index: ',
      index,
      'clickCount: ',
      clickCount,
    );
    console.log(question);
    console.log(question);
    console.log(question);
    if (question[clickCount] != index) {
      console.log('Game Over');
      background.current.style.backgroundColor = 'rgb(206, 38, 54)';
      setTimeout(() => {
        background.current.style.backgroundColor = 'rgb(43, 135, 209)';
      }, 500);
      // game over
      setGameOver(true);
      genRandomSeq();
      // alert('Game Over');
      // TODO GameOver시 처리할 프로세스 작성해야함
      return;
    }
    event.target.style.backgroundColor = '#fff';
    event.target.style.opacity = 0.8;
    setTimeout(() => {
      event.target.style.backgroundColor = 'rgb(0, 0, 102)';
      event.target.style.opacity = 0.15;
    }, 300);
    console.log('clickCount: ', clickCount, 'level: ', level);
    if (clickCount == level) {
      console.log('You Win');
      // next level
      setLevel((state) => state + 1);
      setClickCount(0);
      background.current.style.backgroundColor = 'rgb(75, 219, 106)';
      setTimeout(() => {
        background.current.style.backgroundColor = 'rgb(43, 135, 209)';
        console.log('levellevellevellevellevel', level);
        showQuestion(0, levelVar + 1);
      }, 500);
    } else {
      setClickCount((state) => state + 1);
    }
  };

  const showQuestion = (index, levelVar) => {
    console.log(question);
    squares.current.style.pointerEvents = 'none';
    if (index >= levelVar + 1) {
      console.log('return');
      squares.current.style.pointerEvents = 'auto';
      return;
    }
    console.log('index: ', index, 'level: ', level);
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
    console.log(blockRefs.current[question[index]]);
    console.log(
      'question: ',
      question,
      'question[index]: ',
      question[index],
      'index: ',
      index,
      blockRefs.current[question[index]],
      blockRefs.current[question[index]].style,
    );
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@');
    blockRefs.current[question[index]].style.backgroundColor = '#fff';
    blockRefs.current[question[index]].style.opacity = 0.8;
    setTimeout(() => {
      blockRefs.current[question[index]].style.backgroundColor =
        'rgb(0, 0, 102)';
      blockRefs.current[question[index]].style.opacity = 0.15;
      showQuestion(index + 1, levelVar);
    }, 500);
  };

  const startGame = (index) => {
    showQuestion(index, 0);
  };

  const initTest = () => {
    setLevel(0);
    setClickCount(0);
    setGameOver(false);
    setIsTesting(false);
  };

  return (
    <style.Container>
      {gameOver ? (
        <ResultBox
          testTitle="SqeuenceTest"
          testResult={level + ' Level'}
          clickTryAgain={initTest}
        />
      ) : isTesting ? (
        <style.Squares ref={squares}>
          <h1 style={{ color: '#ffffff' }}>LEVEL {level + 1} </h1>

          <style.SquareRow>{row1}</style.SquareRow>
          <style.SquareRow>{row2}</style.SquareRow>
          <style.SquareRow>{row3}</style.SquareRow>
        </style.Squares>
      ) : (
        <style.startLabel
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setIsTesting(true);
            // 그려지기 전에 불러서 style 관련 에러 뜸
            setTimeout(() => startGame(0), 500);
          }}
        >
          click to start!
        </style.startLabel>
      )}
    </style.Container>
  );
}
