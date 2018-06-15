import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  data: '',
  newsong: ''
};

const mutations = {
  getData(state, payload) {
    state.data = payload;
  },
  getNewsong(state, payload) {
    state.newsong = payload;
  }
};

const getters = {

};

const actions = {

};




export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  getters,
  actions
});