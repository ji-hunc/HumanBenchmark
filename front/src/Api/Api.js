/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  saveScore(gameName, userId, score) {
    axios
      .post('http://192.168.219.104:8000/postScore/', {
        gameName: gameName,
        id: userId,
        score: score,
      })
      .then(function (Response) {
        alert('등록완료!');
        console.log(Response);
      })
      .catch((Error) => console.log(Error));
  },
};
