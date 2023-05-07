import { useRef, useState } from 'react';
import React from 'react';
import * as style from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Api from '../../Api/Api';

export default function SignUp() {
  const userName = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const requestSignup = async () => {
    const id = userName.current.value;
    const pw = password.current.value;
    const pw2 = passwordConfirm.current.value;

    if (id === '' || pw === '' || pw2 === '') {
      alert('모든 항목을 채워주세요');
      return;
    } else {
      if (pw !== pw2) {
        alert('입력한 비밀번호가 서로 다릅니다.');
        password.current.value = '';
        passwordConfirm.current.value = '';
        return;
      } else {
        // Request to server here
        const response = await Api.requestSignup(id, pw);
        if (response.data === 'already Exist!') {
          alert('이미 존재하는 아이디입니다.');
        } else {
          alert('성공적으로 등록되었습니다!');
          navigate('/login');
        }
      }
    }

    console.log(id);
    console.log(pw);
    console.log(pw2);
  };
  return (
    <style.Container>
      <style.InnerContainer>
        <style.Title>Sign Up</style.Title>
        <style.Input placeholder="User Name" ref={userName} />
        <style.Input placeholder="Password" type="password" ref={password} />
        <style.Input
          placeholder="PasswordConfirm"
          type="password"
          ref={passwordConfirm}
        />
        <style.SignUpButton onClick={requestSignup}>Sign Up</style.SignUpButton>
      </style.InnerContainer>
    </style.Container>
  );
}
