import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
  // ㄴ> return axios.get(config.baseUrl + 'news/1.json'); 을 ES6로 변환한 코드.
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchAskItem(askId) {
  return axios.get(`${config.baseUrl}item/${askId}.json`);

} 

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskItem,
}