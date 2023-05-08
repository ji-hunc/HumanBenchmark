/**********************************
 * Name : Login.js
 * Author : Jihun Choi
 * Introduction : 로그인 페이지
 ********************************** */
import { useRef } from 'react';
import React from 'react';
import { useSetRecoilState } from 'recoil';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import LoginState from '../../States/LoginState';
import Api from '../../Api/Api';

export default function Login() {
  // 페이지 이동을 위한 navigate
  const navigate = useNavigate();
  // 유저로부터 입력값을 받는 refs
  const userName = useRef();
  const password = useRef();

  // 로그인 상태를 저장할 recoilState
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
