/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import * as style from './styles';

export default function ResultBox(props) {
  return (
    <style.Container>
      <style.TestTitle>{props.testTitle}</style.TestTitle>
      <style.TestResult>{props.testResult}</style.TestResult>
      <style.InfoText>register your score</style.InfoText>
      <style.ButtonBox>
        <style.Button onClick={props.saveScore} background="rgb(255, 213, 97)">
          Save score
        </style.Button>
        <style.Button
          onClick={props.clickTryAgain}
          background="rgb(217, 217, 217)"
        >
          Try again
        </style.Button>
      </style.ButtonBox>
    </style.Container>
  );
}
