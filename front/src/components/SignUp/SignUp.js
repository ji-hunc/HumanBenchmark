/**********************************
 * Name : SignUp.js
 * Author : Jihun Choi
 * Introduction : 회원가입 페이지
 ********************************** */
import { useRef } from 'react';
import * as style from './styles';

export default function SignUp() {
  // 유저의 입력을 받을 input refs
  const userName = useRef();
  const password = useRef();
  const passwordConfirm = useRef();

  // api에게 회원가입 요청을 Post로 보냄
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
        try {
          console.log('body');
          console.log(id, pw);
          const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, pw }),
          });
          const data = await response.text();
          console.log(data);
          if (data === 'already Exist!') {
            alert('이미 존재하는 아이디입니다.');
          } else if (response.ok) {
            alert('성공적으로 등록되었습니다!');
          } else {
            alert('회원가입 중 오류가 발생했습니다.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('회원가입 중 오류가 발생했습니다.');
        }
      }
    }
  };

  return (
    <style.Container>
      <style.InnerContainer>
        <style.Title>Sign Up</style.Title>
        <style.InputWrapper>
          <style.Input placeholder="User Name" ref={userName} />
          <style.Input placeholder="Password" type="password" ref={password} />
          <style.Input
            placeholder="PasswordConfirm"
            type="password"
            ref={passwordConfirm}
          />
        </style.InputWrapper>
        <style.SignUpButton onClick={requestSignup}>Sign Up</style.SignUpButton>
      </style.InnerContainer>
    </style.Container>
  );
}
