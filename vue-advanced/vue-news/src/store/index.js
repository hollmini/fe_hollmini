import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    askItem: {},
  },
  getters: { 
    fetchedNews(state) {
      return state.news;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    // fetchedUser(state) {
    //   return state.user;
    // },
    fetchedAskItem(state) {
      return state.askItem;
    },
  },
  mutations,
  actions,
});