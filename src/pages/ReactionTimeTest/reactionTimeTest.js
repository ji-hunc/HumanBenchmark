import { useState } from 'react';
import React from 'react';
import * as style from './styles';

export default function ReactionTimeTest() {
  const [colorState, setColorState] = useState(1);
  const [color, setColor] = useState('rgb(43, 135, 209)');
  const [randomTimer, setRandomTimer] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [result, setResult] = useState('click to start');
  const [isTesting, setIsTesting] = useState(false);
  const [tryCount, setTrycount] = useState('');
  const [isFinishMeasure, setIsFinishMeasure] = useState(null);

  const red = 'rgb(206, 38, 54)';
  const green = 'rgb(75, 219, 106)';
  const blue = 'rgb(43, 135, 209)';

  const max = 5000;
  const min = 2000;

  const changeToGreen = () => {
    const randomNum = Math.random() * (max - min) + min;
    const timerId = setTimeout(() => {
      setColor(green);
      setStartTime(Date.now());
      console.log(startTime);
      setColorState(3);
    }, randomNum);
    setRandomTimer(timerId);
  };

  const handleClick = () => {
    if (!isTesting) {
      setIsTesting(true);
      setTrycount(5);
      setIsFinishMeasure(false);
    }
    if (colorState == 1) {
      // if blue
      setColor(red); // to red
      setColorState(2); // set to
      changeToGreen();
    } else if (colorState == 2) {
      // if red
      clearTimeout(randomTimer);
      setResult('Too Fast!');
      setColor(blue); // to green
      setColorState(1); // set to blue
    } else {
      // if green
      setResult(Date.now() - startTime + ' ms');
      if (tryCount - 1 == 0) {
        setIsTesting(false);
        setTrycount(-1);
        setIsFinishMeasure(true);
      } else {
        setTrycount((state) => state - 1);
      }
      setColor(blue); // to blue
      setColorState(1); // set to blue
    }
  };

  return (
    <style.Container
      onClick={() => handleClick()}
      style={{ backgroundColor: color }}
    >
      {colorState == 1 ? (
        <style.MainText>
          {/* {isFinishMeasure ? <h4>finish</h4> : <h4>play</h4>} */}
          {result}
          {isTesting ? <style.SubText>click to continue</style.SubText> : null}
        </style.MainText>
      ) : colorState == 2 ? (
        <style.MainText>Wait for Green ...</style.MainText>
      ) : (
        <style.MainText>Click!</style.MainText>
      )}
    </style.Container>
  );
}
