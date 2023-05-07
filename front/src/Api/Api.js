/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

// const reqUrl = 'http://192.168.219.104:8000';
const reqUrl = 'https://port-0-humanstats-5x7y2mlh8rjlfi.sel4.cloudtype.app';

export default {
  saveScore(gameName, userId, score) {
    if (userId === null) {
      alert('로그인후 시도해주세요.');
      return;
    }
    axios
      .post(`${reqUrl}/postScore/`, {
        gameName: gameName,
        id: userId,
        score: score,
      })
      .then(function (Response) {
        alert('등록완료!');
      })
      .catch((Error) => console.log(Error));
  },
  async getRanking(gameName) {
    try {
      const response = await axios.get(`${reqUrl}/rank/${gameName}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  async requestLogin(id, pw) {
    try {
      const response = axios.post(`${reqUrl}/login/`, {
        id: id,
        pw: pw,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async requestSignup(id, pw) {
    try {
      const response = axios.post(`${reqUrl}/signup/`, {
        id: id,
        pw: pw,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};
