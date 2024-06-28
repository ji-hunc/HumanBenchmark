/* eslint-disable react/prop-types */
import React from 'react';

export default function RankingRow(props) {
  return (
    <div
      className={`p-2 grid grid-cols-3 w-1/2 shadow-md ${
        props.rank === 1
          ? 'bg-yellow-200'
          : props.rank === 2
          ? 'bg-gray-200'
          : props.rank === 3
          ? 'bg-yellow-500'
          : 'bg-white'
      }`}
    >
      <label className="text-2xl sm:text-xl">{props.rank}</label>
      <label className="text-2xl sm:text-xl">{props.userId}</label>
      <label className="text-2xl sm:text-xl">{props.score}</label>
    </div>
  );
}
