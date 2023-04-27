/* eslint-disable react/prop-types */
import { useState } from 'react';
import React from 'react';
import * as style from './styles';

export default function TestCard(props) {
  return <style.Container>{props.title}</style.Container>;
}
