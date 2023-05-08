import { React, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/home';
import { Route, Routes } from 'react-router-dom';
import ReactionTimeTest from './pages/ReactionTimeTest/reactionTimeTest';
import SequenceMemoryTest from './pages/SequenceMemoryTest/SequenceMemoryTest';
import NumberMemoryTest from './pages/NumberMemoryTest/numberMemoryTest';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { useSetRecoilState } from 'recoil';
import LoginState from './States/LoginState';
import AlphabetMemoryTest from './pages/AlphabetMemoryTest/AlphabetMemoryTest';

function App() {
  const setLoginState = useSetRecoilState(LoginState);

  useEffect(() => {
    const userId = sessionStorage.getItem('userId');
    if (userId !== null) {
      setLoginState({
        isLogin: true,
        userId: userId,
      });
    } else {
      setLoginState({
        isLogin: true,
        userId: null,
      });
    }
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reactiontimetest" element={<ReactionTimeTest />} />
        <Route path="/sequencememorytest" element={<SequenceMemoryTest />} />
        <Route path="/numbermemorytest" element={<NumberMemoryTest />} />
        <Route path="/alphabetmemorytest" element={<AlphabetMemoryTest />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
