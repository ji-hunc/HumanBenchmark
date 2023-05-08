/**********************************
 * Name : Navigation.js
 * Author : Jihun Choi
 * Introduction : Navigation 바. Title, login, logout. signup으로의 navigate 포함
 ********************************** */
import React from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';

export default function Navigation(props) {
  // user 정보 가져오기
  const loginInfo = useRecoilValue(LoginState);

  // 화면 이동을 위한 navigate
  const navigate = useNavigate();

  // 로그아웃을 위한 함수. sessionStorage 초기화
  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <style.Container>
      <style.TitleWrapper>
        <style.Title
          onClick={() => {
            navigate('/');
            window.location.reload();
          }}
        >
          Human Stats
        </style.Title>
      </style.TitleWrapper>
      <style.ButtonWrapper>
        {loginInfo.userId ? (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <style.LoginButton>{loginInfo.userId}</style.LoginButton>
            <style.LoginButton onClick={logOut}>Logout</style.LoginButton>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <style.LoginButton onClick={() => navigate('/login')}>
              Login
            </style.LoginButton>
            <style.SignUpButton onClick={() => navigate('/signup')}>
              Sign Up
            </style.SignUpButton>
          </div>
        )}
      </style.ButtonWrapper>
    </style.Container>
  );
}
