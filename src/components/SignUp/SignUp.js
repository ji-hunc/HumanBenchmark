/**********************************
 * Name : SignUp.js
 * Author : Jihun Choi
 * Introduction : 회원가입 페이지
 ********************************** */
import { useRef } from 'react';

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
    <div
      className="flex flex-col items-center w-full bg-primary"
      style={{ height: 'calc(100vh - var(--nav-height))' }}
    >
      <div className="flex flex-col justify-start w-11/12 max-w-xl">
        <label className="w-full my-12 font-light text-center text-white 4xl:text-6xl 2xl:text-6xl xs:text-4xl">
          Sign Up
        </label>
        <div className="flex flex-col items-start justify-start gap-1">
          <input
            placeholder="User Name"
            ref={userName}
            className="w-full h-12 p-2 text-base border border-gray-400 rounded-lg"
          />
          <input
            placeholder="Password"
            type="password"
            ref={password}
            className="w-full h-12 p-2 text-base border border-gray-400 rounded-lg"
          />
          <input
            placeholder="PasswordConfirm"
            type="password"
            ref={passwordConfirm}
            className="w-full h-12 p-2 text-base border border-gray-400 rounded-lg"
          />
        </div>
        <button
          onClick={requestSignup}
          className="w-full p-3 mt-5 text-2xl text-white bg-teal-600 rounded-lg cursor-pointer h-15 sm:h-12 sm:text-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
