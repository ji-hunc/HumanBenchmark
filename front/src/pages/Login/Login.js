import { useRef, useState } from 'react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginState from '../../States/LoginState';
import Api from '../../Api/Api';

export default function Login() {
  const navigate = useNavigate();
  const userName = useRef();
  const password = useRef();

  const setLoginState = useSetRecoilState(LoginState);

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      requestLogin(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const requestLogin = async () => {
    const id = userName.current.value;
    const pw = password.current.value;

    if (id === '' || pw === '') {
      alert('모든 항목을 채워주세요');
      return;
    } else {
      const response = await Api.requestLogin(id, pw);
      if (response.data === 'notRegistered' || response.data === 'wrongPW') {
        alert('등록되지 않은 아이디이거나 비밀번호가 틀렸습니다.');
      } else if (response.data === 'allow') {
        alert('로그인 완료');
        sessionStorage.setItem('userId', id);
        setLoginState({
          isLogin: true,
          userId: id,
        });
        navigate('/');
        window.location.reload();
      } else {
        console.log(response.data);
      }
    }
  };

  return (
    <style.Container>
      <style.InnerContainer>
        <style.Title>Login</style.Title>
        <style.InputWrapper>
          <style.Input
            placeholder="User Name"
            onKeyPress={handleOnKeyPress}
            ref={userName}
          />
          <style.Input
            placeholder="Password"
            onKeyPress={handleOnKeyPress}
            type="password"
            ref={password}
          />
        </style.InputWrapper>
        <style.SignUpButton onClick={requestLogin}>Login</style.SignUpButton>
      </style.InnerContainer>
    </style.Container>
  );
}
