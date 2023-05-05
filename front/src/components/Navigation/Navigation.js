import { useState, useEffect } from 'react';
import React from 'react';
import * as style from './styles';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginState from '../../States/LoginState';

export default function Navigation(props) {
  const loginInfo = useRecoilValue(LoginState);

  const navigate = useNavigate();

  const logOut = () => {
    sessionStorage.clear();
    window.location.reload();
    console.log('logout');
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
          Human Benchmark
        </style.Title>
      </style.TitleWrapper>
      <style.ButtonWrapper>
        {loginInfo.userId ? (
          <div>
            <style.LoginButton>{loginInfo.userId}</style.LoginButton>
            <style.LoginButton onClick={logOut}>Logout</style.LoginButton>
          </div>
        ) : (
          <div>
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
