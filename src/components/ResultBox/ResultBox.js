/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import * as style from './styles';

export default function ResultBox(props) {
  return (
    <style.Container>
      <style.TestTitle>{props.testTitle}</style.TestTitle>
      <style.TestResult>{props.testResult + ' ms'}</style.TestResult>
      <style.InfoText>register your score</style.InfoText>
      <style.ButtonBox>
        <style.Button background="rgb(255, 209, 84)">Save score</style.Button>
        <style.Button
          onClick={props.clickTryAgain}
          background="rgba(255, 255, 255, 0.5)"
        >
          Try again
        </style.Button>
      </style.ButtonBox>
    </style.Container>
  );
}
