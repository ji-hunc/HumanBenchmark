/**********************************
 * Name : AnswerCheck.js
 * Author : Jihun Choi
 * Introduction : NumberMemory, AlphabetMemory 테스트에 사용되는 컴포넌트. 실제 답과 사용자의 답을 대조해서 보여줌
 ********************************** */
/* eslint-disable react/prop-types */
import React from 'react';
import * as style from './styles';

export default function AnswerCheck(props) {
  return (
    <style.Container>
      <style.Title>{props.question}</style.Title>
      <style.CorrectAnswerLabel>{props.correctAnswer}</style.CorrectAnswerLabel>
      <style.Title>Your answer</style.Title>
      <style.AnswerLabel>{props.answer}</style.AnswerLabel>
    </style.Container>
  );
}
