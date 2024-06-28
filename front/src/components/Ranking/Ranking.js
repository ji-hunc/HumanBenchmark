/**********************************
 * Name : Ranking.js
 * Author : Jihun Choi
 * Introduction : 각 게임에서의 랭킹을 보여주기 위한 컴포넌트
 ********************************** */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import React from 'react';
import RankingRow from './RankingRow';

export default function Ranking({ gameName }) {
  // Get요청을 통해 받은 정보를 저장할 state
  const [rankData, setRankData] = useState([]);

  // 최초 실행시 Api로 랭킹정보를 Get함
  useEffect(() => {
    getData();
  }, []);

  // Api에 랭킹 정보를 Get하는 함수
  const getData = async () => {
    try {
      const response = await fetch(`/api/rank/${gameName}`);
      const data = await response.json();
      setRankData(data);
    } catch (error) {
      console.error('Error fetching rank data:', error);
    }
  };

  return (
    <div className="flex flex-col p-8 text-gray-800 bg-gray-200 rounded-md">
      <label className="text-4xl">Ranking</label>
      <div className="flex flex-col items-center mt-4">
        <RankingRow rank={'Rank'} userId={'UserName'} score={'Score'} />
        {rankData.map((item, index) => (
          <RankingRow
            key={index + 1}
            rank={index + 1}
            userId={item.user_id}
            score={item.score}
          />
        ))}
      </div>
    </div>
  );
}
