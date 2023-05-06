/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  saveScore(gameName, userId, score) {
    if (userId === null) {
      alert('로그인후 시도해주세요.');
      return;
    }
    axios
      .post(
        'https://port-0-humanstats-5x7y2mlh8rjlfi.sel4.cloudtype.app/postScore/',
        {
          gameName: gameName,
          id: userId,
          score: score,
        },
      )
      .then(function (Response) {
        alert('등록완료!');
        console.log(Response);
      })
      .catch((Error) => console.log(Error));
  },
};
