/* eslint-disable react/prop-types */
import React from 'react';

export default function RankingRow(props) {
  return (
    <div
      className={`p-2 grid grid-cols-3 4xl:w-1/3 2xl:w-1/2 xs:w-full ${
        props.rank === 1
          ? 'bg-yellow-200'
          : props.rank === 2
          ? 'bg-gray-200'
          : props.rank === 3
          ? 'bg-yellow-500'
          : 'bg-white'
      }`}
    >
      <label className="flex justify-center 4xl:text-2xl 2xl:text-2xl xs:text-xl">
        {props.rank}
      </label>
      <label className="flex justify-center 4xl:text-2xl 2xl:text-2xl xs:text-xl">
        {props.userId}
      </label>
      <label className="flex justify-center 4xl:text-2xl 2xl:text-2xl xs:text-xl">
        {props.score}
      </label>
    </div>
  );
}
