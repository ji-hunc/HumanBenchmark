import { useRef, useState } from 'react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginState from '../../States/LoginState';

export default function Login() {
  const navigate = useNavigate();
  const userName = useRef();
  const password = useRef();

  const setLoginState = useSetRecoilState(LoginState);

  const requestLogin = () => {
    const id = userName.current.value;
    const pw = password.current.value;

    if (id === '' || pw === '') {
      alert('모든 항목을 채워주세요');
      return;
    } else {
      axios
        .post('http://192.168.219.104:8000/login/', { id: id, pw: pw })
        .then((Response) => {
          console.log(Response.data);
          if (
            Response.data === 'notRegistered' ||
            Response.data === 'wrongPW'
          ) {
            alert('등록되지 않은 아이디이거나 비밀번호가 틀렸습니다.');
          } else if (Response.data === 'allow') {
            alert('로그인 완료');
            sessionStorage.setItem('userId', id);
            setLoginState({
              isLogin: true,
              userId: id,
            });
            navigate('/');
            window.location.reload();
          } else {
            console.log(Response.data);
          }
          // if (Response.data === 'already Exist!') {
          //   alert('이미 존재하는 아이디입니다.');
          // } else {
          //   alert('성공적으로 등록되었습니다!');
          // }
        })
        .catch((Error) => console.log(Error));
      // alert('회원가입 완료~');
    }
  };
  return (
    <style.Container>
      <style.InnerContainer>
        <style.Title>Login</style.Title>
        <style.description>UserName</style.description>
        <style.Input ref={userName} />
        <style.description>Password</style.description>
        <style.Input type="password" ref={password} />
        <style.SignUpButton onClick={requestLogin}>Login</style.SignUpButton>
      </style.InnerContainer>
    </style.Container>
  );
}
