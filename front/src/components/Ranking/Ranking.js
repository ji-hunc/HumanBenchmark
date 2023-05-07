/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import React from 'react';
import * as style from './styles';
import RankingRow from './RankingRow';
import Api from '../../Api/Api';

export default function Ranking(props) {
  const [rankData, setRankData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

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
