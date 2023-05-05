/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import * as style from './styles';

export default function AnswerCheck(props) {
  return (
    <style.Container>
      <style.Title>Number </style.Title>
      <style.CorrectAnswerLabel>{props.correctAnswer}</style.CorrectAnswerLabel>
      <style.Title>Your answer </style.Title>
      <style.AnswerLabel>{props.answer}</style.AnswerLabel>
    </style.Container>
  );
}
