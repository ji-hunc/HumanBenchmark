import { atom } from 'recoil';

const LoginState = atom({
  key: 'loginState',
  default: {
    isLogin: false,
    userId: '',
  },
});

export default LoginState;
