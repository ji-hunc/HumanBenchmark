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
        <h1 className="text-white 4xl:text-8xl 2xl:text-8xl xs:text-4xl">
          Click!
        </h1>
      </div>
      <h1 className="mt-8 text-2xl">Other Games</h1>
      <div className="flex flex-wrap justify-center mt-4 4xl:flex 2xl:flex xs:grid xs:grid-cols-2 xs:mx-6">
        <div
          className="p-8 m-2 transition-transform transform rounded-lg shadow-lg cursor-pointer bg-orange hover:scale-105"
          onClick={() => navigate('/reactiontimetest')}
        >
          <h2 className="text-xl text-center text-white">Reaction Time</h2>
        </div>
        <div
          className="p-8 m-2 transition-transform transform rounded-lg shadow-lg cursor-pointer bg-orange hover:scale-105"
          onClick={() => navigate('/sequencememorytest')}
        >
          <h2 className="text-xl text-center text-white">Sequence Memory</h2>
        </div>
        <div
          className="p-8 m-2 transition-transform transform rounded-lg shadow-lg cursor-pointer bg-orange hover:scale-105"
          onClick={() => navigate('/numbermemorytest')}
        >
          <h2 className="text-xl text-center text-white">Number Memory</h2>
        </div>
        <div
          className="p-8 m-2 transition-transform transform rounded-lg shadow-lg cursor-pointer bg-orange hover:scale-105"
          onClick={() => navigate('/alphabetmemorytest')}
        >
          <h2 className="text-xl text-center text-white">Alphabet Memory</h2>
        </div>
      </div>
    </div>
  );
}
