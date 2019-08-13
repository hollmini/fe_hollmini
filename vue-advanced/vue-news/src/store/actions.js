import { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList, 
  fetchUserInfo,
  fetchAskItem,
 } from "../api/index.js";

export default {
  FETCH_NEWS(context) {  
    fetchNewsList()
      .then(response => {
        context.commit('SET_NEWS', response.data); // mutations에 제어권을 넘기는 명령어. 
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) { 
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        // console.log(response.data);
        commit('SET_USER', data)
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASK_ITEM({ commit }, askId) {
    fetchAskItem(askId)
      .then(({ data }) => {
        // console.log(response.data);
        commit('SET_ASK_ITEM', data)
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  },
}