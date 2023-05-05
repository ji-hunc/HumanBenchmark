import { useState } from 'react';
import React from 'react';
import * as style from './styles';
import ResultBox from '../../components/ResultBox/ResultBox';

export default function ReactionTimeTest() {
  // 배경색 관련
  const [colorState, setColorState] = useState(1);
  const [color, setColor] = useState('rgb(43, 135, 209)');
  // 타이머 ref state, 시간 기록
  const [randomTimer, setRandomTimer] = useState(0);
  const [startTime, setStartTime] = useState(0);
  // 결과 시간 기록
  const [result, setResult] = useState('Click to Start!');
  // 테스트 진행 관련
  const [tryCount, setTrycount] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [isFinishMeasure, setIsFinishMeasure] = useState(null);
  const [totalScoreTime, setTotalScoreTime] = useState(0);
  // 테스트 종료 후 배경 커서 상태 변경
  const [cursor, setCursor] = useState('pointer');

  // 배경색
  const red = 'rgb(206, 38, 54)';
  const green = 'rgb(75, 219, 106)';
  const blue = 'rgb(43, 135, 209)';

  // 기다리는 시간의 최대, 최솟값
  const ranMax = 5000;
  const ranMin = 2000;

  const changeToGreen = () => {
    const randomNum = Math.random() * (ranMax - ranMin) + ranMin;
    const timerId = setTimeout(() => {
      setColor(green);
      setStartTime(Date.now());
      setColorState(3);
    }, randomNum);
    setRandomTimer(timerId);
  };

  const initTest = () => {
    setIsTesting(false);
    setTrycount(5);
    setIsFinishMeasure(false);
    setTotalScoreTime(0);
    setCursor('pointer');
    setResult('click to start!');
  };

  const handleClick = () => {
    // 테스트가 끝났으면(5회) 배경 커서 변경 및 클릭 무효화
    if (isFinishMeasure) {
      setCursor('default');
      return;
    }
    // 테스트가 끌났으면(5회) 초기화 진행
    if (!isTesting) {
      initTest();
    }
    if (colorState == 1) {
      // blue 화면일 때
      setIsTesting(true);
      setColor(red); // set to red
      setColorState(2); // set to red
      changeToGreen();
    } else if (colorState == 2) {
      // red 화면일 떄
      clearTimeout(randomTimer);
      setResult('Too Fast!');
      setColor(blue); // set to blue
      setColorState(1); // set to blue
    } else {
      // green 화면일 때
      const score = Date.now() - startTime;
      setResult(score + ' ms');
      setTotalScoreTime((state) => state + score);
      if (tryCount - 1 == 0) {
        setIsTesting(false);
        setTrycount(-1);
        setIsFinishMeasure(true);
        setCursor('default');
      } else {
        setTrycount((state) => state - 1);
      }
      setColor(blue); // set to blue
      setColorState(1); // set to blue
    }
  };

  return (
    <style.Container
      style={{ cursor: cursor, backgroundColor: color }}
      onMouseDown={() => handleClick()}
    >
      {colorState == 1 ? (
        // blue 화면일 때
        <div style={{ color: 'white' }}>
          {isFinishMeasure ? (
            <ResultBox
              clickTryAgain={initTest}
              testTitle="Reaction Time"
              testResult={totalScoreTime / 5 + ' ms'}
            />
          ) : (
            <div>
              <style.MainText>{result}</style.MainText>
              {isTesting ? (
                <style.SubText>click to continue</style.SubText>
              ) : null}
            </div>
          )}
        </div>
      ) : colorState == 2 ? (
        // red 화면일 떄
        <style.MainText>Wait for Green ...</style.MainText>
      ) : (
        // green 화면일 때
        <style.MainText>Click!</style.MainText>
      )}
    </style.Container>
  );
}
