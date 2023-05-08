/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

// 로컬 테스트용, 실제 배포서버용 api주소
// const reqUrl = 'http://192.168.219.104:8000';
const reqUrl = 'https://port-0-humanstats-5x7y2mlh8rjlfi.sel4.cloudtype.app';

export default {
  // POST. 점수 저장 요청 함수
  saveScore(gameName, userId, score, isRegistered, setIsRegistered) {
    if (userId === null) {
      alert('로그인후 시도해주세요.');
      return;
    }
    if (isRegistered === true) {
      alert('이미 등록되었습니다.');
      return;
    }
    axios
      .post(`${reqUrl}/postScore/`, {
        gameName: gameName,
        id: userId,
        score: score,
      })
      .then(function (Response) {
        setIsRegistered(true);
        alert('등록완료!');
      })
      .catch((Error) => console.log(Error));
  },
  // GET. 각 게임 페이지 진입시 랭킹 정보 얻어오는 함수
  async getRanking(gameName) {
    try {
      const response = await axios.get(`${reqUrl}/rank/${gameName}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  // POST. 로그인 요청 함수
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
  // POST. 회원가입 요청 함수
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
