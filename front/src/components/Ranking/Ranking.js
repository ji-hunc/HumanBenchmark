/**********************************
 * Name : Ranking.js
 * Author : Jihun Choi
 * Introduction : 각 게임에서의 랭킹을 보여주기 위한 컴포넌트
 ********************************** */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import React from 'react';
import * as style from './styles';
import RankingRow from './RankingRow';
import Api from '../../Api/Api';

export default function Ranking(props) {
  // Get요청을 통해 받은 정보를 저장할 state
  const [rankData, setRankData] = useState([]);

  // 최초 실행시 Api로 랭킹정보를 Get함
  useEffect(() => {
    getData();
  }, []);

  // Api에 랭킹 정보를 Get하는 함수
  const getData = async () => {
    const data = await Api.getRanking(props.gameName);
    setRankData(data);
  };

  return (
    <style.Container>
      <style.Title>Ranking</style.Title>
      <style.RowWrapper>
        <RankingRow rank={'Rank'} userId={'UserName'} score={'Score'} />
        {rankData.map((item, index) => (
          <RankingRow
            key={index + 1}
            rank={index + 1}
            userId={item.user_id}
            score={item.score}
          />
        ))}
      </style.RowWrapper>
    </style.Container>
  );
}
