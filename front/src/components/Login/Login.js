/**********************************
 * Name : Login.js
 * Author : Jihun Choi
 * Introduction : 로그인 페이지
 ********************************** */
import { useRef } from 'react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from './styles';
import LoginState from '../../States/LoginState';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  // 유저로부터 입력값을 받는 refs
  const userName = useRef();
  const password = useRef();

  //  로그인 상태를 저장할 recoilState
  const setLoginState = useSetRecoilState(LoginState);

  // 엔터키를 눌렀을 때 불러질 함수
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      requestLogin(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  // Api에 로그인 요청을 POST로 보냄
  const requestLogin = async () => {
    const id = userName.current.value;
    const pw = password.current.value;

    if (id === '' || pw === '') {
      alert('모든 항목을 채워주세요');
      return;
    } else {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id, pw }),
        });

        const data = await response.text();
        if (data === 'notRegistered' || data === 'wrongPW') {
          alert('등록되지 않은 아이디이거나 비밀번호가 틀렸습니다.');
        } else if (data === 'allow') {
          alert('로그인 완료');
          sessionStorage.setItem('userId', id);
          setLoginState({
            isLogin: true,
            userId: id,
          });
          router.push('/');
        } else {
          alert('로그인 중 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('로그인 중 오류가 발생했습니다.');
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
