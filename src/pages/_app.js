/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import LoginState from '../States/LoginState';
import '../styles/globals.css';
import Navigation from '../components/Navigation/Navigation';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Navigation />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
