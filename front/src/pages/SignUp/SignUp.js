import { useRef, useState } from 'react';
import React from 'react';
import * as style from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const userName = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const navigate = useNavigate();

  const requestSignup = () => {
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
        axios
          .post('http://humanstats:3000/signup/', { id: id, pw: pw })
          .then((Response) => {
            console.log(Response.data);
            if (Response.data === 'already Exist!') {
              alert('이미 존재하는 아이디입니다.');
            } else {
              alert('성공적으로 등록되었습니다!');
              navigate('/login');
            }
          })
          .catch((Error) => console.log(Error));
        // alert('회원가입 완료~');
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
        <style.description>UserName</style.description>
        <style.Input ref={userName} />
        <style.description>Password</style.description>
        <style.Input type="password" ref={password} />
        <style.description>Password Confirm</style.description>
        <style.Input type="password" ref={passwordConfirm} />
        <style.SignUpButton onClick={requestSignup}>Sign Up</style.SignUpButton>
      </style.InnerContainer>
    </style.Container>
  );
}
