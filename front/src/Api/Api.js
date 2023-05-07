/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
  saveScore(gameName, userId, score) {
    if (userId === null) {
      alert('로그인후 시도해주세요.');
      return;
    }
    axios
      .post('http://192.168.219.104:8000/postScore/', {
        gameName: gameName,
        id: userId,
        score: score,
      })
      .then(function (Response) {
        alert('등록완료!');
        window.location.reload();
      })
      .catch((Error) => console.log(Error));
  },
  async getRanking(gameName) {
    try {
      const response = await axios.get(
        `http://192.168.219.104:8000/rank/${gameName}`,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
