/**********************************
 * Name : home.js
 * Author : Jihun Choi
 * Introduction : 가장 기본이 되는 home 페이지
 ********************************** */
import React from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const navigate = (url) => {
    router.push(url);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center w-full h-128 bg-primary"
        onClick={() => navigate('/reactiontimetest')}
      >
        <h1 className="text-4xl text-white">Reaction Time</h1>
      </div>
      <h1 className="mt-8 text-2xl">Other Games</h1>
      <div className="flex flex-wrap justify-center mt-4">
        <div
          className="p-4 m-2 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => navigate('/reactiontimetest')}
        >
          <h2 className="text-xl text-gray-800">Reaction Time</h2>
        </div>
        <div
          className="p-4 m-2 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => navigate('/sequencememorytest')}
        >
          <h2 className="text-xl text-gray-800">Sequence Memory</h2>
        </div>
        <div
          className="p-4 m-2 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => navigate('/numbermemorytest')}
        >
          <h2 className="text-xl text-gray-800">Number Memory</h2>
        </div>
        <div
          className="p-4 m-2 bg-white rounded-lg shadow-lg cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => navigate('/alphabetmemorytest')}
        >
          <h2 className="text-xl text-gray-800">Alphabet Memory</h2>
        </div>
      </div>
    </div>
  );
}
